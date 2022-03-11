import React from 'react';

export default function Render({ head, middle, bottom, saying }) {
  return (
    <div>
      <div>
        <img src={`../../../${process.env.PUBLIC_URL}/assets/${head}-head.png`} />
      </div>
      <div>
        <img src={`../../../${process.env.PUBLIC_URL}/assets/${middle}-middle.png`} />
      </div>
      <div>
        <img src={`../../../${process.env.PUBLIC_URL}/assets/${bottom}-pants.png`} />
      </div>
      <div className="phrase">{`${saying}`}</div>
    </div>
  );
}
