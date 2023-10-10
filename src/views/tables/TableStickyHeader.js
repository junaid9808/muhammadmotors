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

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'PhoneNo', label: 'Phone No.', minWidth: 100 },
  {
    id: 'totalpayment',
    label: 'Total Payment',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'submittedpayment',
    label: 'submitted payment',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'due',
    label: 'Due/month',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'motortype',
    label: 'motor type',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'userdetail',
    label: 'user detail',
    minWidth: 170,
    align: 'right'
  }
]
function createData(name, PhoneNo, totalpayment, submittedpayment, due, motortype) {
  return { name, PhoneNo, totalpayment, submittedpayment, due, motortype }
}

const rows = [
  createData('ali', '03007879', 100000, 50000, 50000, 'bike'),
  createData('akther', '030098667', 175000, 100000, 25000, 'cd 70'),
  createData('azam', '0977', 175000, 100000, 25000, 'cd 70'),
  createData('aslam', '343', 175000, 100000, 25000, 'cd 70'),
  createData('shiket', '4354', 175000, 100000, 25000, 'cd 70'),
  createData('wazir', '345', 175000, 100000, 25000, 'cd 70'),
  createData('hanza', '3534', 175000, 100000, 25000, 'cd 70')
]

const TableStickyHeader = () => {
  // ** States
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

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
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
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
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TableStickyHeader
