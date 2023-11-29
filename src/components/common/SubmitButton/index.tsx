import React from 'react';

import Text from '../Text';
import {Button} from './styles';
interface Props {
  title: string;
  onPress(): void;
}
export const SubmitButton: React.FC<Props> = ({title, onPress}) => {
  return (
    <Button onPress={onPress}>
      <Text text={title} type="bold" color="white" size={14} />
    </Button>
  );
};
