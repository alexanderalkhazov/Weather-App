import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material';
import { DailyForecast } from '../../common/types/forecastTypes';
import { formatDate } from '../../helpers/forecastHelpers';
import { selectUnits } from '../../state/state slices/unitsSlice';
import { setTempAndUnits } from '../../helpers/forecastHelpers';
import { useAppSelector } from '../../state/store/store';
import { switchCorrectImg } from '../../helpers/weatherIconHelpers';

interface ForecastProps {
    forecast?: DailyForecast;
}

const Forecast = ({ forecast }: ForecastProps) => {

    const units = useAppSelector(selectUnits);

    return (
        forecast ? (
            <Box>
                <Card>
                    <CardMedia
                        sx={{
                            maxWidth: 120
                        }}
                        component={'img'}
                        alt='day image'
                        image={switchCorrectImg(forecast.Day.Icon)}
                    />
                    <CardMedia
                        sx={{
                            maxWidth: 120
                        }}
                        component={'img'}
                        alt='night image'
                        image={switchCorrectImg(forecast.Night.Icon)}
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant='h5'
                        >
                            {formatDate(forecast.Date)}
                        </Typography>
                        <Typography
                             variant='body1'
                             color={'text.secondary'}
                        >
                            Minimum Temp : {setTempAndUnits(forecast.Temperature.Minimum.Value, units)}
                        </Typography>
                        <Typography
                             variant='body1'
                             color={'text.secondary'}
                        >
                            Maximum Temp : {setTempAndUnits(forecast.Temperature.Maximum.Value, units)}
                        </Typography>
                        <Typography
                             variant='body1'
                             color={'text.secondary'}
                        >
                            Day : {forecast.Day.IconPhrase}
                        </Typography>
                        <Typography
                            variant='body1'
                            color={'text.secondary'}
                        >
                            Night : {forecast.Night.IconPhrase}
                        </Typography>
                        <Typography
                            variant='body1'
                            color={'text.secondary'}
                        >
                        </Typography>
                    </CardContent>
                </Card>
            </Box>) : <p>No Forecast Data Was Found</p>
    )
}

export default Forecast