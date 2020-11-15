import React from 'react';
import { ButtonProps } from 'react-native';
import { Container, Icon, VoiceIcon, ButtonText } from './styles';

interface PropsButton extends ButtonProps {
  icon?: string;
  onPress(): void;
}

import recordVoice from '../../assets/record_voice_over.png';
import addAlert from '../../assets/add_alert.png';
import barcode from '../../assets/barcode.png';
import compareArrows from '../../assets/compare_arrows.png';

const Button: React.FC<PropsButton> = ({ icon, title, onPress, ...rest }) => {
  return(
    <Container {...rest} onPress={onPress}>
      { icon === 'barcode' && <Icon source={barcode} />}
      { icon === 'addAlert' && <Icon source={addAlert} />}
      { icon === 'compareArrows' && <Icon source={compareArrows} />}
      <ButtonText>{title}</ButtonText>
      <VoiceIcon source={recordVoice} />
    </Container>
  );
}

export default Button;