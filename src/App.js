import React from 'react';
import Text from './Text';
import text from './Text';
import { useText } from './util';

function App() {

  const [digitation, setDigitation] = React.useState('');

  const [errorWord, setErrorWord] = React.useState(false);

  const { verifyWordCorrect } = useText({ text: text() });

  const handleDigitation = (e) => {
    setDigitation(e.target.value);
    const word = e.target.value;
    const index = [...word].length - 1;
    const letter = [...word][index];

    const verify = verifyWordCorrect({ letterWord: letter, index });
    setErrorWord(verify);
  }

  const handlePresSpace = (e) => {
    if (e.key === ' ') {
      // setIndexWord(indexWord + 1);
    }
  }

  return (
    <div style={{ fontSize: 22, width: '100%' }}>
      <div>
        <Text />
      </div>
      <div style={{ marginTop: 30 }}>
        <input
          style={{ paddingLeft: 20, width: '50%', height: 50, fontSize: 22 }}
          type="text"
          value={digitation}
          onKeyPress={handlePresSpace}
          onChange={handleDigitation}
        />
      </div>
      {errorWord ? <div>ta correto</div> : <div>ta errado</div>}
    </div>
  );
}

export default App;
