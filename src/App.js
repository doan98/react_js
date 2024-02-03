
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MostrarClientes from './componet/MostrarClientes'
import CrearClientes from './componet/CrearClientes'
import EditarClientes from './componet/EditarClientes'




function App() {
  
  return (
    
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MostrarClientes/>} />
            <Route path='/create' element={<CrearClientes/>} />
            <Route path='/edit/:id' element={<EditarClientes/>} />
           
          </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;




