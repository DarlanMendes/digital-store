import { useState } from 'react';
import styles from './styles.module.scss'
import { useEffect } from 'react';
export default function InformacoesEntrega(props) {
    const [infoEntrega, setInfoEntrega] = useState(
        [{ titulo: "Endereço *", placeholder: "Insira seu endereço", valor: '' },
        { titulo: "Bairro *", placeholder: "Insira seu bairro", valor: '' },
        { titulo: "Cidade *", placeholder: "Insira seu cidade", valor: '' },
        { titulo: "CEP *", placeholder: "Insira seu cep", valor: '' },
        { titulo: "Complemento *", placeholder: "Insira seu complemento", valor: '' },
        ]
    )

     useEffect(()=>{
       props.setContaEntrega(
        {endereco:infoEntrega[0].valor,
            bairro:infoEntrega[1].valor,
            cidade:infoEntrega[2].valor,
            cep:infoEntrega[3].valor,
            complemento:infoEntrega[4].valor
        }
       )
        
    },[infoEntrega])
    return (
        <div className={styles.infoEntregaContainer}>
            <h1>Informações de Entrega</h1>
            <hr />
            {infoEntrega && infoEntrega.map((input, index) => (
                <div key={index} className={styles.infoEntregaInput}>
                    <h2>{input.titulo}</h2>
                     
                    <input placeholder={input.placeholder} onChange={(e)=>{
                            setInfoEntrega(
                               infoEntrega.map((info)=>
                               info===input?{...info,valor:e.target.value}:{...info}
                               )
                            )
                            }}/>
                
                </div>
            ))}
        </div>)

}