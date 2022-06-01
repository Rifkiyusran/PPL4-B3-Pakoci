import React from 'react';
import {Card, CardContent, CardHeader, Divider, Grid, Typography} from '@material-ui/core';
import TableNilaiFit from '../forms/tables/TableNilaiFit'
import EventNoteTwoToneIcon from '@mui/icons-material/EventNoteTwoTone';

const cetakNilaiFitAndProper = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Card>
                <CardHeader title={<Typography variant="h5" > {<EventNoteTwoToneIcon/> } Report Nilai Peserta Fit & proper</Typography>} />
                    <Divider />
                    <TableNilaiFit />
                </Card>
            </Grid>
        </Grid>
    );
};

export default cetakNilaiFitAndProper;
