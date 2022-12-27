
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

function App() {
 
  return (
    <div className={styles}>
      <Header/>
      <HeaderMobile/>
      
      
      <Routes>
        <Route path="/produtos" >
          <Route index element={<Produtos/>}/>
          <Route path=":id" element={<ProdutoSelecionado/>}/>
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/meuspedidos" element={<MeusPedidos />} />
        {/* categorias */}
        <Route path='/' element={<Login />} />
        <Route path='cadastro/' element={<Cadastro />} />
        <Route path='/finalizarcompra' element={<FinalizarCompra />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
