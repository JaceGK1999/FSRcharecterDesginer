import React from 'react';

export default function Render({ head, middle }) {
  return (
    <div>
      <div>
        {head}
        <img src={`../../../${process.env.PUBLIC_URL}/assets/${head}-head.png`} />
      </div>
      <div>
        {middle}
        <img src={`../../../${process.env.PUBLIC_URL}/assets/${middle}-middle.png`} />
      </div>
      <div>
        {/* <img src={`../../../${process.env.PUBLIC_URL}/assets/${pants}-pants.png`} /> */}
      </div>
    </div>
  );
}
