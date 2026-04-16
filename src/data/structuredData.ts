export const LOCAL_BUSINESS_LEGAL_SERVICE_SCHEMA = {
	'@context': 'https://schema.org',
	'@type': ['LegalService', 'LocalBusiness'],
	name: 'Silveira Advocacia Advogados Associados',
	description:
		'Escritório de advocacia em Campo Belo MG com mais de 16 anos de experiência. Direito criminal, cível, família e bancário.',
	url: 'https://silveiraadv.com.br',
	telephone: '+55-35-99848-1800',
	email: 'contato@silveiraadv.com',
	foundingDate: '2008',
	address: {
		'@type': 'PostalAddress',
		streetAddress: 'Rua Dom Pedro I, nº 139, Centro',
		addressLocality: 'Campo Belo',
		addressRegion: 'MG',
		addressCountry: 'BR',
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: -20.8989,
		longitude: -45.2761,
	},
	openingHoursSpecification: {
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		opens: '08:00',
		closes: '18:00',
	},
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: '5',
		reviewCount: '31',
	},
	areaServed: 'Brasil',
	priceRange: '$$',
} as const;