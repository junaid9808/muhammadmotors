// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import Button from '@mui/material/Button'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import Box from '@mui/material/Box'
import { useEffect } from 'react'
import { getCompamies } from 'src/ApiHits/company/CompantCalling'
import moment from 'moment/moment'
import { companyDelete } from 'src/ApiHits/company/CompantCalling'

const columns = [
  { id: 'companyName', label: 'Company Name', minWidth: 170, align: 'center' },
  { id: 'productType', label: 'Product Type', minWidth: 170, align: 'center' },
  {
    id: 'productPrice',
    label: 'Product Price',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'serialNo',
    label: 'Serial No',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'quantity',
    label: 'Quantity',
    minWidth: 170,
    align: 'center'
  },

  {
    id: 'payment',
    label: 'Payment',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'remainingPayment',
    label: 'Remaining Payment',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'createdAt',
    label: 'Date',
    minWidth: 170,
    align: 'center'
  }
]

const CompaniesRecord = () => {
  // ** States
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [data, setData] = useState([])
  const [deltee, setDeletee] = useState()
  useEffect(() => {
    async function fetchdata() {
      let companyData = await getCompamies()
      console.log('hasjhjssd', companyData)
      setData(companyData)
    }
    fetchdata()
  }, [deltee])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const deletee = async id => {
    try {
      console.log('id', id)
      const deleteData = await companyDelete(id)
      setDeletee(deleteData)
    } catch (error) {
      console.error('error deleting company', error)
    }
  }

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label='user rocords'>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
                <TableCell align='center'>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id]

                      let newdata
                      if (column.id === 'createdAt') {
                        newdata = moment(row['createdAt']).format('LLL')
                      }
                      if (newdata) {
                        value = newdata
                      }

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      )
                    })}
                    <TableCell>
                      <Box sx={{ display: 'flex' }}>
                        <Button className='bg-blue-500' onClick={() => deletee(row._id)}>
                          <DeleteForeverIcon />
                        </Button>
                        <Button>
                          <EditIcon />
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  )
}

export default CompaniesRecord
