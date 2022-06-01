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

function createData(no, tgl, proyeksiJabatan) {
    return {no, tgl, proyeksiJabatan};
}

const rows = [
    createData(1,'24-03-2020', 'MANAGER UP3'),
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
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow border='1'>
                                        <TableCell width={20}>No</TableCell>
                                        <TableCell width={150}>TGL&nbsp;</TableCell>
                                        <TableCell align="left">PROYEKSI JABATAN&nbsp;</TableCell>
                                        <TableCell width={200} align="left">LIHAT&nbsp;</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.no} >
                                            <TableCell component="th" scope="row" >
                                                {row.no}
                                            </TableCell>
                                            <TableCell align="left">{row.tgl}</TableCell>
                                            <TableCell align="left">{row.proyeksiJabatan}</TableCell>
                                            <TableCell align="left"><Button variant="contained" startIcon={<MessageTwoToneIcon/>} href="#contained-buttons">Lihat Cetak</Button></TableCell>
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
