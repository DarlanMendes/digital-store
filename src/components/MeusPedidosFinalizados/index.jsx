import estilo from "./styles.module.scss"
import Item from "../../components/Item"
import MinhasInformacoes from "../MinhasInformacoes"
import {useState} from 'react'
export default function MeusPedidosFinalizados() {
    const[opcaoSelecionada,setOpcaoSelecionada]= useState('pedidos')
    return (
        <div className={estilo.meusPedidosFinalizadosContainer}>
            <div className={estilo.containermaster}>

                <div className={estilo.subgrup1}>

                    <div className={estilo.listgroup1}><p className={estilo.textgroup1}>Meu Perfil</p></div>
                    <hr />
                    <div className={estilo.listgroup1}><p className={estilo.textgroup1} onClick={()=>{setOpcaoSelecionada('pedidos')}} 
                    style={opcaoSelecionada&&opcaoSelecionada==='pedidos'?{color:'#C92071'}:{}}>Meu Pedidos</p></div>
                    <hr />
                    <div className={estilo.listgroup1}><p className={estilo.textgroup1} onClick={()=>{setOpcaoSelecionada('informacoes')}} 
                     style={opcaoSelecionada&&opcaoSelecionada==='informacoes'?{color:'#C92071'}:{}}>Minhas Informações</p></div>
                    <hr />
                    <div className={estilo.listgroup1}><p className={estilo.textgroup1}>Métodos de Pagamentos</p></div>

                </div>
                {opcaoSelecionada==='pedidos'&&
                <div className={estilo.subgrup2}>

                    <div className={estilo.list1group2}><p className={estilo.textgroup1}>Meus Pedidos</p><p className={estilo.statuslist1}>STATUS</p></div>
                    <hr />
                    <Item />
                    <hr />
                    <Item />
                    <hr />
                    <Item />
                    <hr />
                    <Item />
                    <hr />
                    <Item />


                </div>}
                {opcaoSelecionada==='informacoes'&&
                <MinhasInformacoes/>}

            </div>
        </div>
    )
}

