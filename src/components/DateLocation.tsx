import { motion } from "framer-motion";
import { weddingData } from "../data/wedding";
import "./DateLocation.css";

export function DateLocation() {
	const bgUrl = weddingData.venuePhotoUrl;

	return (
		<section className="date-location-section">
			{bgUrl ? (
				<div
					className="location-hero-bg"
					style={{ backgroundImage: `url(${bgUrl})` }}
					role="img"
					aria-label={weddingData.venue}
				/>
			) : (
				<div className="location-hero-bg location-hero-bg_fallback" aria-hidden />
			)}
			<div className="location-hero-scrim" aria-hidden />
			<motion.div
				className="location-hero-content"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.65, ease: "easeOut" }}
			>
				<h2 className="location-title">Ýerleşýän ýeri</h2>
				<p className="location-desc">
					Toý dabaramyz «{weddingData.venue}»da geçiriler.
				</p>
				{weddingData.mapUrl && (
					<a
						href={weddingData.mapUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="location-btn"
					>
						Kartada görüň
					</a>
				)}
			</motion.div>
		</section>
	);
}
