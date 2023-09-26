// pages/_app.js
import React from 'react';
import { PrismaneProvider } from '@prismane/core';
import theme from './theme'; // Import your theme configuration
import '../styles/globals.css'; // Import your global styles here

function MyApp({ Component, pageProps }) {
  return (
    <PrismaneProvider theme={theme}>
      <Component {...pageProps} />
    </PrismaneProvider>
  );
}

export default MyApp;
