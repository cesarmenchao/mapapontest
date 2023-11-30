import React from 'react';

import Text from '../common/Text';
import {AddressCard, Card, Section} from './styles';
import {ClientAddress} from '../../types/navigation';

interface Props {
  name: string;
  address: ClientAddress;
  email: string;
  onPress(): void;
  username: string;
}

const ClientCard: React.FC<Props> = ({
  name,
  address,
  email,
  onPress,
  username,
}) => {
  return (
    <Card onPress={onPress}>
      <Text text={name} type="bold" color="white" size={16} title />
      <Section>
        <Text text={'Username: '} type="bold" color="white" size={14} />
        <Text text={username} type="medium" color="white" size={14} />
      </Section>
      <Section>
        <Text text={'Email: '} type="bold" color="white" size={14} />
        <Text text={email} type="medium" color="white" size={14} />
      </Section>
      <AddressCard>
        <Text text={'Endereço:'} type="bold" color="black" size={14} />
        <Section>
          <Text text={'Rua: '} type="bold" color="black" size={11} />
          <Text text={address.street} type="medium" color="black" size={11} />
        </Section>
        <Section>
          <Text
            text={'Complemento / n° : '}
            type="bold"
            color="black"
            size={11}
          />
          <Text text={address.suite} type="medium" color="black" size={11} />
        </Section>
        <Section>
          <Text text={'Cidade: '} type="bold" color="black" size={11} />
          <Text text={address.city} type="medium" color="black" size={11} />
        </Section>
        <Section>
          <Text text={'CEP: '} type="bold" color="black" size={11} />
          <Text text={address.zipcode} type="medium" color="black" size={11} />
        </Section>
      </AddressCard>
    </Card>
  );
};

export default ClientCard;
