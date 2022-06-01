import React, { Component } from 'react';
import axios from 'axios';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormCheck,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CInputGroup,
    CInputGroupText,
    CRow,
} from '@coreui/react'

export class index extends Component {

    state = {
        data: {
          NIP: 0,
        }
      };
    
      handleFormChange = (event) => {
        console.log("handleFormChange", event.target);
        let dataNew = { ...this.state.data };
        dataNew[event.target.name] = event.target.value;
        this.setState(
          {
            data: dataNew,
          },
          () => {
            console.log("value data", this.state.data);
          }
        );
      };
    
      handleSubmit = () => {
        console.log("submit");
        this.postData();
      };
    
      postData = (event) => {
        event.preventDefault();
        const data = {
          NIP: this.state.data["NIP"],
        };
        axios.post("http://localhost:1337/api/registrants", { data }).then(
          (res) => {
            console.log("res post",res);
            // alert.show("hello world");
          },
          (err) => {
            console.log("err", err);
          }
        );
      };

      render(){
        return (
          <CRow>
            <CCol xs={12}>
              <CCard className="mb-4">
                <CCardHeader>
                  <strong>Tambah Peserta</strong>
                </CCardHeader>
                <CCardBody>
                    <CForm onSubmit={this.postData}>
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                          NIP
                        </CFormLabel>
                        <CCol sm={10}>
                          <CFormInput type="number" id="inputEmail3" name='NIP' placeholder='Masukkan NIP' onChange={this.handleFormChange} />
                        </CCol>
                      </CRow>
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                          Nama
                        </CFormLabel>
                        <CCol sm={10}>
                          <CFormInput type="password" id="inputPassword3" placeholder='Nama Pegawai Akan Muncul Disini' disabled />
                        </CCol>
                      </CRow>
                      <CButton type="submit" style={{width:'100%'}}>Submit</CButton>
                    </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        )
    }
  
}

export default index