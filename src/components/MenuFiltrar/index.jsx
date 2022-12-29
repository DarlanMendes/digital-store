import estilo from './styles.module.scss'

export default function Produtos() {

    return (
        <div className={estilo.container}>
            <div className={estilo.colunaCheckbox}>
                <h5 className={estilo.titulo}>Filtrar Por</h5>
                <hr></hr>
                <h5 className={estilo.subtitulos}>Marka</h5>
                <div>
                    <input type="checkbox" />
                    <label htmlFor="">Adiddas</label> 
                </div>
                <div>
                    <input type="checkbox" />Calenciaga
                </div>
                <div>
                    <input type="checkbox" />K-Swiss
                </div>
                <div>
                    <input type="checkbox" />Nike
                </div>
                <div>
                    <input type="checkbox" />Pulma
                </div>
                <h5 className={estilo.subtitulos}>Categoria</h5>
                <div>
                    <input type="checkbox" />Esporte e lazer
                </div>
                <div>
                    <input type="checkbox" />Casual
                </div>
                <div>
                    <input type="checkbox" />Utilitário
                </div>
                <div>
                    <input type="checkbox" />Corrida
                </div>
                <h5 className={estilo.subtitulos}>Genero</h5>
                <div>
                    <input type="checkbox" />Masculino
                </div>
                <div>
                    <input type="checkbox" />Feminino
                </div>
                <div>
                    <input type="checkbox" />Unisex
                </div>
                <h5 className={estilo.subtitulos}>Estado</h5>
                <div >
                    <input type="checkbox" style={{ border: "1px solid black" }} />Novo
                </div>
                <div>
                    <input type="checkbox" />Usado
                </div>
            </div>
        </div>
    )
}