import React from 'react';
import { View } from 'react-native';

import QRCode from 'react-native-qrcode-generator';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { 
  Container, 
  Code, 
  Nav, 
  NavItem, 
  NavText, 
  SignOutButton, 
  SignOutButtonText, 
} from './styles';

const Menu = () => {
  return (
    <Container>
      <Code>
        <QRCode 
          value="https://instagram.com/programados.edit"
          size={80}
          fgColor="#fff"
          bgColor="#8B10AE"
        />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={22} color="#fff" />
          <NavText>Me ajuda</NavText>
        </NavItem>

        <NavItem>
          <Icon name="person-outline" size={22} color="#fff" />
          <NavText>Perfil</NavText>
        </NavItem>

        <NavItem>
          <Icon name="credit-card" size={22} color="#fff" />
          <NavText>Configurar cartão</NavText>
        </NavItem>

        <NavItem>
          <Icon name="smartphone" size={22} color="#fff" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>
          SAIR DA CONTA
        </SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}

export default Menu;