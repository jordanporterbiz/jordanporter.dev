import "../../styles/globals.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="max-w-7xl mx-auto">
				<Header />
				<Banner />
				{children}
				<Footer />
			</body>
		</html>
	);
}
