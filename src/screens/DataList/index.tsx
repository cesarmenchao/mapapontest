import MainContainer from '../../components/common/MainContainer';
import React, {useCallback} from 'react';
import {ListRenderItem} from 'react-native';
import {ClientData, RootStackParamList} from '../../types/navigation';
import ClientCard from '../../components/ClientCard';
import {List} from './styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const data = [
  {
    id: '0',
    name: 'Alice Smith',
    address: '123 Main St',
    email: 'alice@example.com',
  },
  {
    id: '1',
    name: 'Bob Johnson',
    address: '456 Oak Ave',
    email: 'bob@example.com',
  },
  {
    id: '2',
    name: 'Charlie Brown',
    address: '789 Pine Blvd',
    email: 'charlie@example.com',
  },
  {
    id: '3',
    name: 'David Miller',
    address: '101 Elm Ln',
    email: 'david@example.com',
  },
  {
    id: '4',
    name: 'Emma Davis',
    address: '202 Maple Dr',
    email: 'emma@example.com',
  },
  {
    id: '5',
    name: 'Frank White',
    address: '303 Cedar Ct',
    email: 'frank@example.com',
  },
  {
    id: '6',
    name: 'Grace Wilson',
    address: '404 Birch Rd',
    email: 'grace@example.com',
  },
  {
    id: '7',
    name: 'Henry Moore',
    address: '505 Spruce Pl',
    email: 'henry@example.com',
  },
  {
    id: '8',
    name: 'Isabel Lee',
    address: '606 Walnut Way',
    email: 'isabel@example.com',
  },
  {
    id: '9',
    name: 'Jack Robinson',
    address: '707 Chestnut St',
    email: 'jack@example.com',
  },
];

export const DataList: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const renderItem: ListRenderItem<ClientData> = useCallback(
    ({item}) => {
      const navigateToClient = () => {
        navigation.navigate('Client', {
          name: item.name,
          address: item.address,
          email: item.email,
          id: item.id,
        });
      };

      return (
        <ClientCard
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
