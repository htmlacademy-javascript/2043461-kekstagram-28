import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './util.js';

const PICTURE_NUMBER = 25;
const AVATAR_NUMBER = 6;
const DESCRIPTIONS = [
  'Весна! Мимоза!',
  'Лучше гор могут быть только горы...',
  'Солнце и море снега',
  'Праздник к нам приходит',
  'Ненавижу делать описания',
  'Фантазия закончилась.',
];
const LIKE_MIN_NUMBER = 15;
const LIKE_MAX_NUMBER = 200;
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = ['Катя', 'Андрей', 'Лиза', 'Ева', 'Петя', 'Егор'];

const generateCommentId = createIdGenerator();

const createMessage = () =>
  Array.from({length: getRandomInteger(1,2) }, () =>
    getRandomArrayElement(COMMENTS)
  ).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_NUMBER)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createComments = () => {
  const res = [];
  const commentNumber = getRandomInteger(0, 3);

  for (let i = 0; i < commentNumber; i++) {
    const photo = createComment(i + 1);
    res.push(photo);
  }

  return res;
};

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_NUMBER, LIKE_MAX_NUMBER),
  comments: createComments(),
});

const getPictures = () => {
  const res = [];
  for (let i = 0; i < PICTURE_NUMBER; i++) {
    const photo = createPicture(i + 1);
    res.push(photo);
  }

  return res;
};

export { getPictures };
