import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '../../components/Card';
import { Box, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 10,
        flexGrow: 1
    }
}));

export default ({ summaries }) => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={2}>
                            {summaries.map((summary, index) => (
                                <Grid xs={3} key={index} item>
                                    <Card summary={summary} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};
