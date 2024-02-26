// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'

import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'

import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },

    // {
    //   sectionTitle: 'Pages'
    // },

    // {
    //   sectionTitle: 'User Interface'
    // },
    {
      title: 'User Records',
      icon: CreditCardOutline,
      path: '/userrecords'
    },
    {
      title: 'Installment',
      icon: CreditCardOutline,
      path: '/installment'
    },
    {
      title: 'Products record',
      icon: CreditCardOutline,
      path: '/products-record'
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables'
    },
    {
      icon: CubeOutline,
      title: 'New Registration',
      path: '/form-layouts'
    },
    {
      icon: CubeOutline,
      title: 'Product Detail',
      path: '/product-detail'
    },

    {
      icon: Table,
      title: 'Companies Record',
      path: '/companies-record/companies'
    },
    {
      icon: CubeOutline,
      title: 'Companies Detail',
      path: '/company-detail/company'
    },
    {
      icon: CurrencyExchangeIcon,
      title: 'Revenue',
      path: '/revenue'
    }
  ]
}

export default navigation
