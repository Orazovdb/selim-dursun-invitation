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
	venue: "Toy mekany uly zal",
	venueAddress: "Toy mekany uly zal",
	/** Фото ресторана (URL или путь в public/) */
	venuePhotoUrl: "/restaurant.jpeg",
	/** Ссылка на карту (Google Maps и т.д.) */
	mapUrl:
		"https://www.google.com/maps/place/%D0%A2%D0%A0%D0%A6+%C2%AB%D0%91%D0%B0%D0%B3%D1%82%D1%8B%D1%8F%D1%80%D0%BB%D1%8B%D0%BA%C2%BB/@37.9170848,58.3657585,874m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3f70020b1b15c45f:0x41bd73daa974168!8m2!3d37.9170806!4d58.3683334!16s%2Fg%2F11cn17v7m2?entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D",
	/** Важные даты (отсортированы по дате) */
	events: [
		{
			date: "2026-04-01",
			time: "18:00",
			title: "Zat geçdi",
			place: "Sowetski köçe Çarwadar restoran"
		},
		{
			date: "2026-09-01",
			time: "12:00",
			title: "Huday yoly",
			place: "Moskowskiý köçe Sony dom"
		},
		{
			date: "2026-09-02",
			time: "18:00",
			title: "Toý",
			place: "Toy mekany uly zal"
		}
	],
	schedule: [
		{
			time: "18:00",
			title: "Myhmanlaryň gelmegi",
			description: "Myhmanlary garşylamak, welcome içgiler"
		},
		{
			time: "19:00",
			title: "Banket başlanyar",
			description: "Toy mekany uly zalda resmi akşam"
		},
		{
			time: "21:00",
			title: "Gijäniň iň şekeri sany",
			description: "Toý torty we arzuwlar"
		},
		{
			time: "22:00",
			title: "Ýalkynly tamamlanma",
			description: "Tanslar we oýunlar"
		},
		{
			time: "23:00",
			title: "Gijäniň soňy",
			description: "Myhmanlar bilen hoşlaşmak"
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
	/** Контакты для связи (имя и номер) */
	contactList: [
		{ name: "Mähri", phone: "+99364560000" },
		{ name: "Dursun", phone: "+9965259988" },
		{ name: "Enejan", phone: "+9961546666" }
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
