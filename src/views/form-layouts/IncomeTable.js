import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import Button from '@mui/material/Button'
import { getIncome } from 'src/ApiHits/revenue/getIncome';
import moment from 'moment';
import { ArrowBackIosNew } from '@mui/icons-material';

const columns = [
    { id: 'name', label: 'Customer Name', minWidth: 170 },
    { id: 'installmentAmount', label: 'Installment', minWidth: 100 },
    { id: 'tillId', label: 'Transaction Id', minWidth: 170, align: 'right' },
    { id: 'createdAt', label: 'Paid Date', minWidth: 170, align: 'right' },
  ];

export default function IncomeTable() {
  const [days, setDays] = useState(1)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setData] = useState([])

  const handleChange = (event) => {
    setDays(event.target.value);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  useEffect(() => {

    const fetchData = async () => {
      try {
        if (!days) return;
        const data = await getIncome(days);
        setData(data);
        console.log("data is here",data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [days]);

  return (
    <>
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} >
      <FormControl sx={{ Width: '50%' }}>
        <InputLabel id="demo-simple-select-label">Income</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="days"
          onChange={handleChange}
          sx={{ minWidth: '500px' }}
          >
          <MenuItem value={1}>Yesterday</MenuItem>
          <MenuItem value={7}>Recent Week</MenuItem>
          <MenuItem value={30}>Recent Month</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='user rocords'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth}}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = column.id === 'createdAt' ? moment.utc(row[column.id]).format('MMM Do YYYY, hh:mm:ss A') : row[column.id];
                    console.log("Date is here",value)
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value}
                      </TableCell>
                    );
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
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper> 
            </>
  );
}