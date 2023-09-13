import { Box } from "@mui/material";
import Forecasts from "../components/Forecasts/Forecasts";

const ForecastsPage = () => {
  return (
      <Box display={'grid'} gridTemplateColumns={'repeat(5,1fr)'}>
         <Forecasts />
      </Box>
  )
};

export default ForecastsPage;