import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TableBasic(){
  const [posts, setPosts] = useState([])

  useEffect(() =>{
      axios.get('http://10.50.164.137:1337/api/pendaftars?populate[0]=pegawai.jabatan&populate[1]=pegawai.grade&populate[2]=pegawai.jenjang')
          .then(res => {
            console.log(res)
            setPosts(res.data.data)
          })
          .catch(err => {
            console.log(err)
          })
  }, [posts])

    return(
        <TableContainer component={Paper}>  
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
             <TableHead>
              <TableRow>
                {/* <TableCell >No</TableCell> */}
                <TableCell align="left">Nama</TableCell>
                <TableCell align="left">NIP</TableCell>
                <TableCell align="left">Jabatan</TableCell>
                <TableCell align="left">Grade</TableCell>
                <TableCell align="left">Jenjang</TableCell>
              </TableRow>
            </TableHead>
              {posts.map(post => 
                <TableBody>
                  <TableRow>
                    {/* <TableCell>{post.attributes.pegawai.data.attributes.id}</TableCell> */}
                    <TableCell align="left">{post.attributes.pegawai.data.attributes.nama}</TableCell>
                    <TableCell align="left">{post.attributes.pegawai.data.attributes.nip}</TableCell>
                    <TableCell align="left">{post.attributes.pegawai.data.attributes.jenjang.data.attributes.nama_jenjang}</TableCell>
                    <TableCell align="left">{post.attributes.pegawai.data.attributes.grade.data.attributes.nama_grade}</TableCell>
                    <TableCell align="left">{post.attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan}</TableCell>
                  </TableRow>
                </TableBody>
                )}
          </Table>
        </TableContainer> 
    )
}


export default TableBasic