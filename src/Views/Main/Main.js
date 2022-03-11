import React, { useState } from 'react';
import Select from '../../components/Select/Select';
import Render from '../../components/Render/Render';

export default function Main() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  return (
    <div>
      <Select {...{ head, setHead, middle, setMiddle }} />
      <Render {...{ head, middle }} />
    </div>
  );
}
