import Destaques from "../Destaques/index.jsx";

import styles from "./styles.module.scss";

import tshirt from "../assets/t-shit.png";

import calça from "../assets/calça.svg";
import fone from "../assets/fone.svg";
import camiseta from "../assets/camiseta.svg";
import tenis from "../assets/Tenis.svg";

export default function CardDestaques() {
	return (
		<>
			<div className={styles.title}>
				<h3>Coleções em destaque</h3>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.cards}>
					<Destaques productImage={`url(${tshirt} )`} />
					<Destaques productImage={`url(${tshirt} )`} />
					<Destaques productImage={`url(${tshirt} )`} />
				</div>
				<div className={styles.subTitle}>
					<h3>Coleções em destaque</h3>
				</div>

				<div className={styles.icones}>
					<div className={styles.iconeItem}>
						<img src={camiseta} alt="camiseta" />
						<p>Camisetas</p>
					</div>
					<div className={styles.iconeItem}>
						<img
							src={calça}
							alt="calça"
							style={{ width: "50px", height: "64px" }}
						/>
						<p>Calças</p>
					</div>
					<div className={styles.iconeItem}>
						<img src={fone} alt="fone" />
						<p>Headphones</p>
					</div>
					<div className={styles.iconeItem}>
						<img src={tenis} alt="tenis" />
						<p>Tenis</p>
					</div>
				</div>
			</div>
		</>
	);
}
