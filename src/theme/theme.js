'use client';
import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { shadows } from './shadows';
import { overrides } from './overrides';
import { typography } from './typography';
import { customShadows } from './custom-shadows';


const theme = createTheme({
  palette: palette(),
  typography: typography,
  shadows: shadows(),
  customShadows: customShadows(),
  shape: { borderRadius: 8 },
});

theme.components = overrides(theme);

export default theme;