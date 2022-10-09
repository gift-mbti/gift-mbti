import { Theme } from '@emotion/react';

const color = {
  purple: '#9268EC',
  red: '#FA7473', // tag, pick과 같은 색
  pink: '#F998DC',
  yellow: '#FFE77D',
  blue: '#687DEC',
  green: '#5FC48D',
  orange: '#FFAE64',
  skyblue: '#93D8FF',
};
const font = { main: 'Pretendard' };

const theme: Theme = {
  color: {
    purple: color.purple,
    red: color.red,
    pink: color.pink,
    yellow: color.yellow,
    blue: color.blue,
    green: color.green,
    orange: color.orange,
    skyblue: color.skyblue,
  },
  font: { main: font.main },
};

export default theme;
