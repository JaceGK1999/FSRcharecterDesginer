import React from 'react';

export default function Select({ head, setHead, middle, setMiddle }) {
  return (
    <div>
      <div className="picker">
        <label>
          Head
          <select
            className="head"
            value={head}
            onChange={(e) => {
              setHead(e.target.value);
            }}
          >
            <option value="bird">Bird</option>
            <option value="duck">Duck</option>
            <option value="dog">Dog</option>
            <option value="horse">Horse</option>
          </select>
        </label>
        <label>
          Middle
          <select
            className="middle"
            value={middle}
            onChange={(e) => {
              setMiddle(e.target.value);
            }}
          >
            <option value="blue">Blue</option>
            <option value="dress">Fancy</option>
            <option value="pink">Pink</option>
            <option value="red">Red</option>
          </select>
        </label>
        <label>
          Bottom
          <select className="bottom-dropdown">
            <option value="leg">Single Leg</option>
            <option value="white">White Pants</option>
            <option value="blue">Blue Jeans</option>
          </select>
        </label>
        <label>
          Add a catch phrase
          <input className="catchphrase-input" />
          <button className="catchphrase-button">Add</button>
        </label>
      </div>
    </div>
  );
}
