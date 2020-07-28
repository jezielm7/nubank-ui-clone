import React from 'react';
import { StatusBar, View, Text } from 'react-native';

import Routes from './src/routes';

const nubankclone = () => {
  return (
    <>
      <StatusBar backgroundColor="#8B10AE" />
      <Routes />
    </>
  );
}

export default nubankclone;