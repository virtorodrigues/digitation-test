import React, { useState } from 'react';

export const useText = ({ text }) => {
  const handleTextSplited = () => text.split(' ');

  const [textSplited] = useState(() => handleTextSplited());

  const [index, setIndex] = useState(0);
  const [listWordsValidate, setListWordsValidate] = useState(() => textSplited.map((t, i) => ({ index: i, status: 'initial' })));

  const handleListWordValidate = ({ statusChange, statusCondition }) => {
    const wordValidate = listWordsValidate.find((i) => i.index === index);

    if (statusCondition.includes(wordValidate.status)) {
      const newList = listWordsValidate.map((i) => {
        const indexAux = i;
        if (index === i.index) {
          indexAux.status = statusChange;
        }
        return indexAux;
      });
      setListWordsValidate(newList);
    }
  };

  const verifyWordCorrect = ({
    wordTyped, isSpaceKey,
  }) => {
    const word = isSpaceKey ? textSplited[index]
      : textSplited[index].slice(0, wordTyped.length); // get substring

    const valid = wordTyped === word;

    if (isSpaceKey) setIndex(index + 1);

    if (!valid) {
      handleListWordValidate({ statusChange: 'error', statusCondition: ['initial', 'success'] });
    } else if (isSpaceKey) {
      handleListWordValidate({ statusChange: 'success', statusCondition: ['initial', 'error'] });
    } else {
      handleListWordValidate({ statusChange: 'initial', statusCondition: ['error'] });
    }

    return valid;
  };

  const getTextSplited = () => textSplited;

  const getListWordsValidate = () => listWordsValidate;

  const getIndex = () => index;

  return {
    verifyWordCorrect, getTextSplited, getListWordsValidate, getIndex,
  };
};
