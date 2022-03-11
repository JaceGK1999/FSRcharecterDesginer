import React from 'react';

export default function Render({ head, middle, bottom }) {
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
      <div className="phrase">test phrase</div>
    </div>
  );
}
