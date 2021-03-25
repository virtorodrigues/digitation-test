import React from 'react';
import Text from './Text';
import text from './Text';
import { useText } from './util';
import './home.css';

function Home() {
  const [digitation, setDigitation] = React.useState('');
  const [errorWord, setErrorWord] = React.useState(false);

  const {
    verifyWordCorrect, getTextSplited, getListWordsValidate, getIndex,
  } = useText({ text: text() });

  const handleDigitation = (e) => {
    const wordTyped = e.target.value;
    const lastLetter = wordTyped[wordTyped.length - 1];

    const isSpaceKey = lastLetter === ' ';

    if (isSpaceKey) {
      setDigitation('');
    } else {
      setDigitation(wordTyped);
    }

    const verify = verifyWordCorrect({ wordTyped: wordTyped.trim(), isSpaceKey });

    setErrorWord(verify);
  };

  return (
    <div style={{ fontSize: 22, width: '100%' }}>
      <div>
        {getTextSplited().map((subString, index) => {
          const useClaseName = getListWordsValidate().find((i) => i.index === index).status;
          const isWriting = getIndex() === index ? 'writing' : '';
          return (
            <div className={`${isWriting} ${useClaseName}`}>
              {` ${subString} `}
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 30 }}>
        <input
          style={{
            paddingLeft: 20, width: '50%', height: 50, fontSize: 22,
          }}
          type="text"
          value={digitation}
          onChange={handleDigitation}
        />
      </div>
    </div>
  );
}

export default Home;
