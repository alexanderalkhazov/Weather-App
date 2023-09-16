const path = '../../public/weather-icons';

const switchCorrectImg = (iconNumber: number) => {
    return `${path}/${iconNumber}-s.png`;
}

export {
    switchCorrectImg
}