import tshirt from "../assets/t-shit.png";

import styles from "./styles.module.scss";

export default function Destaques() {
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<div className={styles.leftSide}>
					<span className={styles.cardDiscount}>
						<p>30% OFF</p>
					</span>
					<h3 className={styles.cardTitle}>Novo drop Supreme</h3>
					<button>Comprar</button>
				</div>
				<div className="rightSide">
					<img src={tshirt} alt="camiseta" />
				</div>
			</div>
		</div>
	);
}
