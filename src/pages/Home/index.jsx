import { mock } from "../../mockup/server.js";
import Banner from "../../components/Banner/";
import ProdutosHome from "../../components/ProdutosHome";
import OfertaEspecial from "../../components/OfertaEspecial/index.jsx";
import styles from "./styles.module.scss";
import CardDestaques from "../../components/CardDestaques/index.jsx";

export default function Home() {
	let mockup = mock;
	console.log(mockup);

	return (
		<div className={styles.homeContainer}>
			<Banner />
			<CardDestaques />
			<ProdutosHome />
			<OfertaEspecial />
		</div>
	);
}
