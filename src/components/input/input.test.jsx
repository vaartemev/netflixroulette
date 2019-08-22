import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Input } from './input';

describe('<Input />', () => {
  const props = {
    placeholderText: 'some text',
  };

  it('Should be rendering with placeholder "some text"', () => {
    const output = shallow(<Input placeholderText={props.placeholderText} />);
    const input = output.find('input');
    expect(input.prop('placeholder')).toEqual(props.placeholderText);
  });

  it('Should call handleOnInput on input', () => {
    const mockFn = jest.fn();
    const event = {
      preventDefault() {},
      target: { value: 'value' },
    };
    const input = shallow(<Input handleOnInput={mockFn} />);
    input.find('input').simulate('input', event);
    expect(mockFn).toBeCalledWith('value');
  });

  it('Should call handleOnEnterPress on enter press', () => {
    const mockFn = jest.fn();
    const event = {
      preventDefault() {},
      key: 'Enter',
    };
    const input = shallow(
      <Input searchValue="value" handleOnEnterPress={mockFn} />,
    );
    input.find('input').simulate('keyDown', event);
    expect(mockFn).toBeCalledWith('value', 'Enter');
  });

  it('Should render correct', () => {
    const output = shallow(<Input />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
