// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select from '@mui/material/Select'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import { addNewuser } from 'src/ApiHits/newuser/NewUserCalling'
import { useRouter } from 'next/router'

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const FormLayoutsSeparator = () => {
  // ** States
  const [language, setLanguage] = useState([])
  const [date, setDate] = useState(null)
  const router = useRouter();

  const [values, setValues] = useState({
    totelPayment: '',
    advance: '',
    dues: '',
    paidDues: '',
    date: '',
    name: '',
    address: '',
    idCradNumber: '',
    phoneNo: '',
    signature: '',
    thumb: '',
    guarantorName: '',
    guarantorAddress: '',
    guarantorIdCrad: '',
    guarantorPhoneNo: '',
    guarantorSignature: '',
    guarantorThumb: '',
    engineNo: '',
    frameNo: '',
    motorcycleType: '',
    color: ''
  })

  const handleChange = prop => event => {
    const { value } = event.target;
  
    if (prop === 'advance') {
      if (value !== undefined) {
        setValues({ ...values, [prop]: value, paidDues: value });
      }
    } else {
      setValues({ ...values, [prop]: value });
    }
  };
  const addNewUser = async () => {
    const addData = await addNewuser(values)
    console.log('dataaaaaaaaa', addData)
    router.push('/userrecords/')
  }

  return (
    <Card>
      <CardHeader title='NEW MUHAMMAD MOTORS' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                1. Account Details
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Totel Payment'
                type='text'
                onChange={handleChange('totelPayment')}
                placeholder='12345'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='text' label='Advance' onChange={handleChange('advance')} placeholder='12345' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='text' label='Dues' onChange={handleChange('dues')} placeholder='12345' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type='text'
                label='Due Installment Date'
                onChange={handleChange('date')}
                placeholder='12345'
              />
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                2. Personal Info
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Name' onChange={handleChange('name')} placeholder='Leonard' />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Address' onChange={handleChange('address')} placeholder='address' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Id Crad Number'
                type='number'
                onChange={handleChange('idCradNumber')}
                placeholder='351016665189'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Phone No.' onChange={handleChange('phoneNo')} placeholder='+1-123-456-8790' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Signature' onChange={handleChange('signature')} placeholder='Signature' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Thumb' onChange={handleChange('thumb')} placeholder='thumb' />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                2. Guarantor Info
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='guarantor Name'
                onChange={handleChange('guarantorName')}
                placeholder='Leonard'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='guarantor Address'
                onChange={handleChange('guarantorAddress')}
                placeholder='address'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Id Crad Number'
                type='number'
                onChange={handleChange('guarantorIdCrad')}
                placeholder='351016665189'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Phone No.'
                onChange={handleChange('guarantorPhoneNo')}
                placeholder='+1-123-456-8790'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Signature'
                onChange={handleChange('guarantorSignature')}
                placeholder='address'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='thumb' onChange={handleChange('guarantorThumb')} placeholder='thumb' />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                2. Motorcycle Detail
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Engine No.'
                onChange={handleChange('engineNo')}
                type='text'
                placeholder='engine no'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Frame no.'
                type='text'
                onChange={handleChange('frameNo')}
                placeholder='frame no'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Motorcycle type'
                type='text'
                onChange={handleChange('motorcycleType')}
                placeholder='motorcycle type'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Color' type='text' onChange={handleChange('color')} placeholder='color' />
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained' onClick={() => addNewUser()}>
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

export default FormLayoutsSeparator
