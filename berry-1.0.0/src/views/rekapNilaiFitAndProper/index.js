import React from 'react';
import {Card, CardContent, CardHeader, Divider, Grid, Typography} from '@material-ui/core';
import TableRekapNilaiFit from '../forms/tables/TableRekapNilaiFit'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const rekapNilaiFitAndProper = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title={<Typography variant="h5">Report Nilai Peserta Fit & Proper</Typography>} />
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell >70941N0G-MUCHSIN AKUBA</TableCell>
                                <TableCell >Jabatan Proyeksi : MANAGER AREA PENGATUR BEBAN&nbsp;</TableCell>
                                <TableCell >04 February 22&nbsp;</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                    <Divider />
                    <TableRekapNilaiFit />
                </Card>
            </Grid>
        </Grid>
    );
};

export default rekapNilaiFitAndProper;
