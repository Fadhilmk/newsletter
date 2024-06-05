// pages/_app.js

import React from 'react';
import { AuthProvider } from '../context/AuthContext'; // Adjust the path as needed


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
