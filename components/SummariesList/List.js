import React from 'react';

export default ({ summaries }) =>
    summaries.map(summary => <h2>{summary.title}</h2>);
