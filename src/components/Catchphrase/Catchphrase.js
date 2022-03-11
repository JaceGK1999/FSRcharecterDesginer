import React from 'react';

export default function Catchphrase({ saying, setSaying, sayingArray, setSayingArray }) {
  const saveCatchphrase = () => {
    setSayingArray((prevState) => [...prevState, saying]);
    setSaying('');
  };
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
        <ul>
          {sayingArray.map((saying) => (
            <li key={saying}>{saying}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
