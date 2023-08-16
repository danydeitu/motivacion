// Archivo: App.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Importa tu componente App aquí

describe('App Component', () => {
  test('should render motivation card elements', () => {
    render(<App />); // Renderiza el componente App

    // Realiza las aserciones necesarias aquí para verificar que los elementos de la tarjeta se rendericen correctamente
  });
});
