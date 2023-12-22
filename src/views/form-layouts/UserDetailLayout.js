import React from 'react';
import { Paper, Typography, Divider, Grid, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const UserDetailLayout = ({ userData, setShowUserDetails, showUserDetails }) => {
  if (!userData) {
    return <p>No user data available</p>
  }
  const onClickHandle= ()=> {
    setShowUserDetails(!showUserDetails)
  }

  return (

    <div style={{display:"flex", justifyContent:"start"}}>
      <Button style={{width:'10px', height: '50px'}} onClick={()=>{onClickHandle()}}>
        <ArrowBackIcon />
      </Button>
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px'}}>
      <Typography variant="h4" gutterBottom>
        User Details
      </Typography>
      <Divider />
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Name:</Typography>
          <Typography>{userData.name}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Phone Number:</Typography>
          <Typography>{userData.phoneNo}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Address:</Typography>
          <Typography>{userData.address}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Id Number:</Typography>
          <Typography>{userData.idCardNumber}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Signature:</Typography>
          <Typography>{userData.signature}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Thumb:</Typography>
          <Typography>{userData.thumb}</Typography>
        </Grid>
        {/* Add more grid items for other user details */}
        

        <Grid item xs={12}>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="subtitle1">Motorcycle Details</Typography>
          <Grid item xs={6}>
          <Typography variant="subtitle1">Type:</Typography>
          <Typography>{userData.motorcycleType}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Color:</Typography>
          <Typography>{userData.color}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Purchase Date:</Typography>
          <Typography>{userData.date}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Engine Number:</Typography>
          <Typography>{userData.engineNo}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Frame No:</Typography>
          <Typography>{userData.frameNo}</Typography>
        </Grid>
        </Grid>

        <Grid item xs={12}>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="subtitle1">Guarantor Details:</Typography>
          <Grid item xs={6}>
          <Typography variant="subtitle1">Name:</Typography>
          <Typography>{userData.guarantorName}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Phone Number:</Typography>
          <Typography>{userData.guarantorPhoneNo}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Address:</Typography>
          <Typography>{userData.guarantorAddress}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Id Number:</Typography>
          <Typography>{userData.guarantorIdCard}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Signature:</Typography>
          <Typography>{userData.guarantorSignature}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Thumb:</Typography>
          <Typography>{userData.guarantorThumb}</Typography>
        </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="subtitle1">Payment Details:</Typography>
          <Grid item xs={6}>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Total Paymen:</Typography>
          <Typography>{userData.totalPayment}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Date Paid:</Typography>
          <Typography>{userData.date}</Typography>
        </Grid>
          <Typography variant="subtitle1">Advance Payment:</Typography>
          <Typography>{userData.advance}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Remaining Dues:</Typography>
          <Typography>{userData.dues}</Typography>
        </Grid>
        </Grid>
      </Grid>
    </Paper>
    </div>
  );
};

export default UserDetailLayout;
