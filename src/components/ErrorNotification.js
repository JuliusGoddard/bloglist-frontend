import React from "react";
import { Alert } from '@mui/material'
const ErrorNotification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <Alert className="error">{message}</Alert>;
};

export default ErrorNotification;
