import React, {useRef, useState} from 'react';

// esta enumeracion sirve para definir los tipos: (clase 93)
enum Operadores {
  sumar,
  restar,
  dividir,
  multiplicar,
}

export const useCalculadora = () => {
  // Creamos un custom hook para la calculadora
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  // un useRef sirve para que no se renderice la app nuevamente (clase 93: botones aritmeticos)
  const ultimaOperacionRef = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const armarNumero = (nuevoNumero: string) => {
    // Clase 91: creando las validaciones del número

    // 1ro no aceptar doble punto
    if (numero.includes('.') && nuevoNumero === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      if (nuevoNumero === '.') {
        // Si es punto decimal entonces si agregarlo
        setNumero(numero + nuevoNumero);
      } else if (nuevoNumero === '0' && numero.includes('.')) {
        //   Si el Usr toca 0 pero después de un . entonces está agregando 0's después del .
        setNumero(numero + nuevoNumero);
      } else if (nuevoNumero !== '0' && !numero.includes('.')) {
        //   Si el nuevoNumero NO ES 0 y No es decimal:
        setNumero(nuevoNumero);
      } else if (nuevoNumero === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + nuevoNumero);
      }
    } else {
      setNumero(numero + nuevoNumero);
    }
  };

  const positivoNegativo = () => {
    //   Clase 91: para poner el signo de menos
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnDelete = () => {
    if (numero.includes('-')) {
      if (numero.length == 2) {
        setNumero('0');
      } else {
        setNumero(numero.substring(0, numero.length - 1));
      }
    } else if (numero.length == 1) {
      setNumero('0');
    } else {
      setNumero(numero.substring(0, numero.length - 1));
    }
  };

  const cambiarNumeroPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else if (numero === '0') {
      return;
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const btnSumar = () => {
    //   Clase 93: usando el useRef definido con los enumeradores:
    cambiarNumeroPorAnterior();
    ultimaOperacionRef.current = Operadores.sumar;
  };
  const btnRestar = () => {
    //   Clase 93: usando el useRef definido con los enumeradores:
    cambiarNumeroPorAnterior();
    ultimaOperacionRef.current = Operadores.restar;
  };
  const btnMultiplicar = () => {
    //   Clase 93: usando el useRef definido con los enumeradores:
    cambiarNumeroPorAnterior();
    ultimaOperacionRef.current = Operadores.multiplicar;
  };
  const btnDividir = () => {
    //   Clase 93: usando el useRef definido con los enumeradores:
    cambiarNumeroPorAnterior();
    ultimaOperacionRef.current = Operadores.dividir;
  };

  const calcular = () => {
    const numero1 = Number(numero);
    const numero2 = Number(numeroAnterior);

    if (numero === 'NaN') {
      return;
    }

    switch (ultimaOperacionRef.current) {
      case Operadores.sumar:
        setNumero(`${numero2 + numero1}`);
        break;

      case Operadores.restar:
        setNumero(`${numero2 - numero1}`);
        break;

      case Operadores.multiplicar:
        setNumero(`${numero2 * numero1}`);
        break;

      case Operadores.dividir:
        setNumero(`${numero2 / numero1}`);
        break;

      default:
        break;
    }

    setNumeroAnterior('0');
  };

  return {
    numero,
    numeroAnterior,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
    armarNumero,
  };
};
