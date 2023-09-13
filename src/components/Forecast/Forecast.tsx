import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia, IconButton,
    Typography
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { DailyForecast } from '../../common/types/forecastTypes';
import { formatDate } from '../../helpers/forecastHelpers';
import { selectUnits } from '../../state/state slices/unitsSlice';
import { setTempAndUnits } from '../../helpers/forecastHelpers';
import { useAppSelector } from '../../state/store/store';

interface ForecastProps {
    forecast?: DailyForecast;
}

const Forecast = ({ forecast }: ForecastProps) => {

    const units = useAppSelector(selectUnits);

    return (
        forecast ? (
            <Box m={1}>
                <Card>
                    <CardMedia
                        component={'img'}
                        height={'30%'}
                        image='https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png'
                        alt='image'
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant='h5'
                        >
                            {formatDate(forecast.Date)}
                        </Typography>
                        <Typography
                            variant='body2'
                            color={'text.secondary'}
                        >
                            Minimum Temp : {setTempAndUnits(forecast.Temperature.Minimum.Value, units)}
                        </Typography>
                        <Typography
                            variant='body2'
                            color={'text.secondary'}
                        >
                            Maximum Temp : {setTempAndUnits(forecast.Temperature.Maximum.Value, units)}
                        </Typography>
                        <Typography
                            variant='body2'
                            color={'text.secondary'}
                        >
                            Day : {forecast.Day.IconPhrase}
                        </Typography>
                        <Typography
                            variant='body2'
                            color={'text.secondary'}
                        >
                            Night : {forecast.Night.IconPhrase}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small'>Check out More</Button>
                        <IconButton
                            size='small'
                        >
                            <ThumbUpIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </Box>) : <p>No Forecast Data Was Found</p>
    )
}

export default Forecast