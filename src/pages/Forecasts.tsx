import { Box } from "@mui/material";
import Forecast from "../components/Forecast/Forecast"; 

const Forecasts = () => {
  return (
    <Box display={'grid'} gridTemplateColumns={'repeat(5,1fr)'}>
        {[1,2,3,4,5].map((_,index) => (
           <Forecast key={index} />
        ))}
    </Box>
  )
};

export default Forecasts;