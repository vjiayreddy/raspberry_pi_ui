import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import SectionOne from "./components/section_one";
import SectionTwo from "./components/section_two";
import SectionThree from "./components/section_three";
import SectionFour from "./components/section_four";

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  height: "100vh",
}));

const App = () => {
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
      })
      .catch((error) => {
        setApiData(null);
      });
  }, []);

  return (
    <StyledGridContainer container>
      <SectionOne data={apiData} />
      <SectionTwo data={apiData} />
      <SectionThree data={apiData ? apiData.onOrders : []} />
      <SectionFour data={apiData ? apiData.backOrdered : []} />
    </StyledGridContainer>
  );
};

export default App;
