import React from 'react';

export default function Render({ head, setHead }) {
  return (
    <div>
      <div>
        <leftHead head={head} setHead={setHead} />
        {head}
        <img src={`../../${process.env.PUBLIC_URL}assets/${head}-head.png`} />
      </div>
      {/* <image url={`../../${process.env.PUBLIC_URL}assets/${value}-middle.png`} /> */}
      {/* <image url={`../../${process.env.PUBLIC_URL}assets/${value}-pants.png`} /> */}
    </div>
  );
}
