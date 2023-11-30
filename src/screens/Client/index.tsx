import React, {useCallback, useState} from 'react';
import {
  ButtonText,
  CardContainer,
  CardSubContainer,
  EditButton,
  Input,
  Section,
} from './styles';
import MainContainer from '../../components/common/MainContainer';
import Text from '../../components/common/Text';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../types/navigation';
export const Client: React.FC = () => {
  const navigation = useNavigation();
  const {params} = useRoute<RouteProp<RootStackParamList>>();
  const [isEditing, setIsEditing] = useState(false);
  const [clientName, setClientName] = useState(params?.Client.name);
  const [clientUsername, setClientUsername] = useState(params?.Client.username);
  const [clientEmail, setClientEmail] = useState(params?.Client.email);

  const handleEditPress = () => {
    setIsEditing(!isEditing);
    isEditing ? navigation.goBack() : null;
  };

  const renderInputs = useCallback(() => {
    return (
      <CardSubContainer>
        <Section>
          <Text text={'Nome: '} type="bold" color="black" size={14} />
          <Input
            value={clientName}
            placeholder="Nome"
            onChangeText={setClientName}
            disabled={isEditing}
            editable={isEditing}
          />
        </Section>

        <Section>
          <Text text={'Email: '} type="bold" color="black" size={14} />
          <Input
            value={clientEmail}
            placeholder="Email"
            editable={isEditing}
            onChangeText={setClientEmail}
            disabled={isEditing}
          />
        </Section>
        <Section>
          <Text text={'Username: '} type="bold" color="black" size={14} />
          <Input
            value={clientUsername}
            placeholder="Username"
            editable={isEditing}
            onChangeText={setClientUsername}
            disabled={isEditing}
          />
        </Section>
      </CardSubContainer>
    );
  }, [isEditing, clientEmail, clientName, clientUsername]);

  return (
    <MainContainer>
      <CardContainer>
        <Text
          text={'Dados Pessoais'}
          type="bold"
          color="white"
          size={24}
          title
        />
        {renderInputs()}
        <EditButton onPress={handleEditPress} isEditing={isEditing}>
          <ButtonText>{isEditing ? 'Salvar' : 'Editar'}</ButtonText>
        </EditButton>
      </CardContainer>
    </MainContainer>
  );
};
