import { Stack, Autocomplete, TextField, Box, Typography } from '@mui/material';
import Forecast from '../Forecast/Forecast';
import React, { useCallback, useEffect, useState } from 'react';
import { selectLocations, fetchLocationsThunk, selectLocationsStatus, fetchForecastsThunk, selectAllForecasts } from '../../state/state slices/weatherSlice';

import { useAppDispatch, useAppSelector } from '../../state/store/store';
import { Location } from '../../common/types/locationKeyTypes';
import { debounce } from 'lodash';
import { modifyOptions } from '../../helpers/forecastHelpers';
import { ThunkStatusEnum } from '../../common/types/enums';
import { nanoid } from '@reduxjs/toolkit';

interface CityOption {
    id: number;
    label: string;
    cityKey: string;
}


const SearchLocation = () => {
    const dispatch = useAppDispatch();
    const locations = useAppSelector(selectLocations);
    // const locationStaus = useAppSelector(selectLocationsStatus);
    
    const [options, setOptions] = useState<readonly any[]>([]);

    const [selectedCity, setSelectedCity] = useState<CityOption | null>(null);

    const handleQuery = (ev: React.ChangeEvent<HTMLInputElement>) => {
        findLocationDebounce(ev.target.value);
    }

    const findLocationDebounce = useCallback(
        debounce((city: string) => {
            console.log(city);
            dispatch((fetchLocationsThunk(city)));
        }, 1000),
        []
    );

    useEffect(() => {
        setOptions(modifyOptions(locations!));
        console.log('locations changed');
    }, [locations]);

    useEffect(() => {
        console.log('selected city', selectedCity);
        if (selectedCity) {
            dispatch(fetchForecastsThunk(selectedCity.cityKey))
        } 
    }, [selectedCity])

    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            flexDirection={'column'}
        >
            <Stack
                spacing={2}
                width={250}
                mt={3}
            >
                <Typography
                    variant='h6'
                >
                    Search your city
                </Typography>
                <Autocomplete
                    options={options}
                    onChange={(_, value) => setSelectedCity(value)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            onChange={handleQuery}
                        />)}
                />
            </Stack>
        </Box>

    )
};

export default SearchLocation;