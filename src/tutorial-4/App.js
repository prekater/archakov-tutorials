import React from 'react';

import EmptyBlock from './components/EmptyBlock';
import Phrase from './components/Phrase';

const adjectivesArr = [
  'абсолютный',
  'адский',
  'азартный',
  'активный',
  'ангельский',
  'астрономический',
  'баснословный',
  'безбожный',
  'безбрежный',
  'безвозвратный',
  'безграничный',
  'бездонный',
  'бездушный',
  'безжалостный',
  'замечательно',
  'замечательный',
  'записной',
  'запредельный',
  'заядлый',
  'звериный',
  'зверский',
  'зеленый',
  'злой',
  'злостный',
  'значительный',
  'неоспоримый',
  'неотразимый',
  'неоценимый',
  'непередаваемый',
];

const nounsArr = [
  'лгун',
  'день',
  'конь',
  'олень',
  'человек',
  'программист',
  'ребёнок',
  'конец',
  'город',
  'дурак',
];

const App = () => {
  const [phrases, setPhrases] = React.useState([]);

  const clearPhrases = () => {
    setPhrases([]);
  };

  function getRandomIndex(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  const generatePhrase = () => {
    const adjectiveFirst =
      adjectivesArr[getRandomIndex(0, adjectivesArr.length - 1)];

    const adjectiveSecond =
      adjectivesArr[getRandomIndex(0, adjectivesArr.length - 1)];

    const noun = nounsArr[getRandomIndex(0, nounsArr.length - 1)];

    return setPhrases([
      ...phrases,
      `${adjectiveFirst} ${adjectiveSecond} ${noun}`,
    ]);
  };

  return (
    <div className="wrapper">
      {phrases.length === 0 ? (
        <EmptyBlock />
      ) : (
        phrases.map((phrase) => {
          return <Phrase text={phrase} key={phrase} />;
        })
      )}
      <button className="btn btn_generate" onClick={generatePhrase}>
        Сгенерировать
      </button>
      <button className="btn btn_clear" onClick={clearPhrases}>
        Очистить
      </button>
    </div>
  );
};

export default App;
