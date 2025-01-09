// src/GreetingButton.tsx
import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const GreetingButton: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  const handleClick = () => {
    setMessage('Hello, welcome to MUI with TypeScript!');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Click Me
      </Button>
      {message && (
        <Typography variant="h6" style={{ marginTop: '20px' }}>
          {message}
        </Typography>
      )}
      <div style={{ marginTop: '20px' }}>
        <Link to="/">Go to Home Page</Link>
      </div>
    </div>
  );
};

export default GreetingButton;
