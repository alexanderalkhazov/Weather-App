import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const Forecast = () => {
    return (
        <Box width={'250px'}>
            <Card>
                <CardMedia
                    component={'img'}
                    height={'140px'}
                    image='https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png'
                    alt='image'
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant='h5'
                        component={'div'}

                    >
                        Weather
                    </Typography>
                    <Typography
                        variant='body2'
                        color={'text.secondary'}
                    >
                        Weather is :
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Check out More</Button>
                    <Button size='small'>Set As Fav</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Forecast