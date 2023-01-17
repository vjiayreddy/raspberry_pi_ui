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
  const [backOrders, setBackOrders] = useState([]);
  const [detectImage, setDetectedImage] = useState(null);

  useInterval(() => {
    getApiData("scan_scan.json", setScanStatus);
    getApiData("get_orders.json", setOrders);
    getApiData("get_back_orders.json", setBackOrders);
    getApiData("get_detected_image.json", setDetectedImage);
  }, 5000);

  return (
    <StyledGridContainer container>
      <SectionOne timerCount={1000} data={scanStatus} />
      <SectionTwo data={{ detectImage, scanStatus }} />
      <SectionThree data={orders ? orders : []} />
      <SectionFour data={backOrders ? backOrders : []} />
    </StyledGridContainer>
  );
};

export default App;
