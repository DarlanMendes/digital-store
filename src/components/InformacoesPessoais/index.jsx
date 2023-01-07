import styles from "./styles.module.scss"
import { useState } from "react"
import { useParams } from 'react-router-dom';
import { useEffect } from "react";

export default function InformacoesPessoais(props) {
    const [params,setParams] = useState(useParams());
    
    const[infoPessoal,setInfoPessoal]=useState(
        [{titulo:"Nome Completo *", placeholder:"Insira seu nome" ,valor:''},
        {titulo:"CPF *", placeholder:"Insira seu cpf" ,valor:''},
        {titulo:"E-mail *", placeholder:"Insira seu email" ,valor:params.email},
        {titulo:"Celular *", placeholder:"Insira seu celular" ,valor:''},
        ]
    )
    useEffect(()=>{
       props.setContaInfo(
        {nome:infoPessoal[0].valor,
            cpf:infoPessoal[1].valor,
            email:infoPessoal[2].valor,
            celular:infoPessoal[3].valor}
       )
        
    },[infoPessoal])
    
   
    return (
        <div className={styles.infoPessoaisContainer}>
                <h1>Informações Pessoais</h1>
                <hr/>
                {infoPessoal&&infoPessoal.map((input,index)=>(
                    <div key={index} className={styles.infoPessoalInput}>
                        <h2>{input.titulo}</h2>
                        
                        <input placeholder={input.placeholder}  onChange={(e)=>{
                            setInfoPessoal(
                               infoPessoal.map((info)=>
                               info===input?{...info,valor:e.target.value}:{...info}
                               )
                               
                            )
                            
                            }}
                            value={input.valor}
                            
                            />
                    </div>
                ))}
        </div>)
}