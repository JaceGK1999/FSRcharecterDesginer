import React, { useState } from 'react';
import Select from '../../components/Select/Select';
import Render from '../../components/Render/Render';

export default function Main() {
  const [head, setHead] = useState('');
  return (
    <div>
      <Select {...{ head, setHead }} />
      <Render {...{ head }} />
    </div>
  );
}
