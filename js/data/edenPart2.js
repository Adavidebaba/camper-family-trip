/**
 * Dati Tappe 6 - 10 per l'itinerario con Eden (20 - 24 Settembre 2026)
 * Basi: fine Comano (Base 2), Lago di Levico (Base 3, notti 1-3) e inizio Lazise (Base 4, notte 1)
 */
export const EDEN_PART_2 = [
  {
    id: 6,
    dayNumber: 6,
    date: '20 Set',
    title: 'Escursione Facoltativa alle Palafitte di Fiavé',
    route: 'Ponte Arche ↔ Fiavé (8 km)',
    distanceKm: 16,
    drivingTime: '15 min a tratta',
    altitudeMeters: 660,
    baseName: 'Ponte Arche / Comano (Base 2)',
    nightsInBase: 3,
    mobility: 'Carrozzina',
    summary: 'Breve gita facoltativa verso l’Altopiano di Fiavé (quota 660 m, perfettamente sicura per la neonata). Passerella in legno pianeggiante nel Parco Archeo-Natura.',
    coordinates: [46.0028, 10.8422],
    schedule: [
      { time: '10:00', activity: 'Breve spostamento col camper fino al parcheggio del Parco Palafitte di Fiavé', note: 'Ampio parcheggio piana all’ingresso' },
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
      services: 'Allaccio 220V, carico acqua pulita prima del trasferimento',
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
    }
  },
  {
    id: 7,
    dayNumber: 7,
    date: '21 Set',
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
      { time: '10:00', activity: 'Partenza post-poppata da Comano verso la Gardesana / Trento', note: 'Strada scorrevole con tunnel ben illuminati' },
      { time: '11:15', activity: 'Transito per Trento e imbocco della Valsugana SS47', note: 'Percorso veloce e senza curve brusche' },
      { time: '11:45', activity: 'Arrivo all’Area Sosta Camper sul Lago di Levico', note: 'Posizionamento vicino alla riva, allaccio 220V' },
      { time: '13:00', activity: 'Pranzo con vista sulle acque smeraldo del lago', note: 'Pranzo rilassato in veranda' },
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
      indoorActivity: 'Locale ampio con ampie vetrate panoramiche sulle acque del lago, caldo e con spazi larghi per la carrozzina.',
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
      notes: 'Base magnifica: permette di vivere il lago a piedi ogni giorno. Alternativa: Camping Lago di Levico.'
    },
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
    }
  },
  {
    id: 8,
    dayNumber: 8,
    date: '22 Set',
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
      notes: 'Possibilità di raggiungere il paese in camper o taxi breve in caso di pioggia battente.'
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
    id: 9,
    dayNumber: 9,
    date: '23 Set',
    title: 'Il Parco Monumentale Asburgico e il Borgo di Levico',
    route: 'Spostamenti a piedi / navetta a Levico Terme',
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
      { time: '18:00', activity: 'Rientro all’area camper sul lago e preparativi per il trasferimento di domani', note: 'Chiusura terza notte in Valsugana' }
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
  },
  {
    id: 10,
    dayNumber: 10,
    date: '24 Set',
    title: 'Discesa verso il Basso Garda e il Borgo Scaligero di Lazise',
    route: 'Levico Terme → Rovereto → Lazise',
    distanceKm: 110,
    drivingTime: '1h30–2h',
    altitudeMeters: 75,
    baseName: 'Lazise (Base 4)',
    nightsInBase: 3,
    mobility: 'Carrozzina',
    summary: 'Discesa graduale lungo la Val d’Adige verso la sponda veronese del Lago di Garda. Arrivo a Lazise e prima passeggiata al porto vecchio e chiesetta di San Nicolò.',
    coordinates: [45.5056, 10.7328],
    schedule: [
      { time: '10:00', activity: 'Partenza da Levico scendendo sulla SS47 e A22 del Brennero', note: 'Discesa a bassa quota verso il clima caldo e temperato del lago di Garda' },
      { time: '11:45', activity: 'Uscita ad Affi e arrivo a Lazise', note: 'Posizionamento camper al Parcheggio Marra o Camping du Parc, a 5-10 min a piedi dal centro' },
      { time: '13:00', activity: 'Pranzo in camper e poppata di benvenuto nel veronese', note: 'Clima molto mite rispetto ai monti' },
      { time: '16:00', activity: 'Prima passeggiata al porto vecchio di Lazise e chiesetta di San Nicolò', note: 'Porto veneziano con gondole, lastricato liscio e mura possenti' },
      { time: '18:30', activity: 'Aperitivo lungolago e tramonto infuocato sulla sponda bresciana', note: 'Spettacolo imperdibile con le luci della sera' }
    ],
    morningProposal: {
      title: 'Discesa panoramica della Val d’Adige',
      description: 'Percorso veloce e fluido su autostrada a 4 corsie tra vigneti di Teroldego e castelli trentini.',
      timeEstimate: '1h30 di guida dolce'
    },
    afternoonProposal: {
      title: 'Porto Vecchio di Lazise & Chiesetta di San Nicolò',
      description: 'L’antico porto lacustre medievale circondato da caffè e viali pavimentati.',
      timeEstimate: '1h30 a piedi con carrozzina'
    },
    rainPlan: {
      title: 'Dogana Veneta Coperta & Porticati di Lazise',
      indoorActivity: 'La Dogana Veneta del Trecento affacciata sull’acqua e i portici del corso principale offrono protezione totale.',
      notes: 'Superfici piatte e comode per la carrozzina.'
    },
    walkDetails: {
      pathName: 'Porto Vecchio & Lungolago Marconi',
      surface: 'Lastricato in marmo liscio e cubetti di porfido complanari',
      strollerAccessibility: '100% accessibile senza alcuna barriera',
      shadeLevel: 'Tamerici e platani sul lungolago'
    },
    camperStop: {
      name: 'Parcheggio Camper Marra (Lazise - via Prà del Principe)',
      coordinates: [45.5038, 10.7352],
      has220V: true,
      services: 'Allaccio 220V, carico/scarico, a 300 metri dalle mura storiche e dal porto',
      notes: 'Posizione insuperabile per vivere Lazise a piedi senza mai toccare il camper. Alternativa: Camping du Parc.'
    },
    babyTips: {
      feedingSpots: 'Panchine in pietra fronte acqua vicino alla Dogana Veneta',
      diaperPoints: 'Camper vicinissimo a 5 minuti a piedi dal centro',
      comfortNotes: 'Lazise a fine settembre gode di un tepore ideale per tenere Eden all’aperto'
    },
    medicalNearby: {
      pharmacy: 'Farmacia San Marco - Via Fontana 14, Lazise (Tel. 045 7580045)',
      urgentCare: 'Clinica Pederzoli di Peschiera del Garda (a 8 km) / Polo Pediatrico Borgo Trento Verona (25 min)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Risotto al pesce persico del Garda', 'Luccio in salsa con polenta brustolà', 'Vino Bardolino DOC'],
      recommendedSpots: 'Trattoria Alla Grotta o Ristorante Il Porticciolo (tavoli all’aperto spaziosi)'
    }
  }
];
