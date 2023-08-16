import React from 'react';

import './index.css'
function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-indigo-600 mb-2">Mi Página Simple</h1>
        <p className="text-gray-600">Bienvenido a mi página de práctica con TypeScript y React.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">Frase de motivación 1</h2>
          <p className="text-gray-600">"La perseverancia es la clave del éxito."</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">Frase de motivación 2</h2>
          <p className="text-gray-600">"El único límite es el que te pones a ti mismo."</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">Frase de motivación 3</h2>
          <p className="text-gray-600">"Cree en ti mismo y llegarás lejos."</p>
        </div>
      </div>
    </div>
  );
}

export default App;
