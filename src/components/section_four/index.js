import React from "react";
import { Grid, styled, Box } from "@mui/material";

const StyledBoxMain = styled(Box)(({ theme }) => ({
  height: "50vh",
  display: "flex",
  flexDirection: "column",
  borderRight: `1px solid ${theme.palette.divider}`,
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const StyledBoxHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "8px",
  backgroundColor: "#4D4F5C",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
  fontWeight: 900,
  fontSize: 23,
}));

const StyledDataContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  position: "relative",
}));

const StyledNoDataIndication = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "40%",
  left: "40%",
  color: "gainsboro",
  fontWeight: 500,
}));

const SectionThree = ({ data }) => {
  return (
    <Grid item xs={6}>
      <StyledBoxMain>
        <StyledBoxHeader>BACK ORDERED</StyledBoxHeader>
        <StyledDataContent>
          {data?.length > 0 ? (
            <table style={{ width: "100%" }}>
              <thead>
                <tr className="liteGray">
                  <th>ITEM NAME</th>
                  <th>MODEL</th>
                  <th>QTY</th>
                  <th>TIME</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.itemName}</td>
                    <td>{item.model}</td>
                    <td>{item.qty}</td>
                    <td>
                      {item.datetime} - {item.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <StyledNoDataIndication>No Data Found</StyledNoDataIndication>
          )}
        </StyledDataContent>
      </StyledBoxMain>
    </Grid>
  );
};

export default SectionThree;
