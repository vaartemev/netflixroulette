import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '../../components/button/button';

export const RadioButton = ({ type, filters, filter }) => {
  const dispatch = useDispatch();
  const [selected, select] = useState(0);

  return filters.map((item, index) => {
    return (
      <Button
        key={item.key}
        type={type}
        text={item.title}
        checked={selected === index}
        handleOnClick={(() => dispatch(filter(item.key)), select(index))}
      />
    );
  });
};

RadioButton.propTypes = {
  type: PropTypes.string,
  filters: PropTypes.array,
  filter: PropTypes.func,
};
