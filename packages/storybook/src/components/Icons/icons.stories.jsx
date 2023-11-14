import React from 'react';

import { colors } from '@namespace/web-shared/styles/theme';

import { TextP3 } from '../atoms/Typography';

import * as icons from '.';

export default {
  component: icons.CloseIcon,
  argTypes: {},
};

export const AllIcons = function () {
  return (
    <div className="box">
      {Object.values(icons).map(IconComponent => (
        <div
          key={IconComponent}
          className={`${
            (IconComponent.displayName === 'CloseIcon' ||
              IconComponent.displayName === 'EyeCrossedIcon' ||
              IconComponent.displayName === 'SearchIcon') &&
            'whiteColorIcon'
          }`}
        >
          <IconComponent />
          <TextP3>{IconComponent.displayName}</TextP3>
        </div>
      ))}
    </div>
  );
};

export const CloseIcon = function (args) {
  return <icons.CloseIcon {...args} />;
};
CloseIcon.args = {
  width: 24,
  height: 24,
  color: colors.grayHACB4BB,
};

export const CloseModalIcon = function (args) {
  return <icons.CloseModalIcon {...args} />;
};
CloseModalIcon.args = {
  height: 20,
  width: 20,
  color: colors.grayH343A3E,
};

export const EyeCrossedIcon = function (args) {
  return <icons.EyeCrossedIcon {...args} />;
};
EyeCrossedIcon.args = {
  width: 24,
  height: 24,
  color: colors.grayH212528,
};

export const EyeIcon = function (args) {
  return <icons.EyeIcon {...args} />;
};
EyeIcon.args = {
  width: 24,
  height: 24,
  color: colors.grayH212528,
};

export const RectangleIcon = function (args) {
  return <icons.RectangleIcon {...args} />;
};
RectangleIcon.args = {
  width: 14,
  height: 14,
  color: colors.grayHACB4BB,
};

export const SearchIcon = function (args) {
  return <icons.SearchIcon {...args} />;
};
SearchIcon.args = {
  width: 24,
  height: 24,
  color: colors.grayH868D94,
};
