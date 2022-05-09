import { Component } from 'react';
import Productos from './components/Productos';

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomates.jpg' },
      { name: 'Arbejas', price: 2500, img: '/productos/arbejas.jpg' },
      { name: 'Lechuga', price: 1500, img: '/productos/lechugas.jpg' },
    ],
  };
  render() {
    return (
      <div>
        <Productos
          agregarAlCarro={() => console.log('No hace nada')}
          productos={this.state.productos}
        />
      </div>
    );
  }
}

export default App;
