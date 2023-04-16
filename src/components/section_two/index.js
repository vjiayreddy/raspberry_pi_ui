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
  backgroundSize: "contain",
  backgroundPosition: "top center",
}));

const SectionOne = ({ data }) => {
  return (
    <Grid item xs={6}>
      <StyledBoxMain>
        <StyledBoxHeader>
          <>
            <Box>
              <Typography>
                RACK NO -{" "}
                <b>
                  {data?.scanStatus?.rackNo ? data?.scanStatus?.rackNo : "-"}
                </b>
              </Typography>
              <Typography>
                ROOM NO -{" "}
                <b>
                  {data?.scanStatus?.roomNo ? data?.scanStatus?.roomNo : "-"}
                </b>
              </Typography>
            </Box>
            <Box>
              <img width={80} src={logo} />
            </Box>
          </>
        </StyledBoxHeader>
        {
        <StyledBoxContent
          sx={{
            backgroundImage: data?.detectImage?.image
              ? `url(data:image/jpeg;base64,${data?.detectImage?.image.split("'")[1]})`
              : `url(https://cdn1.vectorstock.com/i/1000x1000/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg)`,
          }}
        ></StyledBoxContent>
        }
      </StyledBoxMain>
    </Grid>
  );
};

export default SectionOne;
