import React, { useState } from 'react';
import Select from '../../components/Select/Select';
import Render from '../../components/Render/Render';

export default function Main() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  const [bottom, setBottom] = useState('');
  return (
    <div>
      <Select {...{ head, setHead, middle, setMiddle, bottom, setBottom }} />
      <Render {...{ head, middle, bottom }} />
    </div>
  );
}
