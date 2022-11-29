import Botao from "../Botao";
import DestaqueDesconto from "../DestaqueDesconto";

import styles from "./styles.module.scss";

export default function CardDestaques(props) {
	return (
		<div
			className={styles.CardContainer}
			style={{
				backgroundImage: props.productImage,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "right bottom",
			}}
		>
			<div>
				<DestaqueDesconto texto={"30% OFF"} />
				<h3 className={styles.cardTitle}>Novo drop Supreme</h3>
				<Botao texto={"Compra"} cor={"#f5f5f5"} largura={"114px"} />
			</div>
		</div>
	);
}
