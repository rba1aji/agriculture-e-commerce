import prod1 from '../images/prod1.webp';
import prod2 from '../images/prod2.jpeg';
import prod3 from '../images/prod3.jpg';
import prod4 from '../images/prod4.jpg';
import prod5 from '../images/prod5.jpg';

export const ApiUrl = process.env.NODE_ENV === 'production' ? 'https://agriecom.herokuapp.com' : 'http://localhost:5000';

export const prodImgUrl = () => {
    const randInt = parseInt(Math.floor(Math.random() * 5) % 4);
    return [prod1, prod2, prod3, prod4, prod5][randInt];
}