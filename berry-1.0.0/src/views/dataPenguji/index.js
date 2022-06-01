import React from 'react';
import {Card, CardContent, CardHeader, Divider, Grid, Typography} from '@material-ui/core';
import TableBasic2 from '../forms/tables/TableBasic2';
  import { Link } from 'react-router-dom'

const dataPenguji = () => {
  console.log('Clicked');
    return (
        <Grid container>
            <Grid item xs={12}>
                  <Link to={'/tambahpenguji'}>
                  <div>
                        <button onClick={ dataPenguji}>Tambah Penguji</button>
                    </div><br></br>
                  </Link>
                <Card>
                    <Divider />
                    <TableBasic2/>
                </Card>
            </Grid>
        </Grid>
    );
};

export default dataPenguji;
