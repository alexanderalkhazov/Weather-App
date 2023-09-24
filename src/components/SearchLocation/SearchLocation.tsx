import { Autocomplete, TextField, CircularProgress } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { selectLocations, fetchLocationOptionsThunk, fetchForecastsThunk } from '../../state/state slices/weatherSlice';
import { useAppDispatch, useAppSelector } from '../../state/store/store';
import { debounce } from 'lodash';
import { modifyOptions } from '../../helpers/forecastHelpers';
import { CityOption } from '../../common/types/locationKeyTypes';
import './SearchLocation.css';


const SearchLocation = () => {
    const dispatch = useAppDispatch();
    const locationOptions = useAppSelector(selectLocations);
    const [options, setOptions] = useState<readonly any[]>([]);
    const [selectedCity, setSelectedCity] = useState<CityOption | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleQuery = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true);
        findLocationDebounce(ev.target.value);
    }

    const findLocationDebounce = useCallback(
        debounce((city: string) => {
            dispatch((fetchLocationOptionsThunk(city)));
        }, 1000),
        []
    );

    useEffect(() => {
        setOptions(modifyOptions(locationOptions!));
        setIsLoading(false);
    }, [locationOptions]);

    useEffect(() => {
        if (selectedCity) { 
            dispatch(fetchForecastsThunk(selectedCity.id));
        }
    }, [selectedCity])

    return (
        <div className='search-container'>
            <p>Search your city</p>
            <Autocomplete
                className="custom-autocomplete"
                size='small'
                loading={isLoading}
                options={options}
                onChange={(_, value) => setSelectedCity(value)}
                renderInput={(params) => (
                    <div style={{ position: 'relative' }}>
                        <TextField
                            {...params}
                            onChange={handleQuery}
                        />
                        {isLoading && <CircularProgress
                            color="inherit"
                            size={20}
                            style={{
                                position: 'absolute',
                                top: '25%',
                                right: '12px',
                                transform: 'translateY(-50%)',
                            }}
                        />}
                    </div>
                )
                }
            />
        </div>
    )

};

export default SearchLocation;