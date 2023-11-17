import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { colors } from '@namespace/web-shared/styles/theme';

import RectangleIcon from '../../Icons/RectangleIcon';
import SearchIcon from '../../Icons/SearchIcon';

import { autocompleteSearchArray } from './props';
import { AutoComplete, InputGroup } from './styled';

import Input from './index';

export const InputDefault = function (props) {
  const [inputValue, setInputValue] = useState('');

  return <Input onChange={setInputValue} value={inputValue} {...props} />;
};

export const InputWithLeftIcon = function (props) {
  const [inputValue, setInputValue] = useState('');

  return (
    <Input
      onChange={setInputValue}
      value={inputValue}
      {...props}
      iconLeft={<RectangleIcon color={colors.grayH868D94} height={20} width={20} />}
    />
  );
};

export const AutocompleteInput = function ({ data, onChange, onSelect, value, ...props }) {
  const [searchAddressValue, setSearchAddressValue] = useState('');

  return (
    <Input
      full={false}
      isInput={false}
      label="Search Address"
      onChange={setSearchAddressValue}
      value={searchAddressValue}
      {...props}
    >
      <InputGroup inside>
        <InputGroup.Addon>
          <SearchIcon />
        </InputGroup.Addon>
        <AutoComplete
          data={autocompleteSearchArray}
          onChange={setSearchAddressValue}
          onSelect={setSearchAddressValue}
          value={searchAddressValue}
        />
      </InputGroup>
    </Input>
  );
};

AutocompleteInput.propTypes = {
  data: PropTypes.arrayOf([]),
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  value: PropTypes.string,
};

AutocompleteInput.defaultProps = {
  data: [],
  onChange: null,
  onSelect: null,
  value: '',
};
