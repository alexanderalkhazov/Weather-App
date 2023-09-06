import { Stack, Autocomplete, TextField, Box, Typography } from '@mui/material';
import { useState } from 'react';


const dummyResults = ['HTML', 'CSS', 'React']; // simulate ui to show results in autocomplete :

type DummyItem = {
    id: number,
    label: string
}

const skillsOptions = dummyResults.map((dummy, index) => ({
    id: index + 1,
    label: dummy
}))

const CurrentLocation = () => {

    const [value, setValue] = useState<DummyItem | null>(null);
    console.log(value);

    return (
        <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
            <Box>
                <Typography variant='h6'>Search By Location</Typography>
            </Box>
            <Stack
                spacing={2}
                width={250}
            >
                <Autocomplete
                    options={skillsOptions}
                    renderInput={(params) => (<TextField {...params} />)}
                    value={value}
                    onChange={(event, value) => setValue(value)}
                />
            </Stack>
            <Box>
                Some Data will be here
            </Box>
        </Box>

    )
}

export default CurrentLocation