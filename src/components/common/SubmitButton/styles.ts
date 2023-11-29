import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(10)}px;
  height: ${RFValue(45)}px;
  width: 45%;
  background-color: #15a185;
`;
