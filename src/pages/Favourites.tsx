import { Box } from "@mui/material"
import Forecast from "../components/Forecast/Forecast"
const Favourites = () => {
    return (
        <Box m={5} display={'grid'} gridTemplateColumns={'1fr 1fr 1fr 1fr 1fr'}>
            {[1, 2].map((elm, index) => (
                <Forecast key={index} />
            ))}
        </Box>
    )
}

export default Favourites