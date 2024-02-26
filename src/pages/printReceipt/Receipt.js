import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import moment from 'moment'
import { useRouter } from 'next/router'
export default function Reciept() {
  const router = useRouter()
  const { receiptdata } = router.query
  const parsedReceiptData = receiptdata ? JSON.parse(receiptdata) : null
  return (
    <>
      <div className='content-center'>
        <Card id='content-center' sx={{ width: '30rem' }}>
          <Button
            variant='contained'
            sx={{ padding: theme => theme.spacing(1.75, 5.5) }}
            onClick={() =>
              router.push({
                pathname: '/'
              })
            }
          >
            Back
          </Button>
          <CardContent
            sx={{
              display: 'flex',

              textAlign: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
            }}
          >
            <Avatar
              sx={{ width: 50, height: 50, marginBottom: 2.25, color: 'common.white', backgroundColor: 'primary.main' }}
            >
              <HelpCircleOutline sx={{ fontSize: '2rem' }} />
            </Avatar>
            <Typography variant='h6' sx={{ marginBottom: 2.75 }}>
              Muhammad Motors
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 6 }}>
              <p>Paid Installment: {parsedReceiptData?.installment}</p>
              <p>Paid Date: {moment(parsedReceiptData?.createdAt).format('LLL')}</p>
            </Typography>
            <Button variant='contained' sx={{ padding: theme => theme.spacing(1.75, 5.5) }}>
              Installment ID: {parsedReceiptData?.tillId}
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
Reciept.getLayout = page => <BlankLayout>{page}</BlankLayout>
