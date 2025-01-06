import React from 'react';
import { Typography, Container } from '@mui/material';

const HomePage = () => (
  <Container>
    <Typography variant="h4" color="primary" gutterBottom>
      Welcome to TaskNest
    </Typography>
    <Typography variant="body1">
      This is your task management dashboard.
    </Typography>
  </Container>
);

export default HomePage;
