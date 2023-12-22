import React from 'react';
import { Paper, Typography, Divider, Grid } from '@mui/material';

const UserDetails = ({ userData }) => {
  if (!userData) {
    return <p>No user data available</p>;
  }

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
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
        {/* Add more grid items for other user details */}
        <Grid item xs={6}>
          <Typography variant="subtitle1">Motorcycle Type:</Typography>
          <Typography>{userData.motorcycleType}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="subtitle1">Additional Details:</Typography>
          {/* Display other user details */}
          <Typography>
            Advance: {userData.advance}, Dues: {userData.dues}, Date: {userData.date}
          </Typography>
          {/* Add more details as needed */}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserDetails;
