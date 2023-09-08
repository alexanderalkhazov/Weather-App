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


const Forecast = () => {
    return (
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
                        Weather Date 1/2/1998
                    </Typography>
                    <Typography
                        variant='body2'
                        color={'text.secondary'}
                    >
                        Weather is : Nice
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Check out More</Button>
                    <IconButton size='small'>
                        <ThumbUpIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Forecast