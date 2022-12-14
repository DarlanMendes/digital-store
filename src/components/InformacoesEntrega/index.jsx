import { useState } from 'react';
import styles from './styles.module.scss'
export default function InformacoesEntrega() {
    const [infoPessoal, setInfoPessoal] = useState(
        [{ titulo: "Endereço *", placeholder: "Insira seu endereço", valor: '' },
        { titulo: "Bairro *", placeholder: "Insira seu bairro", valor: '' },
        { titulo: "Cidade *", placeholder: "Insira seu cidade", valor: '' },
        { titulo: "CEP *", placeholder: "Insira seu cep", valor: '' },
        { titulo: "Complemento *", placeholder: "Insira seu complemento", valor: '' },
        ]
    )
    return (
        <div className={styles.infoEntregaContainer}>
            <h1>Informações de Entrega</h1>
            <hr />
            {infoPessoal && infoPessoal.map((input, index) => (
                <div key={index} className={styles.infoEntregaInput}>
                    <h2>{input.titulo}</h2>
                    <input placeholder={input.placeholder} />
                </div>
            ))}
        </div>)

}