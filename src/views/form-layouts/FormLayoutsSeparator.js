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

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const FormLayoutsSeparator = () => {
  // ** States
  const [language, setLanguage] = useState([])
  const [date, setDate] = useState(null)

  const [values, setValues] = useState({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
  })

  // Handle Password
  const handlePasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  // Handle Confirm Password
  const handleConfirmChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 })
  }

  const handleMouseDownConfirmPassword = event => {
    event.preventDefault()
  }

  // Handle Select
  const handleSelectChange = event => {
    setLanguage(event.target.value)
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
              <TextField fullWidth label='Totel Payment' type='number' placeholder='12345' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='number' label='Advance' placeholder='12345' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='number' label='Dues' placeholder='12345' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='number' label='Due Installment Date' placeholder='12345' />
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
              <TextField fullWidth label='First Name' placeholder='Leonard' />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Address' placeholder='address' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Id Crad Number' type='number' placeholder='351016665189' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Phone No.' placeholder='+1-123-456-8790' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Signature' placeholder='address' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Thumb' placeholder='thumb' />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                2. Guarantor Info
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='guarantor Name' placeholder='Leonard' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='guarantor Address' placeholder='address' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Id Crad Number' type='number' placeholder='351016665189' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Phone No.' placeholder='+1-123-456-8790' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Signature' placeholder='address' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='thumb' placeholder='thumb' />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                2. Motorcycle Detail
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Engine No.' type='text' placeholder='engine no' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Frame no.' type='text' placeholder='frame no' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Motorcycle type' type='text' placeholder='motorcycle type' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Color' type='text' placeholder='color' />
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
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
