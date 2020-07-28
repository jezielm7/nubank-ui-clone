import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Top, Logo, Title } from './styles';

const Header = () => {
  return (
    <Container>
      <Top>
        <Logo source={require('../../assets/Nubank_Logo.png')} />
        <Title>Jeziel</Title>
      </Top>

      <Icon name="keyboard-arrow-down" size={20} color="#fff" />
    </Container>
  );
}

export default Header;