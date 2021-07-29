import React from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CCardHeader,
  CRow,
  CDataTable,
  CBadge,
} from '@coreui/react';

import usersData from '../../views/users/UsersData';


const fields = ['name','registered', 'role', 'status'];
const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const CustomSize = () => {
  return (
    <CRow>
      <CCol xs="12" lg="12">
        <CCard>
          <CCardHeader>
            Custom Size List
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={usersData}
            fields={fields}
            itemsPerPage={5}
            pagination
            scopedSlots = {{
              'status':
                (item)=>(
                  <td>
                    <CBadge color={getBadge(item.status)}>
                      {item.status}
                    </CBadge>
                  </td>
                )

            }}
          />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CustomSize
