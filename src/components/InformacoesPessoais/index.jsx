import styles from "./styles.module.scss"
import { useState } from "react"
import { useParams } from 'react-router-dom';

export default function InformacoesPessoais() {
    const [params,setParams] = useState(useParams());
    console.log(params)
    const[infoPessoal,setInfoPessoal]=useState(
        [{titulo:"Nome Completo *", placeholder:"Insira seu nome" ,valor:''},
        {titulo:"CPF *", placeholder:"Insira seu cpf" ,valor:''},
        {titulo:"E-mail *", placeholder:"Insira seu email" ,valor:params.email},
        {titulo:"Celular *", placeholder:"Insira seu celular" ,valor:''},
        ]
    )
    
   
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