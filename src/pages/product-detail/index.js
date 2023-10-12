// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports

import ProductDetailLayout from 'src/views/form-layouts/ProductDetailLayout'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const ProductDetail = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <ProductDetailLayout />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default ProductDetail
