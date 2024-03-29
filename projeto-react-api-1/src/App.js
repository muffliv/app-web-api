import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/NavBar';
import Home from './pages/Home';
import Livros from './pages/Livros';
import NovoLivro from './pages/NovoLivro';
import Container from './components/Container';

function App() {
  return (
    <BrowserRouter>
      <Container>  
          <Routes>
            <Route path='/' element={<Navbar/>}>
              <Route index element={<Home/>}/>
              <Route path='/livros' element={<Livros/>}/>
              <Route path='/novolivro' element={<NovoLivro/>}/>
            </Route>
          </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
