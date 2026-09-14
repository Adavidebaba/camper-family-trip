/**
 * Dati Tappe 11 - 15 per l'itinerario con Eden (25 - 29 Settembre 2026)
 * Basi: Lazise (Base 4, notti 1-3/3), Lucca (Notte 14 Strategica) e Rientro a Pisa alle 11:00
 */
export const EDEN_PART_3 = [
  {
    id: 11,
    dayNumber: 11,
    date: '25 Set',
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
      { time: '10:00', activity: 'Partenza da Levico scendendo sulla SS47 e A22 del Brennero', note: 'Discesa verso il clima temperato del Garda veronese' },
      { time: '11:45', activity: 'Uscita ad Affi e arrivo a Lazise', note: 'Posizionamento camper al Parcheggio Marra o Camping du Parc, a 5-10 min a piedi dal centro' },
      { time: '13:00', activity: 'Pranzo in camper e poppata di benvenuto nel veronese', note: 'Clima caldo e soleggiato sul lago' },
      { time: '16:00', activity: 'Prima passeggiata al porto vecchio di Lazise e chiesetta di San Nicolò', note: 'Porto veneziano con gondole, lastricato liscio e mura possenti' },
      { time: '18:30', activity: 'Aperitivo lungolago e tramonto dorato sulla sponda bresciana', note: 'Spettacolo imperdibile con le luci della sera' }
    ],
    morningProposal: {
      title: 'Discesa panoramica della Val d’Adige',
      description: 'Percorso scorrevole e fluido su autostrada a 4 corsie tra i vigneti trentini e le fortezze storiche.',
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
      notes: 'Posizione insuperabile per vivere Lazise a piedi senza mai toccare il camper. Prima notte a Lazise.'
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
    },
    specialSpots: [
      { type: "Gelateria d'eccellenza", name: "La Cremeria di Lazise", location: "Lazise (centro)", description: "Gelato naturale artigianale preparato con latte fresco intero e dolci da passeggio." },
      { type: "Agriturismo Km 0", name: "Agriturismo Le Tese", location: "Lazise", description: "Pasta fresca all'uovo tirata a mano, ortaggi di stagione e carni locali a filiera cortissima." },
      { type: "Fattoria Biodinamica", name: "La Pesenata", location: "Colà di Lazise", description: "Coltivazioni biologiche naturali senza chimica, animali da cortile e degustazioni contadine all'aperto." }
    ],
    freeCamperAlternatives: [
      { name: "Area di Sosta Località Pol", location: "Località Pol 18, Pastrengo", rating: "4.4 / 5", services: "Parcheggio pianeggiante e gratuito su asfalto", whyOmittedNote: "Dista circa 5 km da Lazise e 6 km dal parco termale di Colà. Sebbene comoda e gratuita, si trova nell'entroterra e costringe ad accendere e spostare il camper per raggiungere il lungolago e il centro a piedi con la carrozzina." }
    ]
  },
  {
    id: 12,
    dayNumber: 12,
    date: '26 Set',
    title: 'Mura Scaligere Medievali e Lungolago verso Cisano',
    route: 'Spostamenti a piedi a Lazise',
    distanceKm: 0,
    drivingTime: '0 min (Camper fermo)',
    altitudeMeters: 75,
    baseName: 'Lazise (Base 4)',
    nightsInBase: 3,
    mobility: 'Carrozzina',
    summary: 'Passeggiata lungo la cerchia muraria scaligera, la maestosa Porta del Lion e camminata a filo d’acqua verso la frazione di Cisano su pista ciclabile liscia.',
    coordinates: [45.5056, 10.7328],
    schedule: [
      { time: '09:30', activity: 'Colazione calma col profumo del lago e poppata mattutina', note: 'Zero fretta, giornata interamente a piedi' },
      { time: '10:30', activity: 'Giro delle Mura Scaligere e Piazza Vittorio Emanuele', note: 'Pavimentazione a scacchiera liscia, ideale per cullare Eden con la carrozzina' },
      { time: '12:30', activity: 'Pranzo in piazzola o bistrot all’aperto sul porto', note: 'Riposo pomeridiano nella tranquillità del camper' },
      { time: '16:00', activity: 'Passeggiata sul lungolago pedonale verso Cisano / Bardolino', note: 'Percorso asfaltato a filo d’acqua, totalmente pianeggiante' },
      { time: '18:30', activity: 'Rientro a Lazise per ammirare le mura illuminate', note: 'Atmosfera magica di fine estate' }
    ],
    morningProposal: {
      title: 'Mura Scaligere & Piazza Vittorio Emanuele',
      description: 'Il cuore pedonale di Lazise: torri merlate, porte trecentesche e viali senza auto.',
      timeEstimate: '1h30 di cammino disteso'
    },
    afternoonProposal: {
      title: 'Passeggiata a Filo d’Acqua verso Cisano',
      description: 'La pista litoranea alberata che unisce Lazise a Cisano e Bardolino.',
      timeEstimate: '2h andata e ritorno (accorciabile a piacere)'
    },
    rainPlan: {
      title: 'Caffè storici e porticati di Piazza Vittorio Emanuele',
      indoorActivity: 'Locali ampi e riscaldati per allattare o pranzare protetti dalla pioggia.',
      notes: 'Non usare le terme di Colà per Eden: le acque termali non sono adatte ai neonati.'
    },
    walkDetails: {
      pathName: 'Pista Ciclopedonale Lazise - Cisano',
      surface: 'Asfalto colato perfetto e pontili in legno complanari',
      strollerAccessibility: '100% adatta a carrozzine e passeggini',
      shadeLevel: 'Tamerici, salici e oleandri lungolago'
    },
    camperStop: {
      name: 'Parcheggio Camper Marra (Lazise)',
      coordinates: [45.5038, 10.7352],
      has220V: true,
      services: 'Allaccio 220V continuo',
      notes: 'Seconda notte nella stessa piazzola: stabilità ideale per Eden'
    },
    babyTips: {
      feedingSpots: 'Panchine verdi fronte canneto tra Lazise e Cisano',
      diaperPoints: 'Camper sempre raggiungibile a piedi',
      comfortNotes: 'Fondo stradale eccezionale: nessun sobbalzo per la testa della bimba'
    },
    medicalNearby: {
      pharmacy: 'Farmacia San Marco - Via Fontana 14 (Tel. 045 7580045)',
      urgentCare: 'Pronto Soccorso Peschiera del Garda (8 km)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Bigoli con le sarde di lago', 'Tortellini di Valeggio sul Mincio', 'Gelato artigianale di Lazise'],
      recommendedSpots: 'Ristorante Pizzeria Cordonego (spazio per passeggino)'
    }
  },
  {
    id: 13,
    dayNumber: 13,
    date: '27 Set',
    title: 'Giornata Stanziale: Borgo, Giardini e Campagna del Garda',
    route: 'Spostamenti a piedi a Lazise',
    distanceKm: 0,
    drivingTime: '0 min (Camper fermo)',
    altitudeMeters: 75,
    baseName: 'Lazise (Base 4)',
    nightsInBase: 3,
    mobility: 'Carrozzina',
    summary: 'Giornata di relax completo sul Garda veronese: colazione nei vicoli storici, lettura vista lago e visita facoltativa alla fattoria biologica La Pesenata a Colà.',
    coordinates: [45.5056, 10.7328],
    schedule: [
      { time: '09:30', activity: 'Colazione serena con brioche fresche e poppata', note: 'Ritmi lenti senza sveglia' },
      { time: '10:30', activity: 'Passeggiata rilassata tra le corti e botteghe del borgo antico', note: 'Vicoli fioriti e scorci medievali silenziosi al mattino' },
      { time: '12:30', activity: 'Pranzo in piazzola o piatto tipico da asporto', note: 'Nanna prolungata di Eden' },
      { time: '15:30', activity: 'Pomeriggio sul prato o visita facoltativa a una fattoria biologica', note: 'In alternativa breve visita a La Pesenata (Colà) per prodotti contadini bio' },
      { time: '18:00', activity: 'Verifica camper e carico acque in vista della discesa di domani', note: 'Tutto pronto con calma' }
    ],
    morningProposal: {
      title: 'I Vicoli Segreti e i Giardini di Lazise',
      description: 'Passeggiata tranquilla tra le corti fiorite interne, lontani dalla folla del lungolago.',
      timeEstimate: '1h30'
    },
    afternoonProposal: {
      title: 'Relax al Parco o Visita Agricola Facoltativa',
      description: 'Sosta serena sui prati del lago oppure breve visita agricola a misura di carrozzina.',
      timeEstimate: 'Pomeriggio libero'
    },
    rainPlan: {
      title: 'Botteghe e frantoi del basso Garda',
      indoorActivity: 'Visita coperta al Museo dell’Olio di Cisano a pochi minuti, interamente al chiuso e accessibile in carrozzina.',
      notes: 'Ottima alternativa culturale e al caldo.'
    },
    walkDetails: {
      pathName: 'Centro e Parco Villa Pergolana',
      surface: 'Asfalto e lastricato piano',
      strollerAccessibility: 'Eccellente',
      shadeLevel: 'Platani e pini'
    },
    camperStop: {
      name: 'Parcheggio Camper Marra (Lazise)',
      coordinates: [45.5038, 10.7352],
      has220V: true,
      services: 'Allaccio 220V, scarico grigie e nere, carico acqua pulita',
      notes: 'Terza e ultima notte a Lazise: domani si scende verso la Toscana'
    },
    babyTips: {
      feedingSpots: 'Giardini ombreggiati del Parco Comunale di Lazise',
      diaperPoints: 'Camper a portata di mano',
      comfortNotes: 'Giorno perfetto per controllare le scorte di pannolini per Eden prima del viaggio'
    },
    medicalNearby: {
      pharmacy: 'Farmacia San Marco - Via Fontana 14 (Tel. 045 7580045)',
      urgentCare: 'Pronto Soccorso Peschiera del Garda (8 km)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Olio extravergine di oliva Garda DOP', 'Focaccia con cipolle e rosmarino'],
      recommendedSpots: 'Frantoio del Garda per acquisto olio artigianale'
    }
  },
  {
    id: 14,
    dayNumber: 14,
    date: '28 Set',
    title: 'Discesa verso la Toscana: Valico della Cisa e Tappa a Lucca',
    route: 'Lazise → A22/A1 → Cisa A15 → Lucca',
    distanceKm: 240,
    drivingTime: '2h45–3h15 (con sosta poppata a Pontremoli)',
    altitudeMeters: 20,
    baseName: 'Lucca (Tappa Strategica Notte 14)',
    nightsInBase: 1,
    mobility: 'Carrozzina',
    summary: 'Discesa pomeridiana superando il valico della Cisa senza fretta durante il sonnellino di Eden. Arrivo a Lucca per l’ultima serata: passeggiata magnifica in carrozzina sopra le leggendarie Mura alberate.',
    coordinates: [43.8430, 10.5080],
    schedule: [
      { time: '10:00', activity: 'Partenza post-poppata da Lazise imboccando la A22 del Brennero', note: 'Eden si assopisce col dondolio regolare della marcia' },
      { time: '12:00', activity: 'Pausa pranzo e poppata nella Lunigiana appenninica (Pontremoli)', note: 'Aria fresca dell’Appennino toscano e sosta pannolino in camper' },
      { time: '13:30', activity: 'Prosecuzione serena lungo la A15 e raccordo A11 verso Lucca', note: 'Appennino già superato: zero pensieri di traffico o code per domani!' },
      { time: '15:00', activity: 'Arrivo all’Area Camper Il Serchio a Lucca', note: 'Piazzola alberata, tranquilla, allaccio 220V e a 10 min a piedi da Porta Sant’Anna' },
      { time: '16:30', activity: 'Passeggiata sopra le Mura Rinascimentali di Lucca in carrozzina', note: 'Anello monumentale di 4 km largo 30 metri, tutto asfaltato, alberato e chiuso alle auto' },
      { time: '18:30', activity: 'Ultimo gelato e aperitivo in Piazza dell’Anfiteatro', note: 'Atmosfera toscana rilassata per celebrare l’ultima sera del viaggio' }
    ],
    morningProposal: {
      title: 'Valico della Cisa & Pranzo in Lunigiana',
      description: 'Guida comoda lungo la A15 con sosta ristoratrice a Pontremoli prima di raggiungere la piana lucchese.',
      timeEstimate: '2h di viaggio + sosta'
    },
    afternoonProposal: {
      title: 'La Passeggiata Sulle Mura Alberate di Lucca',
      description: 'Uno dei percorsi pedonali più celebri al mondo per carrozzine: viali monumentali, platani e baluardi storici.',
      timeEstimate: '2h con carrozzina'
    },
    rainPlan: {
      title: 'Portici di Piazza San Michele e Caffè di Lucca',
      indoorActivity: 'I magnifici porticati medievali e i caffè storici del centro di Lucca offrono riparo impeccabile con rampe.',
      notes: 'Pavimentazione del centro storico piana e liscia.'
    },
    walkDetails: {
      pathName: 'Anello delle Mura Urbane di Lucca',
      surface: 'Asfalto liscio complanare e terra battuta fine',
      strollerAccessibility: '100% adatta a carrozzina (nessun gradino sulle rampe dei baluardi)',
      shadeLevel: 'Massima (fitte alberature monumentali continue)'
    },
    camperStop: {
      name: 'Area Camper Il Serchio (Lucca - Via del Tiro a Segno)',
      coordinates: [43.8475, 10.4885],
      has220V: true,
      services: 'Allaccio 220V, camper service, docce calde, recintata e custodita, a 1 km dalle Mura',
      notes: 'Sosta strategica perfetta per l’ultima notte: a soli 25 minuti da Pisa per un rientro domattina senza alcun rischio.'
    },
    babyTips: {
      feedingSpots: 'Panchine ombreggiate sul Baluardo San Paolino delle Mura di Lucca',
      diaperPoints: 'Tavolo camper sempre pronto e riscaldato',
      comfortNotes: 'Essere già a Lucca azzera completamente ogni ansia da traffico per il rientro di domani mattina alle 11:00'
    },
    medicalNearby: {
      pharmacy: 'Farmacia Comunale 24h Lucca - Piazza del Carmine (Tel. 0583 496660)',
      urgentCare: 'Pronto Soccorso Ospedale San Luca di Lucca (a 4 km)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Torta coi becchi al cioccolato lucchese', 'Buccellato fresco con uvetta e anice', 'Zuppa di farro alla lucchese'],
      recommendedSpots: 'Pasticceria Taddeucci (Piazza San Michele) per il celebre Buccellato artigianale'
    }
  },
  {
    id: 15,
    dayNumber: 15,
    date: '29 Set (Mattina)',
    title: 'Rientro Trionfale a Pisa (Arrivo Ore 11:00 Precise)',
    route: 'Lucca → SS12 / A12 → Pisa',
    distanceKm: 22,
    drivingTime: '25 min (partenza ore 10:15 post-poppata)',
    altitudeMeters: 10,
    baseName: 'Pisa (Rientro a Casa ore 11:00)',
    nightsInBase: 0,
    mobility: 'Ovetto',
    summary: 'Tratta finale brevissima di appena 22 km. Sveglia serena a Lucca, colazione con buccellato, ultima poppata e partenza alle 10:15 per tagliare il traguardo a Pisa alle ore 11:00 in punto.',
    coordinates: [43.7228, 10.4017],
    schedule: [
      { time: '08:30', activity: 'Risveglio dolce all’Area Camper di Lucca e colazione rilassata', note: 'Buccellato artigianale fresco e caffè in dinette' },
      { time: '09:30', activity: 'Ultima poppata comoda di Eden e cambio pannolino', note: 'Nessuna fretta: la tratta da fare dura meno di mezz’ora!' },
      { time: '10:15', activity: 'Chiusura torretta 220V, sistemazione di Eden nell’ovetto e partenza', note: 'Percorso veloce e lineare su SS12 del Brennero verso Pisa' },
      { time: '10:45–11:00', activity: 'Arrivo a Pisa al rimessaggio / casa alle 11:00 precise', note: 'Missione compiuta! Scarico bagagli sereno e coccole a casa con la bimba' },
      { time: '12:30', activity: 'Pranzo di bentornati a Pisa in famiglia', note: '15 giorni perfetti, 14 notti rigeneranti e ricordi indimenticabili per tutta la vita' }
    ],
    morningProposal: {
      title: 'Colazione & Tratta Finale Dolce',
      description: 'Solo 22 km di asfalto piano tra Lucca e Pisa passando per i Monti Pisani.',
      timeEstimate: '25 min di guida serena'
    },
    afternoonProposal: {
      title: 'Bentornati a Casa Eden!',
      description: 'Sistemazione del camper, lavatrici e riposino di Eden nella sua culla domestica.',
      timeEstimate: 'Pomeriggio di festa a casa'
    },
    rainPlan: {
      title: 'Rientro Protetto in Camper',
      indoorActivity: 'Viaggio brevissimo interamente coperto fino al parcheggio di casa.',
      notes: 'Massima comodità e zero fatica.'
    },
    walkDetails: {
      pathName: 'Rientro a casa a Pisa',
      surface: 'Asfalto e marciapiedi di casa',
      strollerAccessibility: '100% accessibile',
      shadeLevel: 'Ombreggiatura'
    },
    camperStop: {
      name: 'Rimessaggio Camper / Casa a Pisa',
      coordinates: [43.7228, 10.4017],
      has220V: true,
      services: 'Allaccio 220V di casa, pulizia finale',
      notes: 'Bentornati a casa Eden, mamma e papà! Il primo grande viaggio in camper è stato un successo.'
    },
    babyTips: {
      feedingSpots: 'Poltrona di casa a Pisa',
      diaperPoints: 'Fasciatoio di casa',
      comfortNotes: 'Eden è cresciuta, acclimatata e serena: l’aria fresca dei laghi e dei parchi le ha fatto benissimo!'
    },
    medicalNearby: {
      pharmacy: 'Tutte le farmacie di Pisa',
      urgentCare: 'Azienda Ospedaliero-Universitaria Pisana (Cisanello / Santa Chiara Pediatria)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Pappa al pomodoro', 'Torta coi bischeri pisana'],
      recommendedSpots: 'Pranzo e cena a casa celebrando il road trip'
    }
  }
];
