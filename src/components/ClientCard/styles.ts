import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
  border-radius: 20px;
  padding: ${RFValue(8)}px;
  background-color: #15a185;
  margin: 5px;
  height: ${RFValue(170)}px;
  width: ${RFValue(250)}px;
  border: 3px solid #53b568;
`;
export const Section = styled.View`
  flex-direction: row;
  margin: 1px 0;
`;

export const AddressCard = styled.View`
  border-radius: 20px;
  padding: ${RFValue(8)}px;
  background-color: #fff;
  flex: 1;
`;
