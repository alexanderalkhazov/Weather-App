import { Autocomplete, TextField, CircularProgress } from '@mui/material';
import { useCityOptions } from './hooks/searchLocationHooks';
import './SearchLocation.css';

const SearchLocation = () => {

    const {
        isLoading,
        options,
        setSelectedCity,
        handleQuery
    } = useCityOptions();

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