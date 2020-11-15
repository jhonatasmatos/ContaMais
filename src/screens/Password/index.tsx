import React, { useEffect, useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, TextInput, Keyboard } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import { 
  Container,
  Header,
  TextHeader,
  Label,
  ContainerInputs,
  Input,
  LinkRecoveryPassword,
  RecoveryPasswordText,
  ContainerButton,
  Button,
  ButtonText,
} from './styles';

function Password() {
  const refInput1 = useRef<TextInput>(null);
  const refInput2 = useRef<TextInput>(null);
  const refInput3 = useRef<TextInput>(null);
  const refInput4 = useRef<TextInput>(null);
  const refInput5 = useRef<TextInput>(null);
  const refInput6 = useRef<TextInput>(null);
  
  const[password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  }
  
  const handleContinue = () => {
    Keyboard.dismiss();
    navigation.navigate('Home');
  }

  const handleRecoveryPassword = () => {
    console.log('Recuperar senha')
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons name='chevron-back-outline' size={24} />
        </TouchableOpacity>
        <TextHeader>Senha Conta Mais</TextHeader>
      </Header>

      <Label>digite sua senha</Label>
      <ContainerInputs>
        <Input
          onChangeText={text => setPassword(text)}
          ref={refInput1}
          maxLength={1} 
          autoFocus
          placeholderTextColor='#DDD'
          keyboardType='number-pad'
          secureTextEntry
          onTextInput={() => refInput2.current?.focus()}
        />

        <Input
          onChangeText={text => setPassword(password + text)}
          ref={refInput2}
          maxLength={1}  
          placeholderTextColor='#DDD'
          keyboardType='number-pad'
          secureTextEntry
          onTextInput={() => refInput3.current?.focus()}
        />

        <Input
          onChangeText={text => setPassword(password + text)}
          ref={refInput3}
          maxLength={1} 
          placeholderTextColor='#DDD'
          keyboardType='number-pad'
          secureTextEntry
          onTextInput={() => refInput4.current?.focus()}
        />

        <Input
          onChangeText={text => setPassword(password + text)}
          ref={refInput4}
          maxLength={1} 
          placeholderTextColor='#DDD'
          keyboardType='number-pad'
          secureTextEntry
          onTextInput={() => refInput5.current?.focus()}
        />
        
        <Input
          onChangeText={text => setPassword(password + text)}
          ref={refInput5}
          maxLength={1} 
          placeholderTextColor='#DDD'
          keyboardType='number-pad'
          secureTextEntry
          onTextInput={() => refInput6.current?.focus()}
        />

        <Input
          onChangeText={text => setPassword(password + text)}
          ref={refInput6}  
          placeholderTextColor='#DDD'
          keyboardType='number-pad'
          returnKeyType='done'
          secureTextEntry
        />
      </ContainerInputs>

      <LinkRecoveryPassword onPress={handleRecoveryPassword}>
        <RecoveryPasswordText>Recuperar senha</RecoveryPasswordText>
      </LinkRecoveryPassword>
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
)(Password);
