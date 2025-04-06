import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,      // mobile
      sm: 300,    // small mobile
      md: 672,    // tablet
      lg: 990,    // laptop
      xl: 1296,   // desktop and up
    },
  },
});

export default theme;
