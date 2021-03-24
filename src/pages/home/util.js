import React, { useState } from 'react';

export const useText = ({ text }) => {
  const getTextSlicedByWord = () => text.split(' ');

  const [textSlicedByWord] = useState(() => getTextSlicedByWord());

  const [indexWord, setIndexWord] = useState(0);

  const verifyWordCorrect = ({
    wordTyped, isSpaceKey,
  }) => {
    const word = textSlicedByWord[indexWord].slice(0, wordTyped.length); // get substring

    const valid = wordTyped === word;

    if (isSpaceKey) setIndexWord(indexWord + 1);

    return valid;
  };

  return { verifyWordCorrect };
};
