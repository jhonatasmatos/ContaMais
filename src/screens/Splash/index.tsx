import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import contaLogo from '../../assets/logo.png';

const Splash: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
    return () => clearTimeout(timer);
  },[])

  return(
    <LinearGradient colors={['#ED6663', '#43658B']} 
      style={{ 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Image
        source={contaLogo}
        style={{ width: 274, height: 72 }}
        resizeMode='stretch'
      />
    </LinearGradient>
  );
}

export default Splash;