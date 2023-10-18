// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import DeleteIcon from '@mui/icons-material/Delete'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import EditIcon from '@mui/icons-material/Edit'

const ProductsRecord = () => {
  // ** States

  const columns = [
    { title: 'motorcycle', img: '/images/img/cd70.jpg', price: '150000', stock: '10' },
    { title: 'bike', img: '/images/img/cd701.png', price: '100000', stock: '20' },
    {
      title: 'auto',
      img: '/images/img/rickshaw.jpg',
      price: '250000',
      stock: '10'
    },
    {
      title: 'bike',
      img: '/images/img/cd70.jpg',
      price: '150000',
      stock: '15'
    },
    {
      title: 'motorcycle',
      img: '/images/img/cd70.jpg',
      price: '100000',
      stock: '20'
    },
    {
      title: 'loader',
      img: '/images/img/loader.jpg',
      price: '150000',
      stock: '10'
    },
    {
      title: 'auto',
      img: '/images/img/loader.jpg',
      price: '300000',
      stock: '20'
    }
  ]

  return (
    <Grid container spacing={3}>
      {columns.map((item, index) => (
        <Grid item xs={3} sx={{ Padding: 10 }}>
          <Card>
            <CardMedia sx={{ height: '14.5625rem' }} image={item.img} />
            <CardContent>
              <Typography variant='h6' sx={{ marginBottom: 2 }}>
                <b>{item.title}</b>
              </Typography>
              <Typography>
                <p className='text-default-500'>Price: {item.price}</p>
              </Typography>
              <Typography>
                <p className='text-default-500'>Stock: {item.stock}</p>
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Button>
                <DeleteForeverIcon />
              </Button>
              <Button>
                <EditIcon />
              </Button>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default ProductsRecord
