import { useEffect, useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import SectionOne from "./components/section_one";
import SectionTwo from "./components/section_two";
import SectionThree from "./components/section_three";
import SectionFour from "./components/section_four";
import { useInterval } from "./useInterval";

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  height: "100vh",
}));

const getApiData = (url, state) => {
  fetch(url)
    .then((response) => response.json())
    .then(({ data }) => {
      state(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const App = () => {
  const [scanStatus, setScanStatus] = useState(null);
  const [orders, setOrders] = useState([]);
  const [fullScan, setFullScanDetails] = useState([]);
  const [detectImage, setDetectedImage] = useState(null);
  const host = "http://localhost:8081/"
  const selfHost = ""
  const usedHost = selfHost
  useInterval(() => {
    getApiData(`${usedHost}/getScanStatus`, setScanStatus);
    getApiData(`${usedHost}/getOrdered`, setOrders);
    getApiData(`${usedHost}/getFullScanDetails`, setFullScanDetails);
    getApiData(`${usedHost}/getLatestDetectedImage`, setDetectedImage);
  }, 5000);

  return (
    <StyledGridContainer container>
      <SectionOne timerCount={1000} data={scanStatus} />
      <SectionTwo data={{ detectImage, scanStatus }} />
      <SectionThree data={orders ? orders : []} />
      <SectionFour data={fullScan ? fullScan : []} />
    </StyledGridContainer>
  );
};

export default App;
