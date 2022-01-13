import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
  colorText?: string;
  ancho?: boolean;
  accion: (nuevoNumero: string) => void;
}

const BotonCalc = ({
  texto,
  color = '#2d2d2d',
  colorText = '#fff',
  ancho = false,
  accion,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 170 : 80,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: colorText,
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BotonCalc;
