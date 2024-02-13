
import{Route,BrowserRouter, Routes} from 'react-router-dom'
import { Login } from './componentes/Login';
import { Agenda } from './componentes/Agenda';
import { Registrar } from './componentes/Registrar';
import{Error404} from './componentes/Error404';
import { ActualizarContacto } from './componentes/ActualizarContacto';
import { NuevoContacto } from './componentes/NuevoContacto';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/agenda' element={<Agenda/>}/>
          <Route path='/registrar' element={<Registrar/>}/>
          <Route path='/actualizarContacto/:id' element={<ActualizarContacto/>}/>
          <Route path='/nuevoContacto' element={<NuevoContacto/>}/>
          <Route path='/*' element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
