import React from 'react';
import {Card, CardContent, CardHeader, Divider, Grid, Typography} from '@material-ui/core';
//import TableFit from '../forms/tables/TableFit';

const penilaianFitAndProper = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title={<Typography variant="h5">Report Nilai Peserta Fit & Proper</Typography>} />
                </Card>
                <Divider />
            </Grid>
        </Grid>
    );
};

export default penilaianFitAndProper;
