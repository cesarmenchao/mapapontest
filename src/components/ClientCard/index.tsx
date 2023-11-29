import React from 'react';

import Text from '../common/Text';
import {Card, Section} from './styles';

interface Props {
  name: string;
  address: string;
  email: string;
  onPress(): void;
}

const ClientCard: React.FC<Props> = ({name, address, email, onPress}) => {
  return (
    <Card onPress={onPress}>
      <Text text={name} type="bold" color="white" size={16} title />
      <Section>
        <Text text={'Endereço: '} type="bold" color="white" size={14} />
        <Text text={address} type="medium" color="white" size={14} />
      </Section>
      <Section>
        <Text text={'Email: '} type="bold" color="white" size={14} />
        <Text text={email} type="medium" color="white" size={14} />
      </Section>
    </Card>
  );
};

export default ClientCard;
