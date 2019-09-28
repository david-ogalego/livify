import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default () => (
    <AppBar color="primary" position="sticky">
        <Toolbar>
            <Typography variant="h6">Livify</Typography>
        </Toolbar>
    </AppBar>
);
