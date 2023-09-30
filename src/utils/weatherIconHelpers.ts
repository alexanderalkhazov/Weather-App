const path = '/weather-icons';

const switchCorrectImg = (iconNumber: number) => {
    return `${path}/${iconNumber}-s.png`;
}

export {
    switchCorrectImg
}