/** Путь к аудио в public/. Положите файл "I Think They Call This Love" как i-think-they-call-this-love.mp3 */
export const weddingData = {
	musicUrl: "/perfect.mp3",
	/** Фото пары на первом экране (при клике открывается приглашение). Путь от корня сайта для совместимости с мессенджерами и PWA. */
	couplePhotoUrl: "/rh.jpeg",
	groomName: "Selim",
	brideName: "Dursun",
	/** Телефоны для связи */
	groomPhone: "",
	bridePhone: "",
	/** Логотип в блоке контактов (путь в public/) */
	logoUrl: "/logo-red.png",
	/** Доп. контакт (организатор и т.д.) */
	organizerPhone: "+99362090252",
	organizerPhone2: "+99361484840",
	organizerLabel: "Siziň sargydyňyz — biziň jogapkärçiligimiz!",
	/** Ссылка на Instagram */
	instagramUrl: "https://www.instagram.com/invitationsred",
	instagramLabel: "Instagram",
	weddingDate: new Date("2026-09-02T18:00:00"),
	venue: "Toý mekany uly zal",
	venueAddress: "Toý mekany uly zal",
	/** Фото ресторана (URL или путь в public/) */
	venuePhotoUrl: "/restaurant.png",
	/** Ссылка на карту (Google Maps и т.д.) */
	mapUrl: "https://maps.app.goo.gl/MezDdVvUTMbs6Ddt7",
	/** Важные даты (отсортированы по дате) */
	events: [
		{
			date: "2026-04-01",
			time: "18:00",
			title: "Zat geçdi",
			place: "Garaşsyzlyk şaýoly, 108 (Sowetskiý köçesi), Çarwadar restorany"
		},
		{
			date: "2026-09-01",
			time: "12:00",
			title: "Hudaý ýoly",
			place: "Moskowskiý köçe Sony dom"
		},
		{
			date: "2026-09-02",
			time: "18:00",
			title: "Toý",
			place: "Türkmenbaşy şaýoly, Toý mekany uly zal"
		}
	],
	schedule: [
		{
			time: "18:00",
			title: "Myhmanlary garşylamak",
			description: "Myhmanlaryň ýygnanmagy"
		},
		{
			time: "18:30",
			title: "Toýyň açylşy",
			description: "Alkyş sözleri, ýaşlara ak pata"
		},
		{
			time: "19:00",
			title: "Agşamlyk nahary",
			description: ""
		},
		{
			time: "19:30",
			title: "Ýaşlary garşylamak",
			description: ""
		},
		{
			time: "20:30",
			title: "Gutlaglar",
			description: ""
		},
		{
			time: "21:00",
			title: "Konkurslar",
			description: "Gyzykly oýunlar, ýeňijilere sowgatlar gowşurylar"
		},
		{
			time: "21:30",
			title: "Tort kesmek we aýdym saz",
			description: ""
		},
		{
			time: "23:00",
			title: "Toýuň jemlenişi",
			description: ""
		}
	],
	dresscode: {
		description:
			"Merasimimiziň stilini goldasaňyz, biziň üçin uly şatlyk bolar",
		maleLabel: "Erkek üçin",
		maleHint: "Klassik kostýum",
		femaleLabel: "Aýal üçin",
		femaleHint: "Aksamlyk koýnek",
		paletteLabel: "Maslahat berilýän reňkler",
		palette: ["#1a1a1a", "#2c3e50", "#5b2333", "#8a7e6b", "#c4b39a", "#d4c5b0"],
		note: "Aýdyň reňk gelin üçin saklandy — oňa ýüz tutmaňy haýyş edýäris"
	},
	/** Aýdym saz — tüýe gelýän aýdymçylar (adlary wedding.ts-da üýtgediň) */
	guestSingersTitle: "Toýuň bagşylary",
	guestSingers: [
		{ name: "Esasy bagşy Mekan Ataýyew", note: "" },
		{ name: "Dz-Ed Bk media show", note: "" },
		{ name: "Lucas", note: "" }
	],
	/** Контакты для связи (имя и номер) */
	contactList: [
		{ name: "Selim", phone: "+99362320000" },
		{ name: "Dursun", phone: "+9965259988" },
		{ name: "Mähri", phone: "+99364560000" },
		{ name: "Merdan", phone: "+99363920000" },
		{ name: "Eneş", phone: "+99365618208" },
		{ name: "Enejan", phone: "+99361546666" }
	],
	photos: [
		"https://picsum.photos/400/500?random=11",
		"https://picsum.photos/400/500?random=22",
		"https://picsum.photos/400/500?random=33",
		"https://picsum.photos/400/500?random=44",
		"https://picsum.photos/400/500?random=55",
		"https://picsum.photos/400/500?random=66"
	]
} as const;
