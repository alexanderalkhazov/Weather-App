import { selectCurrentLocation } from "../../state/state slices/weatherSlice";
import { useAppSelector } from "../../state/store/store";


const CurrentLocation = () => {

    const currLocation = useAppSelector(selectCurrentLocation);

    return (
        <span>
            Current Location : {currLocation?.LocalizedName}
        </span>
    )
}

export default CurrentLocation