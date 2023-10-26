// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports

import CompanyDetailLayout from 'src/views/form-layouts/CompanyDetaillayout'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const ProductDetail = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <CompanyDetailLayout />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default ProductDetail
