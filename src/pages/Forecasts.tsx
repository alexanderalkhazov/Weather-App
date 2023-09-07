import { Box } from "@mui/material";
import Forecast from "../components/Forecast/Forecast"; 

const Forecasts = () => {
  return (
    <Box m={5} display={'grid'} gridTemplateColumns={'1fr 1fr 1fr 1fr 1fr'}>
        {[1,2,3,4,5].map((elm,index) => (
           <Forecast key={index} />
        ))}
    </Box>
  )
}

export default Forecasts