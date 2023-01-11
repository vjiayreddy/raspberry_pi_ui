import React from "react";
import {
  Grid,
  Typography,
  Box,
  styled,
  LinearProgress,
  Chip,
} from "@mui/material";

const StyledBoxMain = styled(Box)(({ theme }) => ({
  height: "50vh",
  display: "flex",
  flexDirection: "column",
  borderRight: `1px solid ${theme.palette.divider}`,
}));

const StyledBoxHeader = styled(Box)(({ theme }) => ({
  width: "100%",
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: "18px",
}));

const StyledBoxScanning = styled(Box)(({ theme }) => ({
  width: "100%",
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledBoxContent = styled(Box)(({ theme }) => ({
  width: "100%",
  flexGrow: 1,
  display: "flex",
}));

const StyledBinContent = styled(Box)(({ theme }) => ({
  flex: 1,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledBinCountInfo = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
}));

const SectionOne = ({ data }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Grid item xs={6}>
      <StyledBoxMain>
        <StyledBoxHeader>
          <Typography align="center" variant="h6">
            LDI - MACHINE VISION
          </Typography>
        </StyledBoxHeader>
        <StyledBoxScanning>
          <Typography align="center" variant="h6">
            Scanning....
          </Typography>
          <Box pt={1} sx={{ width: "50%" }}>
            <LinearProgress
              color="success"
              sx={{ height: "20px" }}
              variant="determinate"
              value={progress}
            />
          </Box>
        </StyledBoxScanning>
        <StyledBoxContent>
          <StyledBinContent
            sx={(theme) => ({
              borderRight: `1px solid ${theme.palette.divider}`,
            })}
          >
            {data && (
              <>
                <StyledBinCountInfo variant="h3">
                  {data.binsScanned}
                </StyledBinCountInfo>
                <Typography variant="subtitle1">BIN'S SCANNED</Typography>
              </>
            )}
          </StyledBinContent>
          <StyledBinContent>
            {data && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography gutterBottom variant="subtitle1">
                    ON ORDER STATUS
                  </Typography>

                  <Chip
                    size="small"
                    label={data.onOrderStatus ? "success" : "Failed"}
                    color={data.onOrderStatus ? "success" : "error"}
                  />
                </Box>
                <Box
                  mt={2}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="subtitle1">LAST SCAN</Typography>
                  <Typography variant="caption">{data.lastScan}</Typography>
                </Box>
              </>
            )}
          </StyledBinContent>
        </StyledBoxContent>
      </StyledBoxMain>
    </Grid>
  );
};

export default SectionOne;
