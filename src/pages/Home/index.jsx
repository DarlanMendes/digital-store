import { mock } from "../../mockup/server.js";
import Banner from "../../components/Banner/";
import ProdutosHome from "../../components/ProdutosHome";
import OfertaEspecial from "../../components/OfertaEspecial/index.jsx";
import styles from "./styles.module.scss";
import CardDestaques from "../../components/CardDestaques/index.jsx";
import BannerHome from "../../components/BannerHome"
import { useContext } from "react";
import { AuthContext } from "../../App.js";
export default function Home() {
	let mockup = mock;
	
	const usuario = useContext(AuthContext)
	console.log(usuario.currentUser)
	return (
		<div className={styles.homeContainer}>
			<BannerHome/>
			{/* <Banner /> */}
			<CardDestaques />
			<ProdutosHome />
			<OfertaEspecial />
		</div>
	);
}
