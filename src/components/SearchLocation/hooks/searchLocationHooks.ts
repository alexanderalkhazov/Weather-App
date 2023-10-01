import { useCallback, useEffect, useState } from "react";
import { CityOption } from "../../../common/types/locationKeyTypes";
import { useAppDispatch, useAppSelector } from "../../../state/store/store";
import { fetchForecasts, fetchLocations, selectWeather } from "../../../state/state slices/weatherSlice";
import { debounce } from "lodash";
import { modifyOptions } from "../../../utils/forecastHelpers";

export const useCityOptions = () => {
    const dispatch = useAppDispatch();
    const {locations} = useAppSelector(selectWeather);
    const [options, setOptions] = useState<readonly CityOption[] | []>([]);
    const [selectedCity, setSelectedCity] = useState<CityOption | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleQuery = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true);
        findLocationDebounce(ev.target.value);
    }

    const findLocationDebounce = useCallback(
        debounce((city: string) => {
            dispatch((fetchLocations(city)));
        }, 1000),[]
    );

    useEffect(() => {
        setOptions(modifyOptions(locations!));
        setIsLoading(false);
    }, [locations]);

    useEffect(() => {
        if (selectedCity) { 
            dispatch(fetchForecasts(selectedCity.id));
        }
    }, [selectedCity]);

    return {
        isLoading,
        options,
        setSelectedCity,
        handleQuery,
    }
}

