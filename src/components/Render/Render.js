import React from 'react';

export default function Render({ head }) {
  return (
    <div>
      <div>
        {head}
        <img src={`../../../${process.env.PUBLIC_URL}/assets/${head}-head.png`} />
      </div>
      {/* <image url={`../../../${process.env.PUBLIC_URL}/assets/${torso}-middle.png`} /> */}
      {/* <image url={`../../../${process.env.PUBLIC_URL}/assets/${pants}-pants.png`} /> */}
    </div>
  );
}
