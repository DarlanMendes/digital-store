import Destaques from "../Destaques/index.jsx";

import styles from "./styles.module.scss";

import tshirt from "../assets/t-shit.png";

export default function CardDestaques() {
	return (
		<div className={styles.cards}>
			<Destaques productImage={`url(${tshirt} )`} />
			<Destaques productImage={`url(${tshirt} )`} />
			<Destaques productImage={`url(${tshirt} )`} />
		</div>
	);
}
