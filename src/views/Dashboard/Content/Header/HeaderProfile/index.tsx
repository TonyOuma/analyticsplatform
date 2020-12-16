/* eslint-disable react/no-unescaped-entities */
import React from 'react';

// import { Link } from 'react-router-dom';

import {
  Grid,
  Box,
  Avatar,
  Typography,
  LinearProgress,
} from '@material-ui/core';
// import { Avatar, IconButton, Grid, Typography } from '@material-ui/core';

const user_name: string = 'Sandra Mamai';
const user_email: string = 'smamai@accesafaya.com';
// const user_name_initials = 'SM';

const avatarStyles: React.CSSProperties = {
  height: 55,
  width: 55,
  marginLeft: 20,
};

const HeaderProfile: React.FC<{}> = () => {
  return (
    <Box display="flex" alignItems="center">
      <Grid item>
        <Typography>{user_name}</Typography>
        <Typography>{user_email}</Typography>
      </Grid>
      <Grid item>
        <LinearProgress value={75.5} variant="determinate" />
      </Grid>
      <Grid item>
        <Avatar src={'../assets'} alt="SM" style={avatarStyles}></Avatar>
      </Grid>
    </Box>
  );
};

export default HeaderProfile;