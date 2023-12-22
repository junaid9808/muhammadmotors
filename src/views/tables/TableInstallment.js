import React, { useEffect, useState } from 'react';
import { getInstallment } from 'src/ApiHits/installment/getInstallments'; 
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import moment from 'moment';

const columns = [
  { id: 'serialNo', label: 'Serial No', minWidth: 170 },
  { id: 'installment', label: 'Installment', minWidth: 100 },
  { id: 'tillId', label: 'Transaction Id', minWidth: 170, align: 'right' },
  { id: 'createdAt', label: 'Issue Date', minWidth: 170, align: 'right' },
];

const TableInstallment = ({ userIdCardNumber }) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setData] = useState([])



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
        if (!userIdCardNumber) return;
        const data = await getInstallment(userIdCardNumber);
        setData(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userIdCardNumber]);

  return (
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
                    const value = column.id === 'createdAt' ? moment(row[column.id]).format('MMM Do YYYY, HH:MM:ss A') : row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value}
                      </TableCell>
                    );
                  })}
                  <TableCell>
                    <Box sx={{ display: 'flex' }}>
                      {/* <Button onClick={()=>{userDetails(row)}}> 
                        <ArrowForwardIcon />
                      </Button> */}
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
  );
};

export default TableInstallment;
