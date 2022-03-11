import React, { useState } from 'react';
import Select from '../../components/Select/Select';
import Render from '../../components/Render/Render';
import './Main.css';
import Catchphrase from '../../components/Catchphrase/Catchphrase';

export default function Main() {
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('blue');
  const [bottom, setBottom] = useState('leg');
  const [saying, setSaying] = useState('');
  const [sayingArray, setSayingArray] = useState([]);
  return (
    <div>
      <Select {...{ head, setHead, middle, setMiddle, bottom, setBottom }} />
      <Catchphrase {...{ saying, setSaying, sayingArray, setSayingArray }} />
      <Render {...{ head, middle, bottom }} />
    </div>
  );
}
