import MainContainer from '../../components/common/MainContainer';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, ListRenderItem} from 'react-native';
import {ClientData, RootStackParamList} from '../../types/navigation';
import ClientCard from '../../components/ClientCard';
import {List} from './styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {getClients} from '../../services/Client';

export const DataList: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [data, setData] = useState<ClientData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getClients();
        if (result) {
          setData(result);
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderItem: ListRenderItem<ClientData> = useCallback(
    ({item}) => {
      const navigateToClient = () => {
        navigation.navigate('Client', {
          Client: item,
        });
      };

      return (
        <ClientCard
          username={item.username}
          onPress={navigateToClient}
          name={item.name}
          address={item.address}
          email={item.email}
          key={item.id}
        />
      );
    },
    [navigation],
  );

  if (loading) {
    return (
      <MainContainer>
        <ActivityIndicator size="large" color="#53b568" />
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <List
        data={data}
        renderItem={renderItem}
        numColumns={1}
        keyExtractor={({id}) => id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </MainContainer>
  );
};
