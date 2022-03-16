import React, { FunctionComponent } from 'react';
import { Image, Pressable } from 'react-native';

interface Props {
  onPress: () => void;
  isUpButton?: boolean;
}

const ArrowButton: FunctionComponent<Props> = ({ onPress, isUpButton }) => {
  const arrowDownIcon = require('./assets/arrow-down.png');
  const arrowUpIcon = require('./assets/arrow-up.png');
  return (
    <Pressable onPress={onPress}>
      <Image source={isUpButton ? arrowUpIcon : arrowDownIcon} />
    </Pressable>
  );
};

export default ArrowButton;
