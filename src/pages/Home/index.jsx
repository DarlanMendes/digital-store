import { mock } from "../../mockup/server.js";
import Banner from "../../components/Banner/";
import Destaques from "../../components/Destaques/";
import ProdutosHome from "../../components/ProdutosHome";
import OfertaEspecial from "../../components/OfertaEspecial/index.jsx";
import styles from "./styles.module.scss";

export default function Home() {
	let mockup = mock;
	console.log(mockup);

	return (
		<div className={styles.homeContainer}>
			<Banner />
			<Destaques />
			<ProdutosHome />
			<OfertaEspecial />
		</div>
	);
}
