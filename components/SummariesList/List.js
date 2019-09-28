import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Box, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 10,
        flexGrow: 1
    },
    card: {
        maxWidth: 345
    },
    media: {
        height: 140
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
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};
