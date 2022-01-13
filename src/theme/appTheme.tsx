import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#000',
  },
  calculadoraContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  resultado: {
    color: '#fff',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  resultadoPequeno: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    // flexWrap: 'nowrap',
  },
  boton: {
    borderRadius: 100,
    width: 80,
    height: 80,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  botonTexto: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
