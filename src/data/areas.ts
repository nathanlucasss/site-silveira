export type FaqItem = {
	question: string;
	answer: string;
};

export type AreaContent = {
	slug: string;
	name: string;
	h1: string;
	title: string;
	description: string;
	kicker: string;
	intro: string;
	paragraphs: string[];
	faqs: FaqItem[];
	iconClass: string;
};

export const AREA_ENTRIES: AreaContent[] = [
	{
		slug: 'direito-criminal',
		name: 'Direito Criminal',
		h1: 'Advogado de direito criminal em Campo Belo MG',
		title: 'Direito Criminal em Campo Belo MG | Silveira Advocacia',
		description:
			'Advogado criminalista em Campo Belo MG com defesa técnica em flagrante, inquérito e processo penal. Mais de 500 defesas criminais e atendimento imediato.',
		kicker: 'ATUAÇÃO EM DIREITO CRIMINAL',
		intro:
			'Recebemos casos criminais com rapidez, discrição e estratégia desde o primeiro contato. A defesa técnica no momento certo pode proteger sua liberdade, seu patrimônio e sua reputação.',
		paragraphs: [
			'O direito criminal exige atuação imediata e decisões técnicas em prazos muito curtos. Em Campo Belo/MG, nossa equipe atua desde o primeiro momento da ocorrência para garantir que a pessoa investigada ou acusada tenha seus direitos respeitados. Acompanhar depoimentos, analisar provas iniciais e evitar medidas abusivas são etapas fundamentais para construir uma defesa sólida desde a origem do caso. Quanto antes a defesa é estruturada, maiores são as chances de evitar danos irreversíveis.',
			'Na prática, atuamos em flagrantes, inquéritos policiais, pedidos de liberdade, audiências de custódia, resposta à acusação, instrução processual e recursos em instâncias superiores. Também trabalhamos em crimes patrimoniais, crimes contra a vida, crimes de trânsito, crimes relacionados a drogas e situações envolvendo violência doméstica, sempre com atendimento individualizado. Cada processo penal é único, por isso nossa estratégia considera o contexto dos fatos, a prova existente e os objetivos jurídicos mais adequados ao caso.',
			'Para quem busca advogado de direito criminal em Campo Belo MG, a prioridade deve ser contar com acompanhamento constante e comunicação clara sobre riscos e possibilidades. Nosso escritório orienta família e cliente em linguagem objetiva, explica cada etapa e mantém postura combativa quando há ilegalidade. Além da atuação presencial, oferecemos atendimento online para facilitar a tomada de decisão rápida. Se houver urgência, o contato imediato pelo WhatsApp acelera a análise e o início das medidas defensivas.',
		],
		faqs: [
			{
				question: 'Quando devo contratar um advogado criminal?',
				answer:
					'O ideal é contratar o quanto antes, inclusive na fase de investigação. A atuação precoce permite proteger direitos e organizar a defesa com maior eficiência.',
			},
			{
				question: 'A defesa criminal serve apenas para quem está preso?',
				answer:
					'Não. A defesa também é essencial para investigados em liberdade, pessoas intimadas para depor e réus em processo, com foco em reduzir riscos e buscar absolvição.',
			},
			{
				question: 'Vocês atendem casos urgentes fora do horário comercial?',
				answer:
					'Sim. Em ocorrências urgentes, especialmente envolvendo prisão ou audiência de custódia, nossa equipe prioriza atendimento imediato pelo WhatsApp.',
			},
		],
		iconClass: 'fa-solid fa-gavel',
	},
	{
		slug: 'flagrante-delito',
		name: 'Flagrante Delito',
		h1: 'Advogado de flagrante delito em Campo Belo MG',
		title: 'Flagrante Delito em Campo Belo MG | Silveira Advocacia',
		description:
			'Advogado para flagrante delito em Campo Belo MG, com atuação imediata em audiência de custódia, pedidos de liberdade e estratégia criminal 24h para sua defesa.',
		kicker: 'ATUAÇÃO EM FLAGRANTE DELITO',
		intro:
			'Em situações de prisão em flagrante, minutos fazem diferença. Nosso trabalho é agir de forma imediata para proteger garantias legais, acompanhar procedimentos e buscar a melhor solução jurídica no menor tempo possível.',
		paragraphs: [
			'A prisão em flagrante é um dos momentos mais sensíveis do processo penal, porque decisões importantes são tomadas rapidamente e qualquer erro pode gerar prejuízos graves. Ao atuar em flagrante delito em Campo Belo/MG, nossa equipe acompanha a lavratura do auto de prisão, verifica a legalidade dos atos praticados e identifica eventuais nulidades. Essa análise inicial é determinante para direcionar a estratégia de defesa e evitar que irregularidades comprometam o caso desde o início.',
			'Após a prisão, a audiência de custódia é etapa essencial para discutir a manutenção da prisão, a possibilidade de liberdade provisória ou medidas cautelares alternativas. Nessa fase, apresentamos argumentos técnicos sobre ausência de requisitos para prisão preventiva, condições pessoais do custodiado e circunstâncias concretas do fato. Quando necessário, também reunimos documentos e elementos que reforcem a viabilidade de soltura. A atuação rápida e bem fundamentada costuma ser decisiva para o resultado da custódia.',
			'Quem procura advogado de flagrante delito em Campo Belo MG geralmente enfrenta ansiedade e pressão familiar. Por isso, além da defesa jurídica, prestamos orientação clara para familiares sobre procedimentos, prazos e próximos passos. Nosso objetivo é reduzir incertezas e garantir que o cliente tenha defesa efetiva desde o primeiro ato. Com atendimento imediato pelo WhatsApp, iniciamos a triagem rapidamente e orientamos a condução do caso com seriedade e responsabilidade técnica.',
		],
		faqs: [
			{
				question: 'O que fazer imediatamente após uma prisão em flagrante?',
				answer:
					'Acionar um advogado criminal de confiança e evitar qualquer declaração sem orientação técnica. O acompanhamento imediato pode evitar violações de direitos.',
			},
			{
				question: 'A audiência de custódia sempre resulta em liberdade?',
				answer:
					'Não necessariamente. O resultado depende do caso concreto, mas uma defesa técnica aumenta as chances de liberdade provisória ou cautelares menos gravosas.',
			},
			{
				question: 'Familiares podem ajudar na estratégia de defesa?',
				answer:
					'Sim. Informações e documentos fornecidos pelos familiares podem fortalecer pedidos de liberdade e auxiliar na construção da defesa inicial.',
			},
		],
		iconClass: 'fa-solid fa-handcuffs',
	},
	{
		slug: 'direito-civil',
		name: 'Direito Cível',
		h1: 'Advogado de direito cível em Campo Belo MG',
		title: 'Direito Cível em Campo Belo MG | Silveira Advocacia',
		description:
			'Advogado cível em Campo Belo MG para contratos, cobranças, indenizações e obrigações. Atendimento estratégico para resolver conflitos com segurança jurídica.',
		kicker: 'ATUAÇÃO EM DIREITO CÍVEL',
		intro:
			'O direito cível está presente em grande parte dos conflitos do dia a dia. Atuamos com foco em prevenção e solução eficiente, buscando segurança jurídica para pessoas e empresas.',
		paragraphs: [
			'O direito cível abrange uma ampla variedade de temas que impactam diretamente relações pessoais, familiares e empresariais. Em Campo Belo/MG, prestamos assessoria para conflitos contratuais, cobranças indevidas, responsabilidade civil, indenizações por danos materiais e morais, obrigações de fazer e não fazer, entre outros assuntos. Cada demanda exige leitura estratégica dos fatos e da documentação para identificar riscos, oportunidades de acordo e viabilidade de medidas judiciais.',
			'Uma atuação cível eficiente começa com diagnóstico jurídico preciso. Em muitos casos, é possível evitar litígios longos por meio de negociação bem estruturada, notificação extrajudicial e revisão de cláusulas contratuais. Quando o processo judicial é necessário, organizamos a tese com foco em prova documental, cronologia dos fatos e pedidos adequados ao objetivo do cliente. Esse método contribui para decisões mais favoráveis e para maior previsibilidade durante o andamento da ação.',
			'Para quem procura advogado de direito cível em Campo Belo MG, a principal vantagem de um atendimento especializado é ter orientação clara sobre custos, prazos e probabilidade de êxito. Nosso escritório atua com transparência e comunicação contínua, explicando cada etapa e construindo estratégias compatíveis com a realidade do caso. Atendemos presencialmente e online, garantindo agilidade no envio de documentos, acompanhamento processual e tomada de decisão em tempo oportuno.',
		],
		faqs: [
			{
				question: 'Vale a pena tentar acordo antes de entrar com processo?',
				answer:
					'Em muitos casos, sim. A solução extrajudicial pode ser mais rápida e menos custosa, desde que preserve os direitos e interesses do cliente.',
			},
			{
				question: 'Posso pedir indenização por dano moral e material no mesmo processo?',
				answer:
					'Sim, quando houver fundamento jurídico para ambos os pedidos. A análise técnica define a melhor estrutura da ação.',
			},
			{
				question: 'Quanto tempo dura uma ação cível?',
				answer:
					'O prazo varia conforme a complexidade do caso, a produção de provas e a vara responsável. Trabalhamos para reduzir atrasos e acelerar etapas possíveis.',
			},
		],
		iconClass: 'fa-solid fa-file-contract',
	},
	{
		slug: 'direito-bancario',
		name: 'Direito Bancário',
		h1: 'Advogado de direito bancário em Campo Belo MG',
		title: 'Direito Bancário em Campo Belo MG | Silveira Advocacia',
		description:
			'Advogado bancário em Campo Belo MG para revisão contratual, juros abusivos, fraudes e cobranças indevidas. Defesa patrimonial com negociação técnica e ágil.',
		kicker: 'ATUAÇÃO EM DIREITO BANCÁRIO',
		intro:
			'Conflitos com bancos e financeiras podem comprometer renda e patrimônio rapidamente. Atuamos para revisar contratos, corrigir abusos e restabelecer equilíbrio nas relações de crédito.',
		paragraphs: [
			'O direito bancário envolve contratos complexos, cláusulas técnicas e práticas de cobrança que muitas vezes dificultam a compreensão do consumidor. Em Campo Belo/MG, nossa atuação inclui revisão de contratos de financiamento, empréstimos, cartão de crédito, crédito consignado e negociações com instituições financeiras. O objetivo é identificar cobranças indevidas, juros excessivos e encargos incompatíveis com a legislação e com a jurisprudência atual.',
			'Além da revisão contratual, atendemos situações de fraude bancária, golpes eletrônicos e operações não reconhecidas. Nesses casos, o tempo de resposta é fundamental para solicitar bloqueios, registrar evidências e responsabilizar a instituição quando há falha de segurança ou de atendimento. Também conduzimos negociações para reestruturação de passivos, buscando redução de parcelas e condições mais viáveis para o orçamento do cliente, sempre com base técnica e documentação organizada.',
			'Quem busca advogado de direito bancário em Campo Belo MG precisa de orientação prática e objetiva para tomar decisões seguras. Nosso escritório explica cenários de forma clara, aponta riscos de cada caminho e acompanha o cliente em tratativas extrajudiciais e judiciais. Com atendimento presencial e online, oferecemos agilidade na análise de documentos e na elaboração de medidas urgentes, preservando direitos e evitando prejuízos maiores em relações financeiras sensíveis.',
		],
		faqs: [
			{
				question: 'É possível revisar contrato bancário já assinado?',
				answer:
					'Sim. Quando houver cláusulas abusivas ou encargos ilegais, a revisão pode ser buscada judicial ou extrajudicialmente.',
			},
			{
				question: 'Fui vítima de golpe bancário, o banco pode ser responsabilizado?',
				answer:
					'Dependendo do caso, sim. A responsabilidade pode existir quando há falha de segurança ou ausência de prevenção adequada por parte da instituição.',
			},
			{
				question: 'Negociar dívida com banco sem advogado é arriscado?',
				answer:
					'Pode ser. Sem análise técnica, o cliente pode aceitar condições ainda desvantajosas. A orientação jurídica ajuda a negociar com maior equilíbrio.',
			},
		],
		iconClass: 'fa-solid fa-landmark',
	},
	{
		slug: 'inventario-sucessoes',
		name: 'Inventário e Sucessões',
		h1: 'Advogado de inventário em Campo Belo MG',
		title: 'Inventário em Campo Belo MG | Silveira Advocacia',
		description:
			'Advogado de inventário em Campo Belo MG para partilha, sucessões e regularização patrimonial. Atuação em inventário judicial e extrajudicial com celeridade.',
		kicker: 'ATUAÇÃO EM INVENTÁRIO E SUCESSÕES',
		intro:
			'O inventário exige organização documental, estratégia jurídica e condução sensível entre herdeiros. Atuamos para garantir celeridade e segurança na partilha dos bens.',
		paragraphs: [
			'O inventário é o procedimento legal destinado a levantar, avaliar e partilhar os bens deixados por uma pessoa falecida. Em Campo Belo/MG, atuamos tanto no inventário extrajudicial, realizado em cartório quando presentes os requisitos legais, quanto no inventário judicial, necessário em casos com conflito, incapazes ou outras particularidades. O objetivo é assegurar que a transmissão patrimonial ocorra com regularidade, evitando bloqueios, multas e litígios prolongados.',
			'Uma condução técnica adequada começa com diagnóstico completo do acervo hereditário: imóveis, aplicações financeiras, veículos, dívidas e obrigações pendentes. Também orientamos sobre documentos essenciais, cálculo de tributos e prazos legais, especialmente o prazo inicial para abertura do inventário. Quando há divergência entre herdeiros, nossa atuação busca equilibrar negociação e firmeza jurídica, reduzindo desgaste emocional e preservando o patrimônio familiar durante a tramitação.',
			'Para quem procura advogado de inventário em Campo Belo MG, o diferencial está em unir celeridade com segurança. Nosso escritório atua com comunicação clara, estratégia personalizada e acompanhamento contínuo, desde a fase inicial até o registro final da partilha. Além do inventário, oferecemos suporte em planejamento sucessório para prevenir conflitos futuros e organizar a sucessão em vida. O atendimento presencial e online facilita a participação de herdeiros em diferentes cidades.',
		],
		faqs: [
			{
				question: 'Qual o prazo para abrir inventário após o falecimento?',
				answer:
					'Em regra, o inventário deve ser iniciado em até 60 dias do óbito, sob risco de multa tributária, conforme a legislação aplicável.',
			},
			{
				question: 'Todo inventário precisa ir para a Justiça?',
				answer:
					'Não. Quando todos os herdeiros são capazes e concordam com a partilha, o inventário pode ser feito em cartório, de forma extrajudicial.',
			},
			{
				question: 'Há como fazer inventário com herdeiros em cidades diferentes?',
				answer:
					'Sim. É possível conduzir etapas com procuração e atendimento remoto, mantendo segurança jurídica e participação de todos os envolvidos.',
			},
		],
		iconClass: 'fa-solid fa-scroll',
	},
	{
		slug: 'direito-familia',
		name: 'Direito de Família',
		h1: 'Advogado de direito de família em Campo Belo MG',
		title: 'Direito de Família em Campo Belo MG | Silveira Advocacia',
		description:
			'Advogado de família em Campo Belo MG para divórcio, guarda, pensão e partilha. Atendimento humanizado e estratégia jurídica firme em conflitos familiares.',
		kicker: 'ATUAÇÃO EM DIREITO DE FAMÍLIA',
		intro:
			'Conflitos familiares exigem equilíbrio entre técnica jurídica e sensibilidade. Atuamos para proteger direitos com soluções que reduzam desgaste emocional e preservem vínculos quando possível.',
		paragraphs: [
			'O direito de família trata de questões profundas da vida pessoal, como divórcio, guarda de filhos, pensão alimentícia, convivência, reconhecimento de paternidade e partilha de bens. Em Campo Belo/MG, nosso trabalho é conduzir esses casos com firmeza jurídica e acolhimento, entendendo que decisões judiciais nessa área impactam não apenas patrimônio, mas também rotina, relações e bem-estar emocional de toda a família.',
			'Nosso atendimento começa com escuta qualificada e análise objetiva do contexto. Em muitas situações, uma composição bem estruturada evita processos longos e reduz danos psicológicos, especialmente quando há crianças envolvidas. Quando o litígio é inevitável, elaboramos estratégia probatória consistente e pedidos adequados à realidade do caso, com foco em proteção de direitos e cumprimento de obrigações. Cada passo é comunicado com clareza para que o cliente tome decisões seguras.',
			'Para quem procura advogado de direito de família em Campo Belo MG, é essencial contar com suporte técnico contínuo e postura ética. Atuamos em demandas consensuais e litigiosas, inclusive com medidas urgentes quando há necessidade de proteção imediata. Também oferecemos atendimento online para facilitar reuniões e acompanhamento. Nosso compromisso é orientar com transparência, reduzir conflitos desnecessários e buscar soluções jurídicas sustentáveis para o presente e para o futuro da família.',
		],
		faqs: [
			{
				question: 'Divórcio consensual é mais rápido que litigioso?',
				answer:
					'Geralmente sim. Quando há acordo sobre bens, guarda e pensão, o procedimento tende a ser mais célere e menos desgastante.',
			},
			{
				question: 'A pensão alimentícia pode ser revisada?',
				answer:
					'Sim. Havendo mudança relevante na necessidade de quem recebe ou na capacidade de quem paga, é possível pedir revisão judicial.',
			},
			{
				question: 'É possível regularizar guarda e convivência sem processo longo?',
				answer:
					'Em muitos casos, sim. Acordos homologados judicialmente podem dar segurança jurídica com tramitação mais objetiva.',
			},
		],
		iconClass: 'fa-solid fa-people-roof',
	},
	{
		slug: 'usucapiao',
		name: 'Usucapião',
		h1: 'Advogado de usucapião em Campo Belo MG',
		title: 'Usucapião em Campo Belo MG | Silveira Advocacia',
		description:
			'Advogado de usucapião em Campo Belo MG para regularizar imóveis com segurança jurídica. Análise técnica de posse e condução judicial ou extrajudicial completa.',
		kicker: 'ATUAÇÃO EM USUCAPIÃO',
		intro:
			'A usucapião é instrumento jurídico para transformar posse prolongada em propriedade formal. Atuamos para estruturar o pedido corretamente e acelerar a regularização do imóvel.',
		paragraphs: [
			'A usucapião é uma solução jurídica relevante para quem exerce posse mansa, pacífica e contínua sobre um imóvel, mas ainda não possui registro formal em seu nome. Em Campo Belo/MG, realizamos análise completa do histórico da posse, do tempo de ocupação, da finalidade do imóvel e da documentação disponível para identificar a modalidade adequada, como usucapião extraordinária, ordinária, especial urbana, especial rural ou familiar.',
			'A etapa técnica é decisiva para o sucesso do pedido. Reunimos documentos, certidões, mapas, plantas e declarações que comprovem os requisitos legais, além de organizar prova testemunhal quando necessário. Também avaliamos se o caso comporta via extrajudicial em cartório, normalmente mais célere, ou se exige ajuizamento judicial. Uma estratégia documental bem construída reduz impugnações e contribui para maior segurança no reconhecimento da propriedade.',
			'Para quem busca advogado de usucapião em Campo Belo MG, o principal benefício é evitar erros formais que atrasam ou inviabilizam a regularização. Nosso escritório acompanha o procedimento do início ao fim, com comunicação transparente sobre prazos, custos e exigências de cada fase. A regularização correta permite vender, financiar, inventariar e transmitir o imóvel com segurança jurídica. Atendemos presencialmente e online para facilitar todo o processo de organização documental e acompanhamento.',
		],
		faqs: [
			{
				question: 'Qual é o prazo mínimo para pedir usucapião?',
				answer:
					'O prazo varia conforme a modalidade. Pode ser de 5, 10 ou 15 anos, dependendo dos requisitos legais aplicáveis ao caso.',
			},
			{
				question: 'Usucapião pode ser feita em cartório?',
				answer:
					'Sim, desde que estejam presentes os requisitos da via extrajudicial e não haja litígio impeditivo. A análise prévia define a melhor rota.',
			},
			{
				question: 'Quem não tem escritura pode regularizar o imóvel por usucapião?',
				answer:
					'Em muitos casos, sim. A ausência de escritura não impede o pedido quando a posse qualificada e os demais requisitos legais estão comprovados.',
			},
		],
		iconClass: 'fa-solid fa-house',
	},
	{
		slug: 'direito-imobiliario',
		name: 'Direito Imobiliário',
		h1: 'Advogado de direito imobiliário em Campo Belo MG',
		title: 'Direito Imobiliário em Campo Belo MG | Silveira Advocacia',
		description:
			'Advogado imobiliário em Campo Belo MG para compra e venda, locação, distrato e posse. Segurança jurídica em negociações e litígios envolvendo imóveis.',
		kicker: 'ATUAÇÃO EM DIREITO IMOBILIÁRIO',
		intro:
			'Negócios imobiliários envolvem valores elevados e riscos relevantes. Atuamos para prevenir litígios e resolver conflitos com segurança jurídica em todas as etapas do imóvel.',
		paragraphs: [
			'O direito imobiliário é essencial para garantir segurança em compra e venda, locação, promessa de compra, distrato, registro e regularização de imóveis. Em Campo Belo/MG, assessoramos pessoas físicas e jurídicas na análise documental do bem, na revisão de contratos e na prevenção de passivos ocultos que podem gerar prejuízo financeiro significativo. Uma diligência jurídica bem conduzida antes da assinatura evita conflitos futuros e protege o investimento.',
			'Quando há litígio, atuamos em ações possessórias, despejo, cobrança de aluguéis, inadimplemento contratual e discussão sobre vícios do imóvel. Também acompanhamos casos de regularização fundiária e retificação de registro, com foco em adequar a situação jurídica do bem à realidade fática. A estratégia processual considera prova técnica, documentos cartorários e histórico negocial, aumentando a consistência dos pedidos e a previsibilidade de resultados.',
			'Para quem busca advogado de direito imobiliário em Campo Belo MG, o diferencial está em combinar visão preventiva e atuação contenciosa firme. Nosso escritório orienta com clareza sobre riscos, custos e alternativas, além de conduzir negociações para evitar judicialização quando isso for vantajoso. Atendemos presencial e online, com acompanhamento próximo em cada etapa. O objetivo é proteger patrimônio e garantir segurança jurídica em decisões que impactam o presente e o futuro do cliente.',
		],
		faqs: [
			{
				question: 'Preciso de advogado para compra e venda de imóvel?',
				answer:
					'É altamente recomendável. A análise jurídica prévia do contrato e da matrícula reduz riscos de nulidade e prejuízo financeiro.',
			},
			{
				question: 'Locador pode retomar imóvel alugado a qualquer momento?',
				answer:
					'Não. A retomada depende das hipóteses legais e contratuais aplicáveis ao caso, exigindo procedimento adequado.',
			},
			{
				question: 'Imóvel com problema de registro pode ser regularizado?',
				answer:
					'Na maioria dos casos, sim. A regularização pode envolver retificações, averbações, procedimentos administrativos ou ação judicial.',
			},
		],
		iconClass: 'fa-solid fa-building',
	},
	{
		slug: 'renegociacao-dividas',
		name: 'Renegociação de Dívidas',
		h1: 'Advogado de renegociação de dívidas em Campo Belo MG',
		title: 'Renegociação em Campo Belo MG | Silveira Advocacia',
		description:
			'Advogado para renegociação de dívidas em Campo Belo MG com análise de contratos, redução de juros abusivos e negociação estratégica com bancos e credores.',
		kicker: 'ATUAÇÃO EM RENEGOCIAÇÃO DE DÍVIDAS',
		intro:
			'Dívidas podem sair de controle por juros e encargos excessivos. Atuamos para reequilibrar contratos, reduzir parcelas e construir soluções financeiras juridicamente seguras.',
		paragraphs: [
			'A renegociação de dívidas exige análise técnica para distinguir o que é obrigação legítima do que pode representar cobrança abusiva. Em Campo Belo/MG, atendemos clientes que enfrentam inadimplência com bancos, financeiras, cartões e contratos diversos. O trabalho começa com levantamento completo da dívida, identificação de encargos, verificação de cláusulas contratuais e diagnóstico do cenário financeiro atual para definir estratégia de negociação realista e sustentável.',
			'Com base nessa análise, conduzimos tratativas com credores para redução de juros, alongamento de prazo e reestruturação do passivo em condições viáveis. Quando há práticas abusivas, podemos adotar medidas judiciais para revisão contratual e contenção de cobranças indevidas. Também orientamos sobre riscos de acordos mal formulados, preservação de garantias e proteção patrimonial, evitando que uma solução imediata gere problemas maiores no médio prazo.',
			'Quem procura advogado de renegociação de dívidas em Campo Belo MG normalmente precisa de resposta rápida e orientação objetiva. Nosso escritório atua com transparência, explicando cenários, limites e benefícios de cada caminho. O atendimento pode ser presencial ou online, com organização ágil de documentos e acompanhamento próximo das negociações. O foco é recuperar fôlego financeiro sem abrir mão de segurança jurídica, permitindo ao cliente retomar planejamento e estabilidade.',
		],
		faqs: [
			{
				question: 'É possível reduzir juros altos em dívida bancária?',
				answer:
					'Em muitos casos, sim. A depender do contrato e da forma de cobrança, é viável negociar redução ou buscar revisão por via judicial.',
			},
			{
				question: 'Renegociar dívida afeta meu score de crédito?',
				answer:
					'Pode haver impacto inicial, mas acordos sustentáveis e pagamentos regulares tendem a contribuir para recuperação gradual do histórico.',
			},
			{
				question: 'Posso renegociar mesmo com processo de cobrança em andamento?',
				answer:
					'Sim. Muitas vezes a negociação ocorre durante o processo, e uma estratégia jurídica adequada pode melhorar as condições de acordo.',
			},
		],
		iconClass: 'fa-solid fa-circle-dollar-to-slot',
	},
];

export const AREA_BY_SLUG = Object.fromEntries(
	AREA_ENTRIES.map((area) => [area.slug, area])
) as Record<string, AreaContent>;
