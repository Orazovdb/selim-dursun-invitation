import { motion } from "framer-motion";
import { weddingData } from "../data/wedding";
import "./DateLocation.css";

export function DateLocation() {
	return (
		<section className="date-location-section">
			<motion.div
				className="location-header"
				initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
				whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
				viewport={{ once: true }}
				transition={{ duration: 0.7, ease: "easeOut" }}
			>
				<h2 className="location-title">Ýerleşýän ýeri</h2>
				<p className="location-desc">
					Merasimimiz şu ýerde geçiriler
					<br />
					«{weddingData.venue}»
				</p>
				{weddingData.mapUrl && (
					<a
						href={weddingData.mapUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="location-btn"
					>
						KARTADA
					</a>
				)}
			</motion.div>

			{weddingData.venuePhotoUrl && (
				<motion.div
					className="location-photo"
					initial={{ opacity: 0, scale: 1.12 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
				>
					<img
						src={weddingData.venuePhotoUrl}
						alt={`${weddingData.venue}`}
					/>
				</motion.div>
			)}
		</section>
	);
}
