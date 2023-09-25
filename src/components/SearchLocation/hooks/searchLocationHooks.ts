import { useCallback, useEffect, useState } from "react";
import { CityOption } from "../../../common/types/locationKeyTypes";
import { useAppDispatch, useAppSelector } from "../../../state/store/store";
import { fetchForecastsThunk, fetchLocationOptionsThunk, selectLocations } from "../../../state/state slices/weatherSlice";
import { debounce } from "lodash";
import { modifyOptions } from "../../../helpers/forecastHelpers";

export const useCityOptions = () => {
    const dispatch = useAppDispatch();

    const locationOptions = useAppSelector(selectLocations);

    const [options, setOptions] = useState<readonly CityOption[] | []>([]);

    const [selectedCity, setSelectedCity] = useState<CityOption | null>(null);

    const [isLoading, setIsLoading] = useState<boolean>(true);


    const handleQuery = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true);
        findLocationDebounce(ev.target.value);
    }

    const findLocationDebounce = useCallback(
        debounce((city: string) => {
            dispatch((fetchLocationOptionsThunk(city)));
        }, 1000),[]
    );

    useEffect(() => {
        setOptions(modifyOptions(locationOptions!));
        setIsLoading(false);
    }, [locationOptions]);



    useEffect(() => {
        if (selectedCity) { 
            dispatch(fetchForecastsThunk(selectedCity.id));
        }
    }, [selectedCity]);

    return {
        isLoading,
        options,
        setSelectedCity,
        handleQuery,
    }
}

