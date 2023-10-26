// ** React Imports
import { useEffect, useState } from 'react'

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
import { getUsersss } from 'src/ApiHits/newuser/NewUserCalling'

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'phoneNo', label: 'Phone No.', minWidth: 100 },
  {
    id: 'totelPayment',
    label: 'Total Payment',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'advance',
    label: 'submitted payment',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'dues',
    label: 'Due/month',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'motorcycleType',
    label: 'motor type',
    minWidth: 170,
    align: 'right'
  }
]
function createData(name, phoneNo, totelPayment, advance, dues, motorcycleType) {
  return { name, phoneNo, totelPayment, advance, dues, motorcycleType }
}

const TableStickyHeader = () => {
  // ** States
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData() {
      let userData = await getUsersss()
      console.log('new user', userData)
      setData(userData)
    }
    fetchData()
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
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
              <TableCell>Achghgh</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id]

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    )
                  })}
                  <TableCell>
                    <Box sx={{ display: 'flex' }}>
                      <Button>
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
  )
}

export default TableStickyHeader
