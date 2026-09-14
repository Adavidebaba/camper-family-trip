/**
 * Dati di dettaglio per le Tappe 1 - 8 (15 Set - 22 Set)
 */
export const ITINERARY_PART_1 = [
  {
    id: 1,
    dayNumber: 1,
    date: '15 Set',
    title: 'Partenza e arrivo nella Gola del Furlo',
    route: 'Pisa → Acqualagna',
    distanceKm: 270,
    drivingTime: '~3h30 (con pause poppata)',
    mobility: 'Carrozzina',
    summary: 'Partenza comoda post-poppata, valico appenninico e arrivo pomeridiano nella suggestiva Riserva Naturale Statale Gola del Furlo.',
    coordinates: [43.6455, 12.7231],
    schedule: [
      { time: '09:30', activity: 'Poppata a casa e sistemazione finale camper', note: 'Partire col camper pronto e bimba sazia per favorire la nanna nella prima tratta' },
      { time: '10:30', activity: 'Partenza da Pisa direzione Firenze / Appennino', note: 'Guida dolce sulla FI-PI-LI e valico verso le Marche' },
      { time: '12:30', activity: 'Sosta relax a metà strada (Sansepolcro / Città di Castello)', note: 'Cambio pannolino, sgranchita e seconda poppata' },
      { time: '15:30', activity: 'Arrivo all’Area Sosta Parco del Furlo', note: 'Allaccio 220V, apertura tendalino e acclimatamento' },
      { time: '17:00', activity: 'Prima passeggiata pianeggiante lungo il fiume Candigliano', note: 'Aria fresca di gola, ombra naturale e fondo asfaltato' }
    ],
    walkDetails: {
      pathName: 'Passeggiata Golena del Furlo & Parco Fluviale',
      surface: 'Asfalto liscio e sentiero ghiaioso compatto',
      strollerAccessibility: 'Ottima con carrozzina standard',
      shadeLevel: 'Alta (ombra delle pareti rocciose e vegetazione fluviale)'
    },
    camperStop: {
      name: 'Area Sosta Camper Parco del Furlo (Acqualagna)',
      coordinates: [43.6468, 12.7238],
      has220V: true,
      services: 'Allaccio 220V, carico/scarico, servizi igienici, parco giochi, area pic-nic',
      notes: 'Molto tranquilla la notte, circondata dal verde. Ottima per far dormire la bimba nel silenzio.'
    },
    babyTips: {
      feedingSpots: 'Panchine ombreggiate lungo il parco fluviale adiacente all’area camper',
      diaperPoints: 'Tavolo camper sempre pronto; bagni dell’area sosta riscaldati',
      comfortNotes: 'Temperatura serale fresca nella gola: preparare tutina di ricambio e copertina termica'
    },
    medicalNearby: {
      pharmacy: 'Farmacia Comunale Acqualagna - C.so Roma 28 (Tel. 0721 797125) a 3.5 km',
      urgentCare: 'Guardia Medica Cagli / Ospedale Urbino (Pronto Soccorso Pediatrico a 20 min)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Tartufo nero estivo di Acqualagna', 'Crescia sfogliata marchigiana', 'Casciotta d’Urbino DOP'],
      recommendedSpots: 'Osteria del Parco (a piedi dall’area camper, tavoli all’aperto molto comodi con carrozzina)'
    }
  },
  {
    id: 2,
    dayNumber: 2,
    date: '16 Set',
    title: 'La Gola del Furlo e la Vecchia Flaminia',
    route: 'Spostamenti locali a piedi',
    distanceKm: 0,
    drivingTime: '0 min (Camper fermo)',
    mobility: 'Carrozzina',
    summary: 'Passeggiata sulla vecchia via Flaminia lungo il Candigliano tra asfalto liscio, pareti di roccia a picco e galleria romana del Vespasiano.',
    coordinates: [43.6455, 12.7231],
    schedule: [
      { time: '09:00', activity: 'Colazione calma in camper e poppata mattutina', note: 'Temperatura ottimale del mattino' },
      { time: '10:00', activity: 'Camminata lungo la vecchia Flaminia verso la Galleria Romana', note: 'Strada chiusa al traffico ordinario, pianeggiante e perfettamente asfaltata' },
      { time: '12:30', activity: 'Rientro in camper per pranzo e pennichella neonata', note: 'Area freschissima e ventilata, ideale per il riposo diurno' },
      { time: '16:00', activity: 'Visita rilassata al Centro Visite Riserva del Furlo', note: 'Spazio espositivo con pannelli didattici e plastici, accessibile con carrozzina' },
      { time: '18:30', activity: 'Aperitivo rilassato vista fiume Candigliano', note: 'Momento d’oro per foto e tranquillità' }
    ],
    walkDetails: {
      pathName: 'Canyon del Furlo - Tracciato Storico Flaminia',
      surface: 'Asfalto perfetto senza barriere architettoniche',
      strollerAccessibility: '100% adatta a carrozzine e passeggini',
      shadeLevel: 'Molto ombreggiata al mattino'
    },
    camperStop: {
      name: 'Area Sosta Parco del Furlo (Acqualagna)',
      coordinates: [43.6468, 12.7238],
      has220V: true,
      services: 'Allaccio 220V attivo continuo, colonnine acqua potabile',
      notes: 'Seconda notte consecutiva: nessun bisogno di spostare il camper'
    },
    babyTips: {
      feedingSpots: 'Aree relax con panche in legno vicino al ponte romano',
      diaperPoints: 'Camper raggiungibile in pochi minuti di passo svelto',
      comfortNotes: 'Portare cuffiette o copri-orecchie leggeri per i tratti più ventilati nella gola'
    },
    medicalNearby: {
      pharmacy: 'Farmacia del Furlo / Acqualagna - Corso Roma 28 (Tel. 0721 797125)',
      urgentCare: 'Punto di Primo Intervento Cagli (10 km)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Tagliatelle al tartufo fresco', 'Passatelli marchigiani al sugo bianco'],
      recommendedSpots: 'Ristorante La Ginestra (ottimo asporto consumabile direttamente nella veranda camper)'
    }
  },
  {
    id: 3,
    dayNumber: 3,
    date: '17 Set',
    title: 'Colline Marchigiane e il Borgo di Corinaldo',
    route: 'Furlo → Montalfoglio → Corinaldo',
    distanceKm: 45,
    drivingTime: '~50 min',
    mobility: 'Marsupio',
    summary: 'Breve sosta panoramica a Montalfoglio e pomeriggio immersi nell’atmosfera medievale tra le maestose mura fortificate di Corinaldo.',
    coordinates: [43.6483, 13.0489],
    schedule: [
      { time: '09:30', activity: 'Sgancio servizi Furlo e partenza panoramica', note: 'Tratta breve tra le dolci colline dell’entroterra di Senigallia' },
      { time: '10:30', activity: 'Stop panoramico al minuscolo borgo di Montalfoglio', note: 'Affaccio mozzafiato sulla vallata del Cesano' },
      { time: '12:00', activity: 'Arrivo a Corinaldo e posizionamento nell’area sosta camper', note: 'Allaccio elettrico e pappa prima di entrare nel borgo' },
      { time: '15:00', activity: 'Salita alla Piaggia e Pozzo della Polenta (con Marsupio)', note: 'Scorci stupendi, gradini storici in mattoni (vietata la carrozzina)' },
      { time: '17:30', activity: 'Giro sul camminamento di ronda delle mura', note: 'Vista a 360 gradi fino al mare Adriatico al tramonto' }
    ],
    walkDetails: {
      pathName: 'Borgo fortificato di Corinaldo & La Piaggia',
      surface: 'Gradoni in cotto, ciottoli e selciato medievale in salita',
      strollerAccessibility: 'Difficile con carrozzina: MARSUPIO essenziale',
      shadeLevel: 'Media (vicoli stretti ombreggiati)'
    },
    camperStop: {
      name: 'Area Camper Comunale Corinaldo (Via Pecci)",',
      coordinates: [43.6495, 13.0472],
      has220V: true,
      services: 'Allaccio 220V, camper service, illuminata, a 200m dal centro storico',
      notes: 'Tra le migliori aree sosta d’Italia: pianeggiante, pulitissima e comodissima'
    },
    babyTips: {
      feedingSpots: 'Giardini pubblici panoramici vicino a Porta Santa Maria',
      diaperPoints: 'Camper comodissimo a 5 minuti a piedi dalle mura',
      comfortNotes: 'Regolare bene le spalline del marsupio: la scalinata della Piaggia conta un centinaio di gradini'
    },
    medicalNearby: {
      pharmacy: 'Farmacia Pasquini - Via del Corso 39, Corinaldo (Tel. 071 67018)',
      urgentCare: 'Ospedale di Senigallia (a 18 km) con reparto Pediatria attivo',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Polenta con ragù di costine', 'Vino Verdicchio dei Castelli di Jesi DOC', 'Biscotti di mosto'],
      recommendedSpots: 'Cantina Ligi o Trattoria ai 9 Tarocchi (centro storico)'
    }
  },
  {
    id: 4,
    dayNumber: 4,
    date: '18 Set',
    title: 'Attraversamento verso l’Umbria e il Lago Trasimeno',
    route: 'Corinaldo → Castiglione del Lago',
    distanceKm: 145,
    drivingTime: '~2h (con sosta poppata intermedia)',
    mobility: 'Carrozzina',
    summary: 'Tappa di raccordo attraverso l’Appennino umbro-marchigiano fino alle rive del Trasimeno per un pomeriggio di relax in riva al lago.',
    coordinates: [43.1278, 12.0469],
    schedule: [
      { time: '09:30', activity: 'Partenza da Corinaldo verso la SS76 / Perugia', note: 'Strada a scorrimento veloce comoda per il sonno della bimba' },
      { time: '11:00', activity: 'Sosta rigenerante zona Gubbio / Umbertide', note: 'Poppata intermedia e cambio prima del Trasimeno' },
      { time: '12:30', activity: 'Arrivo a Castiglione del Lago all’Area Sosta', note: 'Sistemazione camper con vista aperta e allaccio luce' },
      { time: '15:30', activity: 'Passeggiata lungo la riva erbosa del Trasimeno', note: 'Sentiero pianeggiante con carrozzina, brezza lacustre rigenerante' },
      { time: '18:30', activity: 'Tramonto dorato sul lago e rientro in piazzola', note: 'Temperatura mite e zanzare scarse a fine settembre' }
    ],
    walkDetails: {
      pathName: 'Lungolago di Castiglione del Lago',
      surface: 'Percorso ciclopedonale asfaltato e sterrato battuto compatto',
      strollerAccessibility: 'Ottima, totalmente pianeggiante',
      shadeLevel: 'Pioppi e platani lungo il lago'
    },
    camperStop: {
      name: 'Area Sosta Camper Castiglione del Lago (Loc. Lido Comunale)',
      coordinates: [43.1255, 12.0483],
      has220V: true,
      services: 'Allaccio 220V, CS, docce calde, a pochi metri dalla spiaggia e dall’ascensore panoramico per il borgo',
      notes: 'Dotata di comodo ascensore/rampa per salire al borgo storico con carrozzina'
    },
    babyTips: {
      feedingSpots: 'Prato verde del lungolago sotto i salici o in camper con vista',
      diaperPoints: 'Camper direttamente in riva; servizi dell’area sosta ampi',
      comfortNotes: 'Zanzariere del camper abbassate al calar del sole per massima sicurezza'
    },
    medicalNearby: {
      pharmacy: 'Farmacia Trasimeno - Via Roma 47, Castiglione del Lago (Tel. 075 951139)',
      urgentCare: 'Centro Salute di Castiglione del Lago / Ospedale Silvestrini Perugia (35 min)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Tegamaccio di pesce di lago (persico e regina)', 'Fagiolina del Trasimeno Presidio Slow Food', 'Torta al testo'],
      recommendedSpots: 'Ristorante La Cantina (nel borgo alto, raggiungibile con ascensore panoramico)'
    }
  },
  {
    id: 5,
    dayNumber: 5,
    date: '19 Set',
    title: 'Giornata Stanziale al Trasimeno e Rocca Medievale',
    route: 'Spostamenti locali a piedi',
    distanceKm: 0,
    drivingTime: '0 min (Camper fermo)',
    mobility: 'Carrozzina',
    summary: 'Giornata senza guida: lungolago pianeggiante, salita col comodo ascensore al borgo medievale e visita alla Rocca del Leone.',
    coordinates: [43.1278, 12.0469],
    schedule: [
      { time: '09:00', activity: 'Risveglio sul lago e colazione vista cigni', note: 'Mattinata rilassata a misura di neonata' },
      { time: '10:00', activity: 'Salita al borgo storico con ascensore panoramico', note: 'Carrozzina al seguito, nessun gradino da affrontare' },
      { time: '11:00', activity: 'Visita esterna di Palazzo della Corgna e passeggiata sul corso', note: 'Botteghe di prodotti tipici e piazzette ombreggiate' },
      { time: '13:00', activity: 'Pranzo in camper o bistrot con tavoli esterni', note: 'Riposo pomeridiano con calma' },
      { time: '16:30', activity: 'Giro della penisola sul lungolago con sosta gelato', note: 'Perfetto per cullare la bimba col movimento della carrozzina' }
    ],
    walkDetails: {
      pathName: 'Anello del Promontorio di Castiglione del Lago',
      surface: 'Asfalto e lastricato piano',
      strollerAccessibility: 'Eccellente su tutto il circuito basso e corso principale',
      shadeLevel: 'Ombreggiato a tratti'
    },
    camperStop: {
      name: 'Area Sosta Castiglione del Lago',
      coordinates: [43.1255, 12.0483],
      has220V: true,
      services: '220V continuo, carico acqua pulita',
      notes: 'Seconda notte rilassante: le bimbe beneficiano molto di 2 notti consecutive fermi nello stesso posto'
    },
    babyTips: {
      feedingSpots: 'Giardini Belvedere di fronte alla Rocca con vista lago mozzafiato',
      diaperPoints: 'Panchine dei giardini o camper a 5 min tramite ascensore',
      comfortNotes: 'Il movimento regolare sul lungolago garantisce una nanna pomeridiana serena'
    },
    medicalNearby: {
      pharmacy: 'Farmacia Popolare Comunale - Viale Bruno Buozzi 24 (Tel. 075 953120)',
      urgentCare: 'Guardia Medica Castiglione del Lago (Tel. 075 95261)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Filetti di persico reale dorati', 'Strangozzi al tartufo e funghi dei colli'],
      recommendedSpots: 'Chiosco lungolago La Merangola (caffè e spuntini veloci all’aperto)'
    }
  },
  {
    id: 6,
    dayNumber: 6,
    date: '20 Set',
    title: 'Discesa nel Viterbese: Lago di Bolsena',
    route: 'Castiglione → Bolsena',
    distanceKm: 85,
    drivingTime: '~1h15',
    mobility: 'Carrozzina',
    summary: 'Ingresso nel Viterbese tra i paesaggi vulcanici, sistemazione al porto/lungolago alberato di Bolsena e passeggiata pomeridiana tra i platani secolari.',
    coordinates: [42.6444, 11.9861],
    schedule: [
      { time: '10:00', activity: 'Partenza post-poppata direzione Chiusi / Orvieto / Bolsena', note: 'Discesa panoramica sulla SR2 Cassia' },
      { time: '11:45', activity: 'Arrivo all’Area Sosta Camper Il Guadetto a Bolsena', note: 'Posizionamento sotto gli alberi, allaccio 220V e apertura gavoni' },
      { time: '13:00', activity: 'Pranzo leggero e nanna post-viaggio', note: 'Tranquillità garantita dal microclima lacustre' },
      { time: '15:30', activity: 'Passeggiata sul celebre Viale Colesanti', note: 'Viale monumentale di ortensie e platani che scende al lago, ideale con la carrozzina' },
      { time: '18:00', activity: 'Giro del porticciolo turistico e aperitivo lungolago', note: 'Acqua limpida vulcanica e tramonto caldo' }
    ],
    walkDetails: {
      pathName: 'Viale Colesanti & Lungolago Bolsena',
      surface: 'Asfalto pianeggiante e marciapiedi larghi',
      strollerAccessibility: '100% agevole per carrozzine di qualsiasi dimensione',
      shadeLevel: 'Eccellente (platani maestosi)'
    },
    camperStop: {
      name: 'Area Sosta Camper Il Guadetto (Bolsena)',
      coordinates: [42.6418, 11.9832],
      has220V: true,
      services: 'Allaccio elettrico 220V, scarico nautico/cassetta, carico acqua, docce calde, custode, a 50m dal lago',
      notes: 'Una delle migliori aree della Tuscia: alberata, sicura e vicinissima sia al lungolago che al centro'
    },
    babyTips: {
      feedingSpots: 'Chioschi del lungolago o panchine fresche sotto le grandi ortensie',
      diaperPoints: 'Area sosta a 3 minuti a piedi dal viale principale',
      comfortNotes: 'Bolsena è noto per avere acque pulitissime e aria salubre'
    },
    medicalNearby: {
      pharmacy: 'Farmacia San Rocco - Via Cavour 18, Bolsena (Tel. 0761 799014)',
      urgentCare: 'Poliambulatorio Bolsena / Ospedale Belcolle Viterbo (reparto Pediatria d’eccellenza a 30 min)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Coregone del lago di Bolsena alla brace', 'Sbroscia (zuppa di pesce vulcanica)', 'Vino Est! Est!! Est!!! di Montefiascone'],
      recommendedSpots: 'Trattoria da Picchietto o La Tavernetta (ottimo pesce di lago)'
    }
  },
  {
    id: 7,
    dayNumber: 7,
    date: '21 Set',
    title: 'La Città che Muore: Civita di Bagnoregio',
    route: 'Bolsena ↔ Civita di Bagnoregio',
    distanceKm: 30,
    drivingTime: '~20 min a tratta',
    mobility: 'Marsupio obbligatorio',
    summary: 'Mattinata spettacolare sospesi sui calanchi a Civita di Bagnoregio attraverso il ponte pedonale. MARSUPIO INDISPENSABILE per via della ripida pendenza e scalinate.',
    coordinates: [42.6277, 12.0136],
    schedule: [
      { time: '08:45', activity: 'Partenza in camper verso Bagnoregio per anticipare i pullman', note: 'Parcheggio camper a Piazzale Bersaglieri o navetta da Bagnoregio' },
      { time: '09:30', activity: 'Ingresso sul ponte panoramico con Marsupio regolato bene', note: 'Ponte in cemento inclinato di 300m: carrozzine non praticabili' },
      { time: '10:15', activity: 'Esplorazione del borgo sospeso nel tempo', note: 'Piazza San Donato col terreno in terra battuta, vicoli fioriti e belvedere sui calanchi' },
      { time: '12:00', activity: 'Rientro sul ponte e discesa a Bagnoregio', note: 'Pausa idratazione e poppata in zona fresca' },
      { time: '13:30', activity: 'Rientro alla base camper di Bolsena (Area Il Guadetto)', note: 'Pomeriggio riposante dopo l’impegno fisico della camminata' }
    ],
    walkDetails: {
      pathName: 'Ponte Sospeso e Borgo di Civita di Bagnoregio',
      surface: 'Salita ripida in cemento sul ponte, gradini e pavé medievale nel borgo',
      strollerAccessibility: 'IMPOSSIBILE con carrozzina (vietata/inutile). Marsupio tassativo!',
      shadeLevel: 'Bassa sul ponte (sole pieno), alta all’interno delle viuzze'
    },
    camperStop: {
      name: 'Area Sosta Il Guadetto (Bolsena)',
      coordinates: [42.6418, 11.9832],
      has220V: true,
      services: 'Allaccio 220V, colonnine ricarica, tranquillità assoluta',
      notes: 'Tornare a Bolsena permette alla bimba di fare la nanna pomeridiana nel suo ambiente conosciuto'
    },
    babyTips: {
      feedingSpots: 'Giardino del Belvedere a Civita oppure bar accogliente nella piazza centrale',
      diaperPoints: 'Servizi igienici all’inizio del ponte (Bagnoregio) o camper a fine visita',
      comfortNotes: 'Portare cappellino parasole per la bimba: il ponte nelle ore centrali è esposto al sole'
    },
    medicalNearby: {
      pharmacy: 'Farmacia Rocchi - Corso Mazzini 43, Bagnoregio (Tel. 0761 792036)',
      urgentCare: 'Presidio Ospedaliero Montefiascone (12 km) / Ospedale Belcolle Viterbo',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Picchiarelli alla bagnorese', 'Olio extravergine di canino', 'Salumi di suino brado della Tuscia'],
      recommendedSpots: 'Hostaria del Ponte (Bagnoregio) o pranzo tranquillo in camper'
    }
  },
  {
    id: 8,
    dayNumber: 8,
    date: '22 Set',
    title: 'Giorno Cuscinetto: Relax, Lavanderia e Lungolago',
    route: 'Spostamenti a piedi',
    distanceKm: 0,
    drivingTime: '0 min (Camper fermo)',
    mobility: 'Carrozzina',
    summary: 'Tappa cuscinetto fondamentale per i ritmi familiari: lavanderia camper, scorta spesa bio locale e passeggiata distesa al porto e castello Monaldeschi.',
    coordinates: [42.6444, 11.9861],
    schedule: [
      { time: '09:30', activity: 'Giro lavanderia self-service a Bolsena e spesa fresca', note: 'Rinfrescare tutine, lenzuolini e vestiti camper' },
      { time: '11:00', activity: 'Caffè in riva al porto e passeggiata con carrozzina', note: 'Brezza leggera e ombra dei tigli' },
      { time: '13:00', activity: 'Pranzo sereno in camper e lungo pisolino neonata', note: 'Zero stress da orologio' },
      { time: '16:00', activity: 'Salita dolce al Borgo Castello (Rocca Monaldeschi)', note: 'Scorci panoramici sul cratere vulcanico del lago' },
      { time: '19:00', activity: 'Cena all’aperto con tramonto sul lago', note: 'Clima mite tipico di fine settembre' }
    ],
    walkDetails: {
      pathName: 'Passeggiata dei Pescatori & Parco Archeologico',
      surface: 'Asfalto lungolago e lastricato liscio',
      strollerAccessibility: 'Ottima sul lungolago; leggera pendenza per salire al castello',
      shadeLevel: 'Molto alta sul viale principale'
    },
    camperStop: {
      name: 'Area Sosta Il Guadetto (Bolsena)',
      coordinates: [42.6418, 11.9832],
      has220V: true,
      services: '220V, lavelli stoviglie e indumenti, docce, Wi-Fi',
      notes: 'Terza e ultima notte a Bolsena: stabilità ideale per il sistema sonno-veglia del neonato'
    },
    babyTips: {
      feedingSpots: 'Panchine in legno sotto gli alberi di fronte alla spiaggia delle barche',
      diaperPoints: 'Camper a 2 minuti di passo',
      comfortNotes: 'Giorno perfetto per controllare scorte di pannolini e salviettine'
    },
    medicalNearby: {
      pharmacy: 'Farmacia San Rocco - Via Cavour 18, Bolsena (Tel. 0761 799014)',
      urgentCare: 'Guardia Medica Bolsena (Tel. 0761 799480)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Filetto di luccio in salsa verde', 'Tozzetti con nocciole dei Monti Cimini'],
      recommendedSpots: 'Friggitoria del porto (pesce fritto fresco da asporto ottimo in camper)'
    }
  }
];
