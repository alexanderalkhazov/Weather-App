import { Stack, Autocomplete, TextField, Box, Typography } from '@mui/material';
import { useState } from 'react';
import Forecast from '../components/Forecast/Forecast';


const dummyResults = ['HTML', 'CSS', 'React'];

type DummyItem = {
    id: number,
    label: string
}

const skillsOptions = dummyResults.map((dummy, index) => ({
    id: index,
    label: dummy
}))

const CurrentLocation = () => {

    const [value, setValue] = useState<DummyItem | null>(null);

    return (
        <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
            <Stack
                spacing={2}
                width={250}
                mt={5}
            >
                <Typography variant='h6'>Search your city</Typography>
                <Autocomplete
                    options={skillsOptions}
                    renderInput={(params) => (<TextField {...params} />)}
                    value={value}
                    onChange={(_, value) => setValue(value)}
                />
            </Stack>
            <Box width={400} height={400}>
                <Forecast />
            </Box>
        </Box>

    )
}

export default CurrentLocation