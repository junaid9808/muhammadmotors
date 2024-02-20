// ** React Imports
import { useEffect, useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'

// ** Icons Imports

import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'
import { addInstallment } from 'src/ApiHits/installment/installmentRecieptCalling'
import moment from 'moment'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LoginPage = () => {
  const router = useRouter()
  // ** State
  const [values, setValues] = useState({
    serialNo: '',
    installment: '',
    tillId: ''
  })
  const [receiptdata, setReceiptdata] = useState()

  // ** Hook

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleSubmit = async () => {
    const min = 1000000
    const max = 9999999
    const randomEvenNumber = Math.floor(Math.random() * (max - min + 1)) + min
    const updateValues = { ...values, tillId: randomEvenNumber }
    setValues(updateValues)
    if (randomEvenNumber) {
      const addInt = await addInstallment(updateValues)
      if (addInt) {
        setReceiptdata(addInt)
      }
    }
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      {!receiptdata && (
        <Box className='content-center'>
          <Card sx={{ display: 'flex', justifyContent: 'center' }}>
            <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
              <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography
                  variant='h6'
                  sx={{
                    ml: 3,
                    lineHeight: 1,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    fontSize: '1.5rem !important'
                  }}
                >
                  NEW MUHAMMAD MOTORS
                </Typography>
              </Box>
              <Box sx={{ mb: 6 }}>
                <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5 }}>
                  Installment Reciept 👋🏻
                </Typography>
              </Box>
              <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
                <TextField
                  onChange={handleChange('serialNo')}
                  value={values.serialNo}
                  autoFocus
                  fullWidth
                  id='serialNo'
                  label='Serial No'
                  sx={{ marginBottom: 4 }}
                />
                <TextField
                  onChange={handleChange('installment')}
                  value={values.installment}
                  autoFocus
                  fullWidth
                  id='installment'
                  label='Installment'
                  sx={{ marginBottom: 4 }}
                />

                <Button
                  fullWidth
                  size='large'
                  variant='contained'
                  sx={{ marginBottom: 7 }}
                  onClick={() => handleSubmit()}
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </Box>
      )}

      {receiptdata && (
        <Box>
          <h1>Installment Submiited Successfully</h1>
          <Button
            variant='contained'
            sx={{ padding: theme => theme.spacing(1.75, 5.5) }}
            onClick={() =>
              router.push({
                pathname: '/printReceipt/Receipt',
                query: { receiptdata: JSON.stringify(receiptdata) }
              })
            }
          >
            Print Receipt
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default LoginPage
