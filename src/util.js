import React, { useState } from 'react';

export const useText = ({ text }) => {
  const getTextSliced = () => {
    return [...text];
  }
  const [textSplited,] = useState(() => getTextSliced());



  const verifyWordCorrect = ({ letterWord, index }) => {

    const letterPhrase = textSplited[index];

    return letterWord === letterPhrase;
  }

  return { verifyWordCorrect };
}