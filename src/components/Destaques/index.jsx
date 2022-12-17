import Botao from "../Botao";
import DestaqueDesconto from "../DestaqueDesconto";

import styles from "./styles.module.scss";
import tshirt from "../assets/t-shit.png";

export default function CardDestaques(props) {
	return (
		<div className="wrapper">
			<div
				className={styles.CardContainer}
				style={{
					backgroundImage: `url(${tshirt} )`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "right bottom",
				}}
			>
				<DestaqueDesconto texto={"30% OFF"} />
				<h3 className={styles.cardTitle}>Novo drop Supreme</h3>
				<Botao
					texto={"Compra"}
					corFundo={"#f5f5f5"}
					cor={"#c92071"}
					largura={"114px"}
				/>
			</div>
		</div>
	);
}
