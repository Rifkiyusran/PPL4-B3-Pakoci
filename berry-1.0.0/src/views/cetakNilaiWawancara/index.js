import React from 'react';
import {Card, CardContent, CardHeader, Divider, Grid, Typography} from '@material-ui/core';
import TableNilaiWawancara from '../forms/tables/TableNilaiWawancara'

const cetakNilaiWawancara = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title={<Typography variant="h5">Report Nilai Peserta Fit & Proper</Typography>} />
                    <Divider />
                <TableNilaiWawancara />
                </Card>
            </Grid>
        </Grid>
    );
};

export default cetakNilaiWawancara;
