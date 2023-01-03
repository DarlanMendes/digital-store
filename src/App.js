
import styles from  './App.module.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import MeusPedidos from './pages/MeusPedidos';
import { Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro'
import Footer from './components/Footer';
import FinalizarCompra from './pages/FinalizarCompra';
import ProdutoSelecionado from './components/ProdutoSelecionado';
import HeaderMobile from './components/HeaderMobile';
import CriarConta from './components/CriarConta';
import HeaderAuth from './components/HeaderAuth';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
function App() {
 const[location,setLocation]=useState(useLocation())
 console.log(location)
  return (
    <div className={styles}>
      {location.pathname==='/login'||location.pathname==='/cadastro'?<HeaderAuth/>
       :<>
       <Header/>
        <HeaderMobile/>
       </>
      }
     
      
      
      <Routes>
        <Route path="/produtos" >
          <Route index element={<Produtos/>}/>
          <Route path=":id" element={<ProdutoSelecionado/>}/>
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/meuspedidos" element={<MeusPedidos />} />
        {/* categorias */}
        <Route path='/' element={<Login />} />
        <Route path='cadastro/' >
          <Route index element={<Cadastro/>}/>
          <Route path=':email' element={<CriarConta/>}/>
        </Route>
        <Route path='/finalizarcompra' element={<FinalizarCompra />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
