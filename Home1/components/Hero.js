import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 0, sm: 6 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
        <Container maxWidth="md">
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: {
                xs: '2rem',  // Small devices
                sm: '3rem',  // Medium devices
                md: '4rem',  // Large devices
              },
            }}
          >
            WELCOME&nbsp;TO&nbsp;THE&nbsp;
            <br />
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: {
                  xs: '1.5rem', // Small devices
                  sm: '2.5rem', // Medium devices
                  md: '3.5rem', // Large devices
                },
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              NEWSLETTER PLATFORM
            </Typography>
          </Typography>
        </Container>

          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ 
              alignSelf: 'center', 
              width: { sm: '100%', md: '80%' }, 
              fontSize:{
                xs: '1rem', // Small devices
                sm: '1rem', // Medium devices
                md: '1.5rem', // Large devices
                lg: '1.5rem', // Extra large devices
              },
            }}
          >
            Get updates delivered directly to your inbox.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 1, width: { xs: '100%', sm: 'auto' } }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              inputProps={{
                autoComplete: 'off',
                'aria-label': 'Enter your email address',
              }}
            />
            <Button variant="contained" color="primary">
              Start now
            </Button>
          </Stack>
          <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}