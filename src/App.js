
import styles from './App.module.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import MeusPedidos from './pages/MeusPedidos';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro'
import Footer from './components/Footer';
import Compra from './pages/Compra'
import ProdutoSelecionado from './components/ProdutoSelecionado';
import HeaderMobile from './components/HeaderMobile';
import CriarConta from './components/CriarConta';
import HeaderAuth from './components/HeaderAuth';
import { useLocation } from 'react-router-dom';
import { useEffect, useState, createContext } from 'react';
import MeusPedidosFinalizados from './components/MeusPedidosFinalizados';
import CompraRealizada from './components/CompraRealizada'
export const AuthContext = createContext(null);


function App() {

  //localização 
  let local = useLocation()
  const [location, setLocation] = useState(local)

  //cria contexto p/ usuario
  
  
  //inicia com valor nulo
  const [currentUser, setCurrentUser] = useState({ nome:'', email: '',password:'' });

  useEffect(() => {

    setLocation(local)
  }, [local])
  return (
    <AuthContext.Provider value={{currentUser,setCurrentUser}}>
      <div className={styles.app}>

        {location.pathname === '/login' || location.pathname.includes('/cadastro') ? <HeaderAuth />
          : <>
            <Header />
            <HeaderMobile />
          </>
        }



        <Routes>
          <Route path="/produtos" >
            <Route index element={<Produtos />} />
            <Route path=":id" element={<ProdutoSelecionado />} />
            <Route path="carrinho" element={<MeusPedidos />} />

          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/meuspedidos" element={<MeusPedidosFinalizados />} />
          {/* categorias */}
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' >
            <Route index element={<Cadastro />} />
            <Route path=':email' element={<CriarConta />} />
          </Route>
          <Route path='/finalizarcompra' element={<Compra />} />
          <Route path='/comprafinalizada' element={<CompraRealizada />} />
        </Routes>
        <Footer />

      </div>
    </AuthContext.Provider>
  );
}

export default App;
