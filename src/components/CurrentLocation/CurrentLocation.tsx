import { WeatherState } from "../../common/types/stateTypes";
import { selectWeather } from "../../state/state slices/weatherSlice";
import { useAppSelector } from "../../state/store/store";
import './CurrentLocation.css';


const CurrentLocation = () => {

    const {currentLocation}: WeatherState = useAppSelector(selectWeather);

    return (
        <span className="curr-location">
            Current Location: {currentLocation ? currentLocation.LocalizedName : 'No Location'}
        </span>
    )
}

export default CurrentLocation