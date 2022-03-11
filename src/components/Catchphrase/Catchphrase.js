import React from 'react';

export default function Catchphrase({ saying, setSaying, sayingArray, setSayingArray }) {
  //   console.log(saying, 'saying');
  const saveCatchphrase = () => {
    setSayingArray((prevState) => [...prevState, saying]);
    setSaying('');
  };
  //   console.log('props', props);
  console.log(sayingArray, 'saying array');
  return (
    <div>
      <label>
        Add a catch phrase
        <input
          className="catchphrase-input"
          value={saying}
          onChange={(e) => {
            setSaying(e.target.value);
          }}
        />
        <button className="catchphrase-button" onClick={saveCatchphrase}>
          Add
        </button>
      </label>
      <div>
        <ul></ul>
      </div>
    </div>
  );
}

// catchphraseButton.addEventListener('click', () => {

//     const newCatchphrase = catchphraseInput.value;
//     catchphrases.push(newCatchphrase);
//     displayCatchphrases();
//     catchphraseInput.value = '';
// });
