import { Animated, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  contentContainerStyle: { alignItems: 'center', },
})`
  margin: 0 30px;
`;

export const Code = styled.View`
  padding: 10px;
  background: #fff;
  overflow: hidden;
  align-self: center;
`;

export const Nav = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.View`
  padding: 12px 0;
  align-items: center;
  flex-direction: row;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavText = styled.Text`
  color: #fff;
  font-size: 17px;
  margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
  padding: 12px;
  margin-top: 15px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
`;

export const SignOutButtonText = styled.Text`
  color: #FFF;
  font-size: 15px;
  font-weight: bold;
`;