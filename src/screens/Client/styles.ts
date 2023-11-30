import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface inputProps {
  disabled: boolean;
}

interface editButtonProps {
  isEditing: boolean;
}

export const CardContainer = styled.View`
  padding: 16px;
  margin: 16px;
  border: 1px solid #53b568;
  border-radius: 20px;
  background-color: #15a185;
`;

export const Input = styled.TextInput<inputProps>`
  height: 40px;
  width: ${RFValue(140)}px;
  border: 1px solid #ccc;
  margin-left: auto;
  color: black;
  font-size: ${RFValue(14)}px;
  border-radius: 10px;
  padding: 8px;
  ${({disabled}) =>
    disabled ? 'background-color: #eee;' : 'background-color: #9e9e9e;'}
`;

export const EditButton = styled.TouchableOpacity<editButtonProps>`
  background-color: #3498db;
  padding: 10px;
  border-radius: 4px;
  align-self: center;
  ${({isEditing}) =>
    isEditing ? 'background-color: #125488;' : 'background-color: red;'}
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  margin: ${RFValue(8)}px;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;

export const CardSubContainer = styled.View`
  border-radius: ${RFValue(10)}px;
  background-color: #fff;
  margin: ${RFValue(10)}px 0px;
`;
