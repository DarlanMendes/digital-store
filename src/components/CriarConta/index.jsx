import styles from './styles.module.scss';
import InformacoesPessoais from '../InformacoesPessoais';
import InformacoesEntrega from '../InformacoesEntrega';
import Botao from '../Botao';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import {AuthContext} from '../../App'
export default function CriarConta() {

    const[contaInfo, setContaInfo]=useState({nome:"",cpf:"",email:"",celular:""})
    const[contaEntrega,setContaEntrega]=useState({endereco:"",bairro:"",cidade:"",cep:"",complemento:""})
    const[concorda,setConcorda]=useState(false);

    let navigate= useNavigate()

    const usuario = useContext(AuthContext)


    function handleCadastro(){
       for(let propriedade in contaInfo){
        if(contaInfo[propriedade]===''){
            return alert('Todos os campos devem ser preenchidos')
        }
       }
       for(let propriedade in contaEntrega){
        if(contaEntrega[propriedade]===''){
            return alert('Todos os campos devem ser preenchidos')
        }
       }
        if(concorda){
            let cadastro = {
                infoPessoal: contaInfo,
                infoEntrega: contaEntrega
            }
            usuario.setCurrentUser({nome:contaInfo.nome, email:contaInfo.email})
            navigate('/')
        }else{
            alert("Para continuar, aceite os nossos termos")
        }
      
        
    }

    return (
        <div className={styles.cadastroContainer}>
            <h1 className={styles.tituloContainer}>Criar Conta</h1>
            <InformacoesPessoais contaInfo={contaInfo} setContaInfo={setContaInfo}/>
            <InformacoesEntrega contaEntrega={contaEntrega} setContaEntrega={setContaEntrega} />
            <div className={styles.checkContainer}>
                <label>
                    <input type="checkbox" className={styles.check} onChange={()=>{setConcorda(!concorda)}}/>
                    <span>Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a intenção do cliente.</span>
                </label>
            </div>
            <div className={styles.Botao} onClick={()=>{handleCadastro()}}>
                <Botao texto={"Criar Conta"} largura={"100%"} corFundo={"#C92071"} altura={"48px"} />
            </div>
            

        </div>
    )
}