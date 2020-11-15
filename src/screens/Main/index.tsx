import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import contaLogo from '../../assets/logo.png';
import woman from '../../assets/woman.png';

import { 
  Container,
  BackgroundImage,
  ContainerButtons,
  Button,
  ButtonText
} from './styles';

function Main() {
  const[isVisible, setIsVisible] = useState(false);

  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <LinearGradient colors={['#ED6663', '#43658B']} 
      style={{ 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
      }}
    >
      <Image
        source={contaLogo}
        style={{ width: 274, height: 72, marginTop: 30, marginBottom: 10 }}
        resizeMode='stretch'
      />

      <BackgroundImage source={woman}>

        <ContainerButtons>
          <Button isLoginButton={false} onPress={() => {}}>
            <ButtonText isLoginButton={false}>
              Criar conta
            </ButtonText>
          </Button>

          <Button isLoginButton={true} onPress={handleLogin}>
            <ButtonText isLoginButton={true}>
              Fazer login
            </ButtonText>
          </Button>
        </ContainerButtons>
      </BackgroundImage>
    </LinearGradient>
  );
};

const mapStateToProps = (state: any) => ({
  
});

const mapDispatchToProps = {
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
