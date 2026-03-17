import { motion } from "framer-motion";
import "./Calendar.css";

const WEEKDAYS = ["Du", "Si", "Ça", "Pe", "An", "Şe", "Ýe"];
const MONTHS_TM = [
	"Ýanwar", "Fewral", "Mart", "Aprel", "Maý", "Iýun",
	"Iýul", "Awgust", "Sentýabr", "Oktýabr", "Noýabr", "Dekabr",
];

interface CalendarProps {
	/** Дата для отображения месяца */
	date: Date;
	/** День месяца для подсветки (день свадьбы) */
	highlightDay?: number;
}

export function Calendar({ date, highlightDay }: CalendarProps) {
	const year = date.getFullYear();
	const month = date.getMonth();
	const firstDay = new Date(year, month, 1);
	const lastDay = new Date(year, month + 1, 0);
	const startWeekday = firstDay.getDay();
	const daysInMonth = lastDay.getDate();
	const offset = startWeekday === 0 ? 6 : startWeekday - 1;

	const cells: (number | null)[] = [];
	for (let i = 0; i < offset; i++) cells.push(null);
	for (let d = 1; d <= daysInMonth; d++) cells.push(d);

	return (
		<motion.div
			className="calendar"
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4, ease: "easeOut" }}
		>
			<div className="calendar-header">
				<span className="calendar-month">{MONTHS_TM[month]}</span>
				<span className="calendar-year">{year}</span>
			</div>
			<div className="calendar-weekdays">
				{WEEKDAYS.map((d) => (
					<span key={d} className="calendar-weekday">
						{d}
					</span>
				))}
			</div>
			<div className="calendar-grid">
				{cells.map((day, i) => (
					<span
						key={i}
						className={`calendar-day ${day === null ? "calendar-day_empty" : ""} ${day === highlightDay ? "calendar-day_highlight" : ""}`}
					>
						{day ?? ""}
					</span>
				))}
			</div>
		</motion.div>
	);
}
