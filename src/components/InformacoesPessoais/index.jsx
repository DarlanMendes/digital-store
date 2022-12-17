import styles from "./styles.module.scss"
import { useState } from "react"
export default function InformacoesPessoais() {
    const[infoPessoal,setInfoPessoal]=useState(
        [{titulo:"Nome Completo *", placeholder:"Insira seu nome" ,valor:''},
        {titulo:"CPF *", placeholder:"Insira seu cpf" ,valor:''},
        {titulo:"E-mail *", placeholder:"Insira seu email" ,valor:''},
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
                        <input placeholder={input.placeholder}/>
                    </div>
                ))}
        </div>)
}