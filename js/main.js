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
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = ['Катя', 'Андрей', 'Лиза', 'Ева', 'Петя', 'Егор'];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return() => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const createMessage = () =>
  Array.from({length: getRandomInteger(1,2) }, () =>
    getRandomArrayElement(COMMENT_LINES)
  ).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_NUMBER)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_NUMBER, LIKE_MAX_NUMBER),
  comments: Array.from(
    {length: getRandomInteger(0, COMMENT_LINES) },
    createComment
  ),
});

const getPictures = () =>
  Array.from({length: PICTURE_NUMBER}, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

getPictures();
