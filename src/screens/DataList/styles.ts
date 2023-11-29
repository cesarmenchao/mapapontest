import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {ClientData} from '../../types/navigation';

export const List = styled(FlatList as new () => FlatList<ClientData>)`
  flex: 1;
`;
