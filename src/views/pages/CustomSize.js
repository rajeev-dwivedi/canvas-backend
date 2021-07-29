import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CCardHeader,
  CFormGroup,
  CLabel,
  CFormText,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const CustomSize = () => {
  return (
    <CCol xs="12" md="5">
      <CCard>
        <CCardHeader>
          Custom Design
          <small> Form</small>
        </CCardHeader>
        <CCardBody>
          <CForm action="" method="post" className="form-horizontal">
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-email">Title</CLabel>
              </CCol>
              <CCol xs="12" md="6">
                <CInput type="Text" id="hf-email" name="hf-email" placeholder="Enter Title..." autoComplete="email" />
                {/* <CFormText className="help-block">Please enter your email</CFormText> */}
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-password">Size</CLabel>
              </CCol>
              <CCol xs="12" md="6">
                <CInput type="text" id="hf-password" name="hf-password" placeholder="Enter Size..." autoComplete="current-password"/>
                {/* <CFormText className="help-block">Please enter your password</CFormText> */}
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-password">Price</CLabel>
              </CCol>
              <CCol xs="12" md="6">
                <CInput type="text" id="hf-password" name="Price" placeholder="Enter price..."/>
                {/* <CFormText className="help-block">Please enter your password</CFormText> */}
              </CCol>
            </CFormGroup>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" color="success"><CIcon name="cil-scrubber" /> Submit</CButton>
        </CCardFooter>
      </CCard>
    </CCol>
  )
}

export default CustomSize
