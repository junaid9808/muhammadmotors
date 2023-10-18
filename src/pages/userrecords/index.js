// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

// ** Demo Components Imports

import TableStickyHeader from 'src/views/tables/TableStickyHeader'

const MUITable = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='/' target='_blank'>
            NEW MUHAMMAD MOTORS
          </Link>
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader title='User Records' titleTypographyProps={{ variant: 'h6' }} />
          <TableStickyHeader />
        </Card>
      </Grid>
    </Grid>
  )
}

export default MUITable
