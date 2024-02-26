// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'

import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import { useRouter } from 'next/router'

import { addproductsss } from 'src/ApiHits/product/ProductCalling'
const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const ProductDetailLayout = () => {
  // ** States

  const [values, setValues] = useState({
    producttype: '',
    price: '',
    model: '',
    pruchasedate: '',
    engineno: '',
    frameno: '',
    chassieno: ''
  })
  const router = useRouter()
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const addProduct = async () => {
    const addproducts = await addproductsss(values)
    router.push({
      pathname: '/products-record'
    })
    console.log('products', addproducts)
  }

  return (
    <Card>
      <CardHeader title='NEW MUHAMMAD MOTORS' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                2. Product Detail
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Product type'
                onChange={handleChange('producttype')}
                type='text'
                placeholder='product type'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Price' onChange={handleChange('price')} type='text' placeholder='price' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Model' onChange={handleChange('model')} type='text' placeholder='model' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='pruchase Date'
                onChange={handleChange('pruchasedate')}
                type='text'
                placeholder='pruchase date'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Engine No.'
                onChange={handleChange('engineno')}
                type='text'
                placeholder='engine no'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Frame no.'
                onChange={handleChange('frameno')}
                type='text'
                placeholder='frame no'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Chassie No'
                onChange={handleChange('chassieno')}
                type='text'
                placeholder='chassie no'
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained' onClick={() => addProduct()}>
            Submit
          </Button>
          <Button size='large' color='secondary' variant='outlined'>
            Cancel
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default ProductDetailLayout
