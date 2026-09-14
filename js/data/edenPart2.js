/**
 * Dati Tappe 6 - 10 per l'itinerario con Eden (20 - 24 Settembre 2026)
 * Basi: Comano (Base 2, notti 2-3/3) e Lago di Levico (Base 3, notti 1-3/3)
 */
export const EDEN_PART_2 = [
  {
    id: 6,
    dayNumber: 6,
    date: '20 Set',
    title: 'La Quiete del Parco Termale di Comano e il Torrente Sarca',
    route: 'Spostamenti a piedi a Ponte Arche / Comano',
    distanceKm: 0,
    drivingTime: '0 min (Camper fermo)',
    altitudeMeters: 400,
    baseName: 'Ponte Arche / Comano (Base 2)',
    nightsInBase: 3,
    mobility: 'Carrozzina',
    summary: 'Giornata interamente stanziale a ritmo lento: viali alberati del Parco Termale, aria pura della Val Giudicarie e relax assoluto con carrozzina lungo il torrente Sarca.',
    coordinates: [46.0358, 10.8732],
    schedule: [
      { time: '09:30', activity: 'Risveglio dolce e poppata in camper riscaldato', note: 'Aria fresca e frizzante del mattino montano (400 m slm)' },
      { time: '10:30', activity: 'Passeggiata sotto i grandi abeti e faggi del Parco Termale', note: '14 ettari interamente chiusi al traffico con viali in asfalto vellutato' },
      { time: '12:30', activity: 'Pranzo in camper o al bistrot del parco termale', note: 'Riposino pomeridiano di Eden nella quiete della piazzola' },
      { time: '15:30', activity: 'Seconda passeggiata lungo il ponte pedonale sul Sarca', note: 'Suono rilassante dell’acqua corrente che favorisce il sonno del bebè' },
      { time: '18:00', activity: 'Spuntino con succo di mela trentino e prodotti del Bleggio', note: 'Serata tranquilla al calduccio del camper' }
    ],
    morningProposal: {
      title: 'I Sentieri Ombreggiati del Parco Termale',
      description: 'Passeggiata silenziosa tra scoiattoli e alberi secolari con asfalto perfetto per la carrozzina.',
      timeEstimate: '2h di cammino rilassato'
    },
    afternoonProposal: {
      title: 'Lungo il Fiume Sarca & Ponte Storico',
      description: 'Affaccio panoramico sul corso d’acqua montano e panchine al sole mite pomeridiano.',
      timeEstimate: '1h30'
    },
    rainPlan: {
      title: 'Hall Termale e Porticato di Comano',
      indoorActivity: 'La grande galleria termale è riscaldata, silenziosa e dotata di fasciatoi e comode poltrone per l’allattamento.',
      notes: 'Ambiente salubre e protetto dalla pioggia.'
    },
    walkDetails: {
      pathName: 'Viali del Parco delle Terme di Comano',
      surface: 'Asfalto perfetto e vialetti complanari lisci',
      strollerAccessibility: '100% accessibile senza dislivelli',
      shadeLevel: 'Massima (abeti, castagni e tigli centenari)'
    },
    camperStop: {
      name: 'Area Camper Ponte Arche (via Lungo Sarca)',
      coordinates: [46.0358, 10.8732],
      has220V: true,
      services: 'Allaccio 220V attivo',
      notes: 'Seconda notte nella stessa piazzola: stabilità ideale per il sonno di Eden'
    },
    babyTips: {
      feedingSpots: 'Panchine vicino al laghetto delle ninfee del parco',
      diaperPoints: 'Camper a soli 5 minuti a piedi',
      comfortNotes: 'Clima eccellente senza afa, perfetto per la pelle delicata del neonato'
    },
    medicalNearby: {
      pharmacy: 'Farmacia Comano Terme - Ponte Arche (Tel. 0465 701235)',
      urgentCare: 'Guardia Medica Ponte Arche (a 400 m) / Ospedale di Tione (15 km)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Canederli trentini in brodo', 'Strangolapreti al burro e salvia', 'Torta di noci'],
      recommendedSpots: 'Ristorante Giardino a Ponte Arche o cucina calda in camper'
    }
  },
  {
    id: 7,
    dayNumber: 7,
    date: '21 Set',
    title: 'Archeo-Parco Fiavé (UNESCO) e Opzione Molveno',
    route: 'Ponte Arche ↔ Fiavé (8 km)',
    distanceKm: 16,
    drivingTime: '15 min a tratta',
    altitudeMeters: 660,
    baseName: 'Ponte Arche / Comano (Base 2)',
    nightsInBase: 3,
    mobility: 'Carrozzina',
    summary: 'Breve gita verso l’Altopiano di Fiavé (quota 660 m, ideale per neonati). Passerella in legno pianeggiante nel Parco Archeo-Natura delle palafitte e rientro a Comano.',
    coordinates: [46.0028, 10.8422],
    schedule: [
      { time: '10:00', activity: 'Breve spostamento col camper fino al parcheggio del Parco Palafitte di Fiavé', note: 'Ampio parcheggio piano all’ingresso' },
      { time: '10:30', activity: 'Passeggiata sulla passerella in legno delle palafitte UNESCO', note: 'Tutto su passerella piana sopraelevata sul biotopo lacustre, 100% adatta a carrozzina' },
      { time: '12:30', activity: 'Pausa poppata nel centro visitatori e rientro al camper', note: 'Pranzo sereno e cambio pannolino' },
      { time: '14:00', activity: 'Rientro alla base di Ponte Arche', note: 'Pomeriggio tranquillo senza ulteriori spostamenti' },
      { time: '16:30', activity: 'Ultima passeggiata rilassata al Parco di Comano', note: 'Preparativi per il trasferimento a Levico di domani' }
    ],
    morningProposal: {
      title: 'Parco Archeo-Natura di Fiavé',
      description: 'Ricostruzione a grandezza naturale delle capanne preistoriche collegate da pontili in legno.',
      timeEstimate: '1h30'
    },
    afternoonProposal: {
      title: 'Rientro a Comano & Riposo Pomeridiano',
      description: 'Pomeriggio senza impegni per recuperare energie e far dormire la bimba.',
      timeEstimate: 'Libero'
    },
    rainPlan: {
      title: 'Museo delle Palafitte Indoor di Fiavé',
      indoorActivity: 'Museo moderno al coperto nel centro del paese di Fiavé, con rampa ascensore per carrozzine e percorsi sensoriali.',
      notes: 'Apertura pomeridiana garantita in caso di pioggia.'
    },
    walkDetails: {
      pathName: 'Passerella Palafitte di Fiavé',
      surface: 'Tavole in legno complanari e sentiero ghiaioso compatto',
      strollerAccessibility: 'Completamente accessibile senza gradini',
      shadeLevel: 'Media (tettoie delle capanne e boschetto)'
    },
    camperStop: {
      name: 'Area Camper Ponte Arche (via Lungo Sarca)',
      coordinates: [46.0358, 10.8732],
      has220V: true,
      services: 'Allaccio 220V, carico acqua pulita prima del trasferimento di domani',
      notes: 'Terza e ultima notte a Comano Terme'
    },
    babyTips: {
      feedingSpots: 'Punti ristoro dell’Archeo-Parco Fiavé con tavoli in legno',
      diaperPoints: 'Fasciatoio presente nei bagni della biglietteria Fiavé',
      comfortNotes: 'A Fiavé (660m) la temperatura è circa 2 gradi più fresca: giacchettina antivento per Eden'
    },
    medicalNearby: {
      pharmacy: 'Farmacia Fiavé - Piazza San Sebastiano (Tel. 0465 735010)',
      urgentCare: 'Ospedale di Tione di Trento (18 km)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Formaggi della Giudicarie a latte crudo', 'Miele di montagna millefiori'],
      recommendedSpots: 'Caseificio Sociale di Fiavé (punto vendita con burro artigianale e formaggi)'
    },
    molvenoOption: {
      description: "Lago alpino a 864 m di quota con acque turchesi e 12 ettari di prato all'inglese continuo sul lungolago lastricato e privo di dislivelli.",
      foodSpot: "Panificio Pasticceria PANDOP (strudel con pasta tirata a mano e crostate ai piccoli frutti) ed El Filò (cucina alpina tradizionale).",
      camperSpot: "Area Sosta Camper Lago Di Molveno (a 50m dalla riva, 220V) oppure soste gratuite a Castel Belfort e Belpark Parco Faunistico Spormaggiore (a 15 min).",
      whyOmittedNote: "Esclusa dall'anello principale per due ragioni: (1) l'escursione classica a Malga Tovre prevede la risalita in cabinovia sull'altopiano di Pradel (1.367 m), sconsigliata a un neonato di un mese per la rapida variazione di pressione barometrica; (2) la quota (864 m) tocca il limite superiore concordato per la famiglia. Se desiderate visitarla come deviazione di mezza giornata, limitarsi esclusivamente alla passeggiata pianeggiante lungolago senza salire in cabinovia."
    }
  },
  {
    id: 8,
    dayNumber: 8,
    date: '22 Set',
    title: 'Attraversamento verso la Valsugana e il Lago di Levico',
    route: 'Ponte Arche → Trento → Lago di Levico',
    distanceKm: 58,
    drivingTime: '1h–1h30',
    altitudeMeters: 440,
    baseName: 'Lago di Levico (Base 3)',
    nightsInBase: 3,
    mobility: 'Carrozzina',
    summary: 'Trasferimento agevole verso la Valsugana scendendo verso Trento e risalendo la SS47 a 4 corsie. Arrivo al Lido di Levico per 3 notti in riva al lago.',
    coordinates: [46.0089, 11.3039],
    schedule: [
      { time: '10:00', activity: 'Partenza post-poppata da Comano verso Trento sulla Gardesana', note: 'Strada scorrevole con tunnel ben illuminati' },
      { time: '11:15', activity: 'Transito per Trento e imbocco della Valsugana SS47', note: 'Percorso veloce e senza curve brusche' },
      { time: '11:45', activity: 'Arrivo all’Area Sosta Camper sul Lago di Levico', note: 'Posizionamento vicino alla riva, allaccio 220V' },
      { time: '13:00', activity: 'Pranzo con vista sulle acque smeraldo del lago', note: 'Pranzo rilassato in camper' },
      { time: '15:30', activity: 'Passeggiata con carrozzina sul Lido di Levico', note: 'Pista ciclopedonale asfaltata e prati verdi a pelo d’acqua' }
    ],
    morningProposal: {
      title: 'Trasferimento panoramico Trento - Valsugana',
      description: 'Guida comoda e rilassata per favorire la consueta nanna mattutina di Eden in camper.',
      timeEstimate: '1h15 di viaggio'
    },
    afternoonProposal: {
      title: 'Il Lido di Levico e il Prato dei Pescatori',
      description: 'Passeggiata pianeggiante sul lungolago meridionale tra canneti e pontili in legno.',
      timeEstimate: '1h30 con carrozzina'
    },
    rainPlan: {
      title: 'Ristorante Bar del Lido di Levico',
      indoorActivity: 'Locale ampio con grandi vetrate panoramiche sulle acque del lago, caldo e con spazi larghi per la carrozzina.',
      notes: 'Possibilità di sostare al coperto gustando una cioccolata calda o tè.'
    },
    walkDetails: {
      pathName: 'Lungolago del Lido di Levico',
      surface: 'Asfalto colato e passerella complanare',
      strollerAccessibility: '100% accessibile e pianeggiante',
      shadeLevel: 'Salici piangenti e bosco ripariale'
    },
    camperStop: {
      name: 'Area Camper Lago di Levico (Località Lido)',
      coordinates: [46.0065, 11.2982],
      has220V: true,
      services: 'Allaccio 220V, camper service completo, docce, accesso immediato al lido',
      notes: 'Base magnifica: permette di vivere il lago a piedi ogni giorno. Prima notte a Levico.'
    },
    freeCamperAlternatives: [
      { name: "Area Sosta Camper Gratuita Pergine", location: "Via S. Pietro, Pergine Valsugana", rating: "4.5 / 5", services: "Punto sosta comunale gratuito a 3 km dal Lago di Caldonazzo e 10 min da Levico", whyOmittedNote: "Dista circa 10 km dal Lago di Levico e dal Parco Asburgico; richiede l'uso quotidiano del camper per ogni spostamento verso le passeggiate." },
      { name: "Area Sosta Camper Borgo Valsugana", location: "Via Temanza, Borgo Valsugana", rating: "4.0 / 5", services: "Area comunale gratuita con camper service lungo la pista ciclabile della Valsugana", whyOmittedNote: "Dista oltre 15 km da Levico. Ottima per cicloturismo, ma troppo distante per vivere Levico e il lido a piedi con la carrozzina." }
    ],
    babyTips: {
      feedingSpots: 'Prato inglese fronte lago o panchine del pontile',
      diaperPoints: 'Camper a 2 minuti dal bagnasciuga',
      comfortNotes: 'Le acque del lago di Levico sono tra le più pulite e calme d’Europa: aria rigenerante'
    },
    medicalNearby: {
      pharmacy: 'Farmacia Centrale Levico - Via Dante 18 (Tel. 0461 706121)',
      urgentCare: 'Ospedale San Lorenzo di Borgo Valsugana (12 km) / Ospedale Santa Chiara di Trento (20 km)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Polenta con funghi porcini della Valsugana', 'Vezzena DOP di malga', 'Frutti di bosco di Sant’Orsola'],
      recommendedSpots: 'Ristorante La Taverna sul lago (terrazza riscaldata vista acqua)'
    },
    specialSpots: [
      { type: "Pasticceria Storica", name: "Pasticceria Milano", location: "Levico Terme (centro)", description: "Pasticceria artigianale storica del centro con biscotteria e torte da credenza della tradizione asburgica." },
      { type: "Ristorante Slow Food", name: "Ristorante Boivin", location: "Levico Terme", description: "Chiocciola Slow Food con cucina del territorio, carni locali e formaggi tipici della Valsugana." },
      { type: "Eco-Ristorazione", name: "Liberty Bistrot", location: "Levico Terme", description: "Cucina salutare ed eco-ristorazione trentina con prodotti bio a filiera corta." }
    ]
  },
  {
    id: 8,
    dayNumber: 9,
    date: '23 Set',
    title: 'La Strada dei Pescatori e il Prato sul Lago',
    route: 'Spostamenti a piedi a Levico Terme',
    distanceKm: 0,
    drivingTime: '0 min (Camper fermo)',
    altitudeMeters: 440,
    baseName: 'Lago di Levico (Base 3)',
    nightsInBase: 3,
    mobility: 'Carrozzina',
    summary: 'Esplorazione del tratto iniziale pianeggiante della celebre Strada dei Pescatori che costeggia il lago a pelo d’acqua tra boschi di conifere.',
    coordinates: [46.0089, 11.3039],
    schedule: [
      { time: '09:30', activity: 'Colazione rilassata vista lago e poppata', note: 'Calma assoluta prima di uscire' },
      { time: '10:30', activity: 'Passeggiata sulla prima parte della Strada dei Pescatori', note: 'Sentiero in terra battuta liscio e compatto; procedere finché il fondo è agevole con carrozzina' },
      { time: '12:30', activity: 'Pranzo sul prato o in piazzola', note: 'Riposo pomeridiano con vista aperta' },
      { time: '15:30', activity: 'Merenda e passeggiata rilassata al Parco delle Tavernette', note: 'Viali fioriti e panchine ombreggiate' },
      { time: '18:00', activity: 'Tramonto dorato sul lago e rientro in camper', note: 'Aria pulita e sonno profondo garantito' }
    ],
    morningProposal: {
      title: 'Strada dei Pescatori (Tratto Iniziale)',
      description: 'Il sentiero naturalistico che costeggia la riva nord-ovest: bosco di pini, anatre e cigni.',
      timeEstimate: 'Circa 1h30 andata e ritorno'
    },
    afternoonProposal: {
      title: 'Pomeriggio di Prato e Lettura al Lido',
      description: 'Stendere una coperta all’ombra per giocare e rilassarsi con Eden all’aria aperta.',
      timeEstimate: 'Pomeriggio libero'
    },
    rainPlan: {
      title: 'Centro Storico Coperto di Levico Terme',
      indoorActivity: 'Porticati e bar storici lungo Via Dante e Piazza della Chiesa a Levico paese.',
      notes: 'Possibilità di raggiungere il paese a piedi o taxi breve in caso di pioggia.'
    },
    walkDetails: {
      pathName: 'Strada dei Pescatori - Settore Sud',
      surface: 'Ghiaia fine battuta e terreno piano',
      strollerAccessibility: 'Ottima nel primo chilometro; invertire la rotta se compaiono radici sporgenti',
      shadeLevel: 'Totale (bosco di conifere a riva d’acqua)'
    },
    camperStop: {
      name: 'Area Camper Lago di Levico',
      coordinates: [46.0065, 11.2982],
      has220V: true,
      services: 'Allaccio 220V attivo',
      notes: 'Seconda notte consecutiva al lago'
    },
    babyTips: {
      feedingSpots: 'Panchine in legno affacciate sulle canne di palude',
      diaperPoints: 'Camper a pochi minuti a piedi',
      comfortNotes: 'Il profumo di pino silvestre e resina ha un naturale effetto rilassante su Eden'
    },
    medicalNearby: {
      pharmacy: 'Farmacia Centrale Levico - Via Dante 18 (Tel. 0461 706121)',
      urgentCare: 'Ospedale Borgo Valsugana (12 km)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Polenta taragna con formaggio fuso', 'Treccia mochena ai mirtilli'],
      recommendedSpots: 'Panificio Pasticceria Aneghe Taneghe (dolci tipici della Valsugana)'
    }
  },
  {
    id: 10,
    dayNumber: 10,
    date: '24 Set',
    title: 'Il Parco Monumentale Asburgico e il Borgo di Levico',
    route: 'Spostamenti a piedi a Levico Terme',
    distanceKm: 0,
    drivingTime: '0 min (Camper fermo)',
    altitudeMeters: 500,
    baseName: 'Lago di Levico (Base 3)',
    nightsInBase: 3,
    mobility: 'Carrozzina',
    summary: 'Visita al magnifico Parco Asburgico delle Terme di Levico: 12 ettari di alberi monumentali piantati dalla corte imperiale austriaca e viali curati per carrozzina.',
    coordinates: [46.0125, 11.3025],
    schedule: [
      { time: '10:00', activity: 'Salita verso il Parco Asburgico di Levico', note: 'Viali ampi e pianeggianti con ghiaia fine battuta, rampa dolce all’ingresso' },
      { time: '10:30', activity: 'Passeggiata sotto le tuie giganti e le sequoie secolari', note: 'Aria fresca e profumata, massima ombra e silenzio' },
      { time: '12:30', activity: 'Pranzo in centro a Levico lungo Via Regia o rientro in piazzola', note: 'I portici e i caffè storici asburgici' },
      { time: '15:30', activity: 'Visita alla Villa Sissi e all’anello floreale centrale', note: 'Fontane d’acqua limpida e panchine comode per l’allattamento' },
      { time: '18:00', activity: 'Rientro all’area camper sul lago e preparativi per il trasferimento sul Garda di domani', note: 'Chiusura terza notte in Valsugana' }
    ],
    morningProposal: {
      title: 'Parco Asburgico delle Terme',
      description: 'Il parco storico più grande del Trentino: viali larghi, siepi geometriche e alberi monumentali.',
      timeEstimate: '2h di passeggiata immersi nella quiete'
    },
    afternoonProposal: {
      title: 'Via Regia & Centro Storico di Levico',
      description: 'Passeggiata tra botteghe in pietra, case con balconi fioriti e forni tradizionali.',
      timeEstimate: '1h30'
    },
    rainPlan: {
      title: 'Padiglione delle Feste e Porticati Termali',
      indoorActivity: 'La storica struttura coperta in stile Liberty nel Parco Asburgico e i portici del centro offrono riparo completo con pavimentazione in pietra levigata.',
      notes: 'Ambiente silenzioso e ideale per ripararsi con Eden.'
    },
    walkDetails: {
      pathName: 'Viali del Parco Asburgico',
      surface: 'Ghiaia finissima compattata e lastricato liscio',
      strollerAccessibility: '100% accessibile senza gradini',
      shadeLevel: 'Massima (alberi secolari monumentali)'
    },
    camperStop: {
      name: 'Area Camper Lago di Levico (Località Lido)',
      coordinates: [46.0065, 11.2982],
      has220V: true,
      services: 'Allaccio 220V, scarico e carico completi prima di partire domani',
      notes: 'Terza e ultima notte a Levico'
    },
    babyTips: {
      feedingSpots: 'Panchine in ferro battuto intorno alla fontana centrale del parco',
      diaperPoints: 'Servizi igienici della palazzina termale con fasciatoio',
      comfortNotes: 'Il Parco Asburgico è noto per la purezza dell’aria e la totale assenza di auto'
    },
    medicalNearby: {
      pharmacy: 'Farmacia Centrale Levico - Via Dante 18 (Tel. 0461 706121)',
      urgentCare: 'Ospedale Borgo Valsugana (12 km) / Ospedale Santa Chiara Trento',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Speck trentino artigianale tagliato al coltello', 'Formaggio Lagorai'],
      recommendedSpots: 'Bottega dei Sapori di Levico (Via Regia)'
    }
  }
];
