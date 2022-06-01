import React from 'react';
import {Card, CardContent, CardHeader, Divider, Grid, Typography} from '@material-ui/core';
import TableBasic from '../forms/tables/TableBasic';
import { Link } from 'react-router-dom'


const dataPeserta = () => {
        console.log('Clicked');
    return (
        <Grid container>
            <Grid item xs={12}>
                  <Link to={'/tambahPeserta'}>
                    <div>
                        <button onClick={ dataPeserta }>Tambah Peserta</button>
                    </div><br></br>
                  </Link>
                <Card>
                    <Divider />
                    <TableBasic/>
                </Card>
            </Grid>
        </Grid>
    );
};

export default dataPeserta;