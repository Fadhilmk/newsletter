import * as React from 'react';
import Head from 'next/head';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from "../context/AuthContext";
import { Inter } from "next/font/google";
import theme from '../src/theme/theme';
import './globals.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "News Letter",
  description: "Transform your communication strategy with our innovative newsletter platform. Seamlessly craft and distribute bulk newsletters, connecting with your subscribers like never before. Elevate your outreach efforts now!",
  keywords: "email marketing, newsletter, marketing tips, marketing strategies, email campaigns, digital marketing, marketing insights, marketing trends, exclusive offers",
};


export default function RootLayout(props) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <body className={inter.className}>
        <AuthProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              {props.children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
