import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useEffect, useState } from "react";
import "./App.css";
import { CouplePhoto } from "./components/CouplePhoto";
import { InvitationContent } from "./components/InvitationContent";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 2400);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (loading) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [loading]);

	return (
		<div className="app">
			<Analytics />
			<SpeedInsights route="/" />
			<CouplePhoto />
			<InvitationContent />
		</div>
	);
}

export default App;
