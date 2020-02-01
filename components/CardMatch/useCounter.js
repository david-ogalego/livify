import { useState, useEffect, useRef } from 'react';

const twoDigitsNumber = (number) => (`0${number}`).slice(-2);

export default function useCounter(elapsed) {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(elapsed);
	const savedCallback = useRef();

	function callback() {
        if (minutes >= 90) {
			return setSeconds(0);
		}
		if (seconds < 59) {
			const newSeconds = seconds + 1;
			return setSeconds(newSeconds);
		}
		const newMinutes = minutes + 1;
		setMinutes(newMinutes);
		return setSeconds(0);
	}

	useEffect(() => {
		savedCallback.current = callback;
	});

	useEffect(() => {
		function tick() {
			savedCallback.current();
		}

		const id = setInterval(tick, 1000);
		return () => clearInterval(id);
	}, []);

	return { minutes: twoDigitsNumber(minutes), seconds: twoDigitsNumber(seconds) };
}
