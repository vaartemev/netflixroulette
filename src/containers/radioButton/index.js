import React, { useState } from 'react';
import { Button } from '../../components/button/button';

export const RadioButton = ({ type, array }) => {
  const [selected, select] = useState(0);
  return array.map((item, index) => {
    return (
      <Button
        key={item.key}
        type={type}
        text={item.key}
        active={selected === index}
        handleOnClick={() => select(index)}
      />
    );
  });
};
