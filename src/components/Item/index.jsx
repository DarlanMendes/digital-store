import estilo from "./styles.module.scss"
import tenis from "../../assets/images/tenis-prod-adic.png"

export default function Item(){
    return (
        <div className={estilo.list2group2}>
                    <div className={estilo.itemsellgroup1}>
                        <div className={estilo.itemimglist}><img src={tenis} className={estilo.itemimg} /></div>
                        <div>
                            <p className={estilo.itemsubtitle}>Pedido nº 2234981932</p>
                            <p className={estilo.itemtitle}>Tênis Nike Revolution 6 Next Nature Masculino</p>
                        </div>

                    </div>
                    <div className={estilo.statuslist2}>
                        <p className={estilo.statusdinamic}>STATUS</p>
                        <p >Finalizado</p></div>

                </div>
    )
}