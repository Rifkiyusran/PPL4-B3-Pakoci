import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import {Card, CardHeader, Divider, Grid} from '@material-ui/core';
import Button from '@mui/material/Button';
import MessageTwoToneIcon from '@mui/icons-material/MessageTwoTone';

import {gridSpacing} from '../../../../store/constant';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
        minWidth: 350,
        fontSize:30
    }
});

function createData(no,name, nip, jabatan, proyeksi, jenjang, tgl, penguji) {
    return {no,name, nip, jabatan, proyeksi, jenjang, tgl, penguji};
}

const rows = [
    createData(1,'DIDIK SETIO IRAWAN', 1234567890, 'DEPUTI MANAGER PEMBANGKIT', 'MANAJER SEKTOR' , 'MD', '13-04-2018', 'gatau'),
];

export default function TableBasic() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Card>
                        
                        <Divider />
                        <TableContainer>
                            <Table className={classes.table} striped style={{ display:'block', 'overflow-x':'scroll'}}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell >No</TableCell>
                                        <TableCell >Nama&nbsp;</TableCell>
                                        <TableCell align="left" width={10}>NIP&nbsp;</TableCell>
                                        <TableCell align="center">Jabatan&nbsp;</TableCell>
                                        <TableCell align="left">Proyeksi&nbsp;</TableCell>
                                        <TableCell align="center">jenjang&nbsp;</TableCell>
                                        <TableCell align="center">Tgl Fit&Proper&nbsp;</TableCell>
                                        <TableCell align="center">Penguji&nbsp;</TableCell>
                                        <TableCell align="center">Nilai&nbsp;</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.no} >
                                            <TableCell component="th" scope="row" >
                                                {row.no}
                                            </TableCell>
                                            <TableCell align="left">{row.name}</TableCell>
                                            <TableCell align="center">{row.nip}</TableCell>
                                            <TableCell align="center">{row.jabatan}</TableCell>
                                            <TableCell align="left">{row.proyeksi}</TableCell>
                                            <TableCell align="center">{row.jenjang}</TableCell>
                                            <TableCell align="center">{row.tgl}</TableCell>
                                            <TableCell align="center">{row.penguji}</TableCell>
                                            <TableCell align="center"><Button variant="contained" startIcon={<MessageTwoToneIcon/>} href="#contained-buttons">Lihat Nilai</Button></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
