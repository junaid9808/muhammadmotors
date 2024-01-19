// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
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
      path: '/companies-record'
    },

    {
      icon: CurrencyExchangeIcon,
      title: 'Profit',
      path: '/profit'
    }
  ]
}

export default navigation
