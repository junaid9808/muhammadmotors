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
import { addCompany } from 'src/ApiHits/company/CompantCalling'

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const CompanyDetailLayout = () => {
  // ** States
  const [language, setLanguage] = useState([])
  const [values, setValues] = useState({
    companyName: '',
    productType: '',
    productPrice: '',
    serialNo: '',
    quantity: '',
    payment: '',
    remainingPayment: ''
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const addCompanyData = async () => {
    const addData = await addCompany(values)
    console.log('data added succesfully', addData)
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
                2.Company Detail
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Company Name'
                type='text'
                onChange={handleChange('companyName')}
                placeholder='company name'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Product Type'
                type='text'
                onChange={handleChange('productType')}
                placeholder='product type'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Product Price'
                type='text'
                onChange={handleChange('productPrice')}
                placeholder='product price'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Serial No'
                type='text'
                onChange={handleChange('serialNo')}
                placeholder='serial no'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Quantity'
                type='text'
                onChange={handleChange('quantity')}
                placeholder='quantity'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Payment'
                type='text'
                onChange={handleChange('payment')}
                placeholder='payment'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Remaining Payment'
                type='text'
                onChange={handleChange('remainingPayment')}
                placeholder='remaining payment'
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained' onClick={() => addCompanyData()}>
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

export default CompanyDetailLayout
