import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #8B10AE;
`;

export const Content = styled.View`
  flex: 1;
  z-index: 5;
  max-height: 400px;
  justify-content: center;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  margin: 0 20px;
  background: #fff;
  border-radius: 4px;
  position: absolute;
`;

export const CardHeader = styled.View`
  padding: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #999;
  font-size: 16px;
`;

export const Description = styled.Text`
  color: #333;
  font-size: 32px;
  margin-top: 3px;
`;

export const CardFooter = styled.View`
  padding: 30px;
  background: #eee;
  border-radius: 4px;
`;

export const Annotation = styled.Text`
  color: #333;
  font-size: 14px;
`;