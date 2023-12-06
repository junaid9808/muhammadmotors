// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { Box } from 'mdi-material-ui'
import Button from '@mui/material/Button'

// ** Demo Components Imports
import CompaniesRecord from 'src/views/tables/CompaniesRecord'
import TableStickyHeader from 'src/views/tables/TableStickyHeader'
import { useRouter } from 'next/router'

const MUITable = () => {
  const router = useRouter()
  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <Typography variant='h5'>
          <Link href='/' target='_blank'>
            NEW MUHAMMAD MOTORS
          </Link>
        </Typography>
        <Typography>
          <Button
            variant='contained'
            sx={{ padding: theme => theme.spacing(1.75, 5.5) }}
            onClick={() => router.push({ pathname: '/company-detail/company' })}
          >
            Add Company
          </Button>
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader title='Companies Record' titleTypographyProps={{ variant: 'h6' }} />
          <CompaniesRecord />
        </Card>
      </Grid>
    </Grid>
  )
}

export default MUITable
