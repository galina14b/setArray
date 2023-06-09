let emoticonArray = ['🐮', '🐯', '🐼', '🐨', '🐵', '🐷', '🐸'];

function getRandomEmoticon(min, max, array) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  let number = Math.round(rand);

  return array[number];
};

export { emoticonArray, getRandomEmoticon };