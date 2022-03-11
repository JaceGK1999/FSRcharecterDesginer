import React from 'react';

export default function Catchphrase(saying, setSaying) {
  return (
    <div>
      <label>
        Add a catch phrase
        <input className="catchphrase-input" value={saying} />
        <button
          className="catchphrase-button"
          defaultValue={''}
          value={saying}
          onSubmit={(e) => {
            setSaying(e.target.value);
          }}
        >
          Add
        </button>
      </label>
    </div>
  );
}

// catchphraseButton.addEventListener('click', () => {

//     const newCatchphrase = catchphraseInput.value;
//     catchphrases.push(newCatchphrase);
//     displayCatchphrases();
//     catchphraseInput.value = '';
// });
