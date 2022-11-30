import estilo from './styles.module.scss'

export default function Produtos() {

    return (
        <div className={estilo.container}>
            <div className={estilo.conteudo}>
                <div>
                    Resultados para "Tenis" - "" Produtos
                </div>
                <div>
                    <label>Ordenar por: </label> 
                    <select name="Ordenar porL:" id="">
                        <option value="">Mais relevantes</option>
                        <option value="">Mais relevantes</option>
                        <option value="">Mais relevantes</option>
                        <option value="">Mais relevantes</option>
                    </select>
                </div>
            </div>
        </div>
    )
}