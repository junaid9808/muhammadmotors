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
import { productList } from 'src/ApiHits/product/ProductCalling'
import { useEffect } from 'react'
import { deleteProduct } from 'src/ApiHits/product/ProductCalling'

const ProductsRecord = () => {
  const [data, setdata] = useState([])
  const [deleteData, setDeleteData] = useState()
  useEffect(() => {
    async function fectdata() {
      let dataproducts = await productList()
      console.log('get dataaaaaaa', dataproducts)
      setdata(dataproducts)
    }
    fectdata()
  }, [deleteData])

  const deleteProducts = async id => {
    try {
      console.log('hjgdhjasd', id)
      const deletePro = await deleteProduct(id)
      setDeleteData(deletePro)
    } catch (error) {
      console.error('error deleting product', error)
    }
  }
  return (
    <>
      <Grid container spacing={3}>
        {data?.map((item, index) => (
          <Grid item xs={4} key={item.id} sx={{ Padding: 10, height: '30rem' }}>
            <Card>
              <CardMedia
                sx={{ height: '14.5625rem' }}
                image={'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_1280.jpg'}
              />
              <CardContent>
                <Typography variant='h6' sx={{ marginBottom: 1 }}>
                  <b>{item.producttype}</b>
                </Typography>
                <Typography sx={{ fontSize: 12 }}>
                  <p className='text-default-500'>Sale Price: {item.price}</p>
                  <p className='text-default-500'>Purchase Price: {item.price}</p>
                </Typography>

                <Typography sx={{ fontSize: 12 }}>
                  <p className='text-default-500 '>Stock: 14</p>
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Button onClick={() => deleteProducts(item._id)}>
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
    </>
  )
}

export default ProductsRecord
