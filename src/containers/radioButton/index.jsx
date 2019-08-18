import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../components/button/button';

export const RadioButton = ({ type, array, actionType }) => {
  const dispatch = useDispatch();
  const [selected, select] = useState(0);

  return array.map((item, index) => {
    return (
      <Button
        key={item.key}
        type={type}
        text={item.title}
        checked={selected === index}
        handleOnClick={() => {
          dispatch(actionType(item.key)), select(index);
        }}
      />
    );
  });
};
