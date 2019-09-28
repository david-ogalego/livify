import React from 'react';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    card: {
        maxWidth: 345
    },
    media: {
        height: 140
    }
}));

export default ({ summary }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={summary.thumbnail}
                    title={summary.title}
                />
                <CardContent>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {summary.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
