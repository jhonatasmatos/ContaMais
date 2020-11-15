import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Keyboard, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import { 
  Container,
  Header,
  TextHeader,
  Label,
  Input,
  ContainerButton,
  Button,
  ButtonText,
} from './styles';

import { cpfCnpjMask } from '../../utils/cpf-cpnj';

function Login() {
  const[cpfCnpjNumber, setCpfCnpjNumber] = useState('');

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  }
  
  const handleContinue = () => {
    Keyboard.dismiss();
    navigation.navigate('Password');
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons name='chevron-back-outline' size={24} />
        </TouchableOpacity>
        <TextHeader>Fazer login</TextHeader>
      </Header>

      <Label>digite seu CPF ou CNPJ</Label>
      <Input
        value={cpfCnpjMask(cpfCnpjNumber)}
        onChangeText={text => setCpfCnpjNumber(text)} 
        placeholder='CPF ou CNPJ'
        placeholderTextColor='#DDD'
        keyboardType='number-pad'
        maxLength={18}
      />

      <ContainerButton>
        <Button onPress={handleContinue}>
          <ButtonText>continuar</ButtonText>
        </Button>
      </ContainerButton>

    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  
});

const mapDispatchToProps = {
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
