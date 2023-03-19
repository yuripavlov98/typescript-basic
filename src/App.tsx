import React from 'react';
import Card, { CardVariant } from './components/Card';


function App() {
  return (
    <div>
      <Card onClick={(num) => console.log('click', num)} variant={CardVariant.outlined} width='280px' height='280px'>
        <button>Click</button>
      </Card>
    </div>
  );
}

export default App;
