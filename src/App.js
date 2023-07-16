import React, {
	useState,
	useEffect,
} from "react";
import "./style/main.css";
import { GiShoppingBag } from "react-icons/gi";
import RatingStars from "./components/RatingStars";
import ShoppingCart from "./components/ShoppingCart";

const products = [
	{
		id: 1,
		name: "ADIDAS RUNNING Sepatu Supernova 2.0 Wanita Hitam HR0103 - UK : 4.5",
		rating: 5,
		description:
			"Pakai sepatu running adidas ini dan buat jalan menuju pertandingan pertamamu menjadi lebih mulus.",
		price: 1900000,
		image: require("./assets/images/sepatu1.jpg"),
	},
	{
		id: 2,
		name: "ADIDAS RUNNING X_PLRBOOST Shoes Wanita Pink ID9439 - UK : 5",
		rating: 4.2,
		description:
			"The 3-Stripes on the upper may be subtle, but there's no mistaking the adidas performance tech.",
		price: 2500000,
		image: require("./assets/images/sepatu2.jpg"),
	},
	{
		id: 3,
		name: "ADIDAS FOOTBALL Sepatu Bola X Speedportal Messi.3 Unisex Oranye GZ5146 - UK : 6",
		rating: 5,
		description:
			"Pikiran. Tubuh. Sepatu. Terhubung dalam sekejap mata. Pakai adidas X Speedportal untuk memaksimalkan kecepatan dalam segala dimensi.",
		price: 1020000,
		image: require("./assets/images/sepatu3.jpg"),
	},
	{
		id: 4,
		name: "ADIDAS RUNNING X_PLRBOOST Shoes Wanita Putih ID9441 - UK : 5",
		rating: 4.9,
		description:
			"Up the style. Up the energy. These BOOST sneakers are sporty and stylish. The soft upper is lined for comfort. It sits atop a BOOST midsole that gives you ultimate comfort with each step.",
		price: 2500000,
		image: require("./assets/images/sepatu4.jpg"),
	},
	{
		id: 5,
		name: "ADIDAS TRAINING T-Shirt Training HIIT Designed 4 Tra Pria HIjau IB9099 - US : A/S",
		rating: 4.5,
		description:
			"Cahaya menerangi. Musik berdentum. Kamu siap melakukan HIIT secara maksimal kapan pun kamu memakai t-shirt ini.",
		price: 712500,
		image: require("./assets/images/baju1.jpg"),
	},
	{
		id: 6,
		name: "ADIDAS RUNNING T-Shirt Run It Pria Biru IC7631 - US : A/L",
		rating: 3.8,
		description:
			"Tantangan. Menjernihkan pikiran. Energi. Apa pun alasanmu turun ke jalanan, t-shirt lari adidas ini membuatmu tetap nyaman saat berlari.",
		price: 500000,
		image: require("./assets/images/baju2.jpg"),
	},
	{
		id: 7,
		name: "ADIDAS RUNNING T-Shirt Own the Run Wanita Coral IC5196 - US : A/L",
		rating: 3.8,
		description:
			"T-shirt lari adidas ini didesain untuk menjadi andalan dalam sesi lari jarak pendek maupun jarak jauh. Kain breathable dibuat dengan AEROREADY untuk menyerap kelembapan dan membuatmu tetap kering.",
		price: 550000,
		image: require("./assets/images/baju3.jpg"),
	},
	{
		id: 8,
		name: "ADIDAS TRAINING T-Shirt Workout PU Print Pria Abu-abu IC2109 - US : A/M",
		rating: 3.8,
		description:
			"Dengan latihan quad, superman, dan swimmer, kamu memang aktif berolahraga, dan t-shirt olahragamu mulai terlihat usang.",
		price: 650000,
		image: require("./assets/images/baju4.jpg"),
	},
	{
		id: 9,
		name: "ADIDAS Celana Pendek Terrex Agravic Pria Hitam HA7543 - US : XS 5",
		rating: 5.0,
		description:
			"Berlari jauh. Berlari kencang. Eksplorasi rute baru dan temukan tujuan epik dengan Celana Pendek Terrex Agravic dari adidas.",
		price: 770000,
		image: require("./assets/images/celana1.jpg"),
	},
	{
		id: 10,
		name: "ADIDAS TRAINING Celana Pendek Train Icons 7'' Pria Hitam HS7516 - US : AXS7",
		rating: 5.0,
		description:
			"Celana pendek adidas ini akan membalutmu dalam kenyamanan untuk latihan kardio atau melatih kaki, sehingga kamu dapat memaksimalkan potensi.",
		price: 712500,
		image: require("./assets/images/celana2.jpg"),
	},
	{
		id: 11,
		name: "ADIDAS FOOTBALL Celana Pendek Tiro 23 League Pria Hitam HT6129 - US : L",
		rating: 5.0,
		description:
			"Lahir untuk permainan yang indah. Celana pendek adidas Tiro 23 League ini mengombinasikan kain lembut dan elastis serta AEROREADY yang menyerap kelembapan.",
		price: 400000,
		image: require("./assets/images/celana3.jpg"),
	},
	{
		id: 12,
		name: "ADIDAS RUNNING Celana Pendek Run It Pria Hitam H59883 - US : S 5",
		rating: 5.0,
		description:
			"Lari adalah salah satu jalur tercepat menuju suasana hati yang lebih baik. Pakai celana pendek adidas ini, dan bergegas keluar. Kain tenun yang ringan terasa lembut di kulit.",
		price: 500000,
		image: require("./assets/images/celana4.jpg"),
	},
];

function App() {
	const [cartsVisibilty, setCartVisible] =
		useState(false);
	const [productsInCart, setProducts] =
		useState(
			JSON.parse(
				localStorage.getItem(
					"shopping-cart"
				)
			) || []
		);
	useEffect(() => {
		localStorage.setItem(
			"shopping-cart",
			JSON.stringify(productsInCart)
		);
	}, [productsInCart]);
	const addProductToCart = (product) => {
		const newProduct = {
			...product,
			count: 1,
		};
		setProducts([
			...productsInCart,
			newProduct,
		]);
	};

	const onQuantityChange = (
		productId,
		count
	) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === productId
				);
			if (productsIndex !== -1) {
				oldState[productsIndex].count =
					count;
			}
			return [...oldState];
		});
	};

	const onProductRemove = (product) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === product.id
				);
			if (productsIndex !== -1) {
				oldState.splice(productsIndex, 1);
			}
			return [...oldState];
		});
	};

	return (
		<div className="App">
			<ShoppingCart
				visibilty={cartsVisibilty}
				products={productsInCart}
				onClose={() =>
					setCartVisible(false)
				}
				onQuantityChange={
					onQuantityChange
				}
				onProductRemove={onProductRemove}
			/>
			<div className="navbar">
				<h3 className="logo">Sports shop</h3>
				<button
					className="btn shopping-cart-btn"
					onClick={() =>
						setCartVisible(true)
					}>
					<GiShoppingBag size={24} />
					{productsInCart.length >
						0 && (
						<span className="product-count">
							{
								productsInCart.length
							}
						</span>
					)}
				</button>
			</div>
			<main>
				<h2 className="title">
					Products
				</h2>
				<div className="products">
					{products.map((product) => (
						<div
							className="product"
							key={product.id}>
							<img
								className="product-image"
								src={
									product.image
								}
								alt={
									product.image
								}
							/>
							<h4 className="product-name">
								{product.name}
							</h4>
							<RatingStars
								rating={
									product.rating
								}
							/>
							<p>
								{
									product.description
								}
							</p>
							<span className="product-price">
								{product.price}$
							</span>
							<div className="buttons">
								<button className="btn">
									Detail
								</button>
								<button
									className="btn"
									onClick={() =>
										addProductToCart(
											product
										)
									}>
									Add to cart
								</button>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}

export default App;
