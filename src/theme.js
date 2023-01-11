import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {},
  components:{
    MuiTypography:{
      styleOverrides:{
        subtitle1:{
          fontWeight:800
        },
        caption:{
          fontWeight:500,
          color:"#757575"
        }
      }
    }
  }
});

export default theme;
