import React from 'react';
import Text from './Text';
import text from './Text';
import { useText } from './util';

function Home() {
  const [digitation, setDigitation] = React.useState('');

  const [errorWord, setErrorWord] = React.useState(false);

  const { verifyWordCorrect } = useText({ text: text() });

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
        <Text />
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
      {errorWord ? <div>ta correto</div> : <div>ta errado</div>}
    </div>
  );
}

export default Home;
