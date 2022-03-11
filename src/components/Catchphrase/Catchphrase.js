import React from 'react';

export default function Catchphrase() {
  return (
    <div>
      <label>
        Add a catch phrase
        <input className="catchphrase-input" />
        <button className="catchphrase-button">Add</button>
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
