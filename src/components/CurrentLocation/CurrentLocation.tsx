import { selectCurrentLocation } from "../../state/state slices/weatherSlice";
import { useAppSelector } from "../../state/store/store";
import './CurrentLocation.css';


const CurrentLocation = () => {

    const currLocation = useAppSelector(selectCurrentLocation);

    return (
        <span className="curr-location">
            Current Location : {currLocation ? currLocation.LocalizedName : 'No Location'}
        </span>
    )
}

export default CurrentLocation