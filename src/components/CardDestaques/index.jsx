import styles from "./styles.module.scss";

import Botao from "../Botao";
import DestaqueDesconto from "../DestaqueDesconto";

import tshirt from "../../assets/images/t-shit.png";
import tenis1 from "../../assets/images/tenisImg2.png";
import phone from "../../assets/images/phoneImg.png";

import calça from "../../assets/images/calcaImg.png";
import fone from "../../assets/images/headphoneImg.png";
import camiseta from "../../assets/images/camisetaImg.png";
import tenis from "../../assets/images/tenisImg.png";

export default function CardDestaques() {
	return (
		<>
			<div className={styles.title}>
				<h3>Coleções em destaque</h3>
			</div>
			<div className={styles.wrapper}>
				<div
					className={styles.CardContainer}
					style={{
						backgroundImage: `url(${tshirt})`,
						backgroundRepeat: "no-repeat",
						backgroundPosition: "right bottom",
					}}
				>
					<DestaqueDesconto texto={"30% OFF"} />
					<h3 className={styles.cardTitle}>Novo drop Supreme</h3>
					<Botao
						texto={"Comprar"}
						corFundo={"#f5f5f5"}
						cor={"#c92071"}
						largura={"114px"}
						altura={"48px"}
					/>
				</div>
				<div
					className={styles.CardContainer}
					style={{
						backgroundImage: `url(${tenis1})`,
						backgroundRepeat: "no-repeat",
						backgroundPosition: "right bottom",
					}}
				>
					<DestaqueDesconto texto={"30% OFF"} />
					<h3 className={styles.cardTitle}>Novo drop Supreme</h3>
					<Botao
						texto={"Comprar"}
						corFundo={"#f5f5f5"}
						cor={"#c92071"}
						largura={"114px"}
						altura={"48px"}
					/>
				</div>
				<div
					className={styles.CardContainer}
					style={{
						backgroundImage: `url(${phone})`,
						backgroundRepeat: "no-repeat",
						backgroundPosition: "right bottom",
					}}
				>
					<DestaqueDesconto texto={"30% OFF"} />
					<h3 className={styles.cardTitle}>Novo drop Supreme</h3>
					<Botao
						texto={"Comprar"}
						corFundo={"#f5f5f5"}
						cor={"#c92071"}
						largura={"114px"}
						altura={"48px"}
					/>
				</div>
			</div>

			<div className={styles.iconWrapper}>
			
				<div className={styles.subTitle}>
					<h3>Coleções em destaque</h3>
				</div>

				<div className={styles.icones}>
					<div className={styles.iconeItem}>
						<img src={camiseta} alt="camiseta" />
						<span>Camisetas</span>
					</div>
					<div className={styles.iconeItem}>
						<img src={calça} alt="calça" />
						<span>Calças</span>
					</div>
					<div className={styles.iconeItem}>
						<img src={fone} alt="fone" />
						<span>Headphones</span>
					</div>
					<div className={styles.iconeItem}>
						<img src={tenis} alt="tenis" />
						<span>Tenis</span>
					</div>
				</div>
			</div>
		</>
	);
}
