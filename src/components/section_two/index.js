import React from "react";
import { Grid, Typography, Box, styled } from "@mui/material";
import logo from "../../../src/logo.jpeg";


const StyledBoxMain = styled(Box)(({ theme }) => ({
  height: "50vh",
  display: "flex",
  flexDirection: "column",
}));

const StyledBoxHeader = styled(Box)(({ theme }) => ({
  width: "100%",
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const StyledBoxContent = styled(Box)(({ theme }) => ({
  width: "100%",
  flexGrow: 1,
  display: "flex",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top center",
}));

const SectionOne = ({ data }) => {
  return (
    <Grid item xs={6}>
      <StyledBoxMain>
        <StyledBoxHeader>
          {data && (
            <>
            <Box>
              <Typography>
                RACK NO - <b>{data.rackNo}</b>
              </Typography>
              <Typography>
                ROOM NO - <b>{data.roomNo}</b>
              </Typography>
            </Box>
            <Box>
              <img width={80} src={logo}/>
            </Box>
            </>
            
          )}
        </StyledBoxHeader>
        <StyledBoxContent
          sx={{
            backgroundImage: `url(${data?.imgUrl})`,
          }}
        ></StyledBoxContent>
      </StyledBoxMain>
    </Grid>
  );
};

export default SectionOne;
