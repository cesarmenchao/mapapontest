import React, {useCallback, useState} from 'react';
import {ButtonText, CardContainer, EditButton, Input, Section} from './styles';
import MainContainer from '../../components/common/MainContainer';
import Text from '../../components/common/Text';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../types/navigation';
export const Client: React.FC = () => {
  const {params} = useRoute<RouteProp<RootStackParamList>>();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(params?.name);
  const [address, setAddress] = useState(params?.address);
  const [email, setEmail] = useState(params?.email);

  const handleEditPress = () => {
    setIsEditing(!isEditing);
  };

  const renderInputs = useCallback(() => {
    return (
      <>
        <Section>
          <Text text={'Nome: '} type="bold" color="black" size={14} />
          <Input
            value={name}
            placeholder="Nome"
            onChangeText={setName}
            disabled={isEditing}
            editable={isEditing}
          />
        </Section>
        <Section>
          <Text text={'Endereço: '} type="bold" color="black" size={14} />
          <Input
            value={address}
            placeholder="Endereço"
            onChangeText={setAddress}
            disabled={isEditing}
            editable={isEditing}
          />
        </Section>

        <Section>
          <Text text={'Email: '} type="bold" color="black" size={14} />
          <Input
            value={email}
            placeholder="Email"
            editable={isEditing}
            onChangeText={setEmail}
            disabled={isEditing}
          />
        </Section>
      </>
    );
  }, [isEditing, name, address, email]);

  return (
    <MainContainer>
      <CardContainer>
        <Text text={'Cliente'} type="bold" color="black" size={24} title />
        {renderInputs()}
        <EditButton onPress={handleEditPress} isEditing={isEditing}>
          <ButtonText>{isEditing ? 'Salvar' : 'Editar'}</ButtonText>
        </EditButton>
      </CardContainer>
    </MainContainer>
  );
};
