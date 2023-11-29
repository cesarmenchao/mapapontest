import React from 'react';
import MainContainer from '../../components/common/MainContainer';
import Text from '../../components/common/Text';
import {SubmitButton} from '../../components/common/SubmitButton';
import {useNavigation} from '@react-navigation/native';

export const Home: React.FC = () => {
  const navigation = useNavigation();

  const navigationToDataList = () => {
    navigation.navigate('DataList');
  };

  return (
    <MainContainer>
      <Text text="Bem vindo ao Mapapon" type="bold" numberOfLines={2} title />
      <SubmitButton title="Consultar Dados" onPress={navigationToDataList} />
    </MainContainer>
  );
};
