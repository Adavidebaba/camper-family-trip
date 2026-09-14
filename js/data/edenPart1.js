/**
 * Dati Tappe 1 - 5 per l'itinerario con Eden (15 - 19 Settembre 2026)
 * Basi: Sarzana (Sosta Tattica Notte 1), Riva del Garda (Base 1, notti 1-3) e inizio Comano (Base 2, notte 1/3)
 */
export const EDEN_PART_1 = [
  {
    id: 1,
    dayNumber: 1,
    date: '15 Set (Sera)',
    title: 'Partenza Serale Tattica: Pisa → Sarzana',
    route: 'Pisa → Sarzana (Val di Magra)',
    distanceKm: 65,
    drivingTime: '50 min (partenza dopo le 20:00)',
    altitudeMeters: 25,
    baseName: 'Sarzana (Sosta Tattica Notte 1)',
    nightsInBase: 1,
    mobility: 'Ovetto',
    summary: 'Partenza serale post-poppata dopo le 20:00. Guida breve e lineare di circa 50 minuti per oltrepassare il confine ligure-toscano e dormire già pronti all’imbocco della Cisa.',
    coordinates: [44.1132, 9.9638],
    schedule: [
      { time: '20:00', activity: 'Ultima poppata comoda e cambio pannolino a casa a Pisa', note: 'Camper già stivato, culla di Eden pronta con lenzuolina e sacco nanna' },
      { time: '20:30', activity: 'Partenza tranquilla da Pisa sulla A12 verso nord', note: 'Eden ben allacciata nell’ovetto omologato, dondolio rilassante dell’autostrada' },
      { time: '21:20', activity: 'Arrivo all’Area Sosta Camper di Sarzana (Piazza Terzi)', note: 'Accesso comodo e immediato a soli 5 minuti dall’uscita autostradale di Sarzana' },
      { time: '21:35', activity: 'Allaccio 220V rapido, stabilizzatori e nanna serena', note: 'Nessun rumore, temperatura fresca notturna, prima notte perfetta in camper' }
    ],
    morningProposal: {
      title: 'Pomeriggio di Preparazione a Casa',
      description: 'Stivaggio calmo del camper a Pisa durante il giorno, senza fretta né ansia da partenza.',
      timeEstimate: 'Pomeriggio libero a casa'
    },
    afternoonProposal: {
      title: 'Partenza Post-Cena & Arrivo Serale',
      description: 'Tragitto breve di soli 65 km in orario di sonno profondo per Eden.',
      timeEstimate: '50 min di guida'
    },
    rainPlan: {
      title: 'Allaccio e Notte al Calduccio',
      indoorActivity: 'Allaccio rapido alla torretta 220V e stufa/clima impostato sulla temperatura ideale per il sonno della neonata (20–21 °C).',
      notes: 'Piazzola pavimentata e pianeggiante, scarpe asciutte.'
    },
    walkDetails: {
      pathName: 'Piazzola Area Sosta Piazza Terzi',
      surface: 'Asfalto liscio e autobloccanti complanari',
      strollerAccessibility: '100% accessibile',
      shadeLevel: 'Area illuminata e protetta'
    },
    camperStop: {
      name: 'Area Camper Piazza Terzi (Sarzana)',
      coordinates: [44.1132, 9.9638],
      has220V: true,
      services: 'Allaccio 220V, carico/scarico, sbarra automatica d’accesso, illuminata',
      notes: 'Perfetta per la sosta della prima notte: silenziosa, vicina al casello e a 200m dal borgo antico.'
    },
    babyTips: {
      feedingSpots: 'Zona dinette riscaldata del camper prima di dormire',
      diaperPoints: 'Tavolo camper allestito con fasciatoio portatile',
      comfortNotes: 'Partire con la bimba già vestita per la notte: arrivati a Sarzana basta trasferirla dall’ovetto al lettino senza svegliarla'
    },
    medicalNearby: {
      pharmacy: 'Farmacia San Giorgio - Via Landinelli 60, Sarzana (Tel. 0187 620244)',
      urgentCare: 'Pronto Soccorso Ospedale San Bartolomeo di Sarzana (a 2 km)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Spuntino serale leggero portato da casa o focaccia ligure per colazione'],
      recommendedSpots: 'Botteghe storiche di Sarzana per la mattina successiva'
    }
  },
  {
    id: 2,
    dayNumber: 2,
    date: '16 Set',
    title: 'Verso il Trentino: Cisa e Arrivo a Riva del Garda',
    route: 'Sarzana → Passo della Cisa → Riva del Garda',
    distanceKm: 260,
    drivingTime: '3h30–4h00 (con sosta poppata)',
    altitudeMeters: 70,
    baseName: 'Riva del Garda (Base 1)',
    nightsInBase: 3,
    mobility: 'Carrozzina',
    summary: 'Partenza mattutina da Sarzana imboccando direttamente la A15 della Cisa (già a 50 min di vantaggio da Pisa!). Sosta poppata rilassata in Emilia e arrivo pomeridiano sul Garda Trentino.',
    coordinates: [45.8858, 10.8524],
    schedule: [
      { time: '09:00', activity: 'Risveglio disteso, colazione e prima poppata a Sarzana', note: 'Calma assoluta, niente traffico mattutino da Pisa' },
      { time: '10:00', activity: 'Partenza imboccando la A15 della Cisa verso Parma e la A22', note: 'Valico appenninico dolce e discesa nella pianura padana' },
      { time: '11:45', activity: 'Sosta rigenerante in area di servizio attrezzata o a Mantova Sud', note: 'Poppata, cambio pannolino e passeggiata con carrozzina all’aria aperta' },
      { time: '14:00', activity: 'Risalita della Valle dell’Adige verso Rovereto Sud e Lago di Garda', note: 'Discesa panoramica verso Torbole e Riva' },
      { time: '15:15', activity: 'Arrivo a Riva del Garda (Area Camper Brione)', note: 'Posizionamento in piazzola, allaccio 220V e distensione gambe' },
      { time: '17:30', activity: 'Primo affaccio al lago a piedi con carrozzina verso Porto San Nicolò', note: 'Brezza lacustre delicata e viali pianeggianti tra oleandri e cipressi' }
    ],
    morningProposal: {
      title: 'Valico della Cisa & Pianura Emiliana',
      description: 'Guida regolare lungo la Cisa con sosta strategica prima del raccordo con la A22.',
      timeEstimate: 'Circa 2h15 di marcia'
    },
    afternoonProposal: {
      title: 'Arrivo al Lago & Primo Giro a San Nicolò',
      description: 'Sistemazione camper nell’area sosta Brione e passeggiata pianeggiante verso il porticciolo.',
      timeEstimate: 'Circa 1h a piedi'
    },
    rainPlan: {
      title: 'Pomeriggio Caldo in Camper',
      indoorActivity: 'Allaccio 220V immediato, riscaldamento delicato della cellula e nanna serena dopo la tratta autostradale.',
      notes: 'Nessun bisogno di forzare uscite sotto la pioggia il primo giorno.'
    },
    walkDetails: {
      pathName: 'Viale Rovereto verso Porto San Nicolò',
      surface: 'Marciapiedi ampi e asfalto liscio',
      strollerAccessibility: '100% adatto alla carrozzina',
      shadeLevel: 'Platani e verde cittadino'
    },
    camperStop: {
      name: 'Area Camper Brione (Riva del Garda - via Brione)',
      coordinates: [45.8885, 10.8572],
      has220V: true,
      services: 'Allaccio 220V, camper service, piazzole piane asfaltate, a 10 min a piedi dal lago',
      notes: 'Tranquilla e strategica per il settore est del lago. Prima delle 3 notti nella base di Riva.'
    },
    babyTips: {
      feedingSpots: 'Panchine del porto San Nicolò all’ombra del Forte Brione',
      diaperPoints: 'Tavolo camper sempre pronto e riscaldato',
      comfortNotes: 'Riva ha un microclima mite di lago: vestire Eden a cipolla'
    },
    medicalNearby: {
      pharmacy: 'Farmacia San Nicolò - Viale Rovereto 103, Riva (Tel. 0464 552194)',
      urgentCare: 'Pronto Soccorso Ospedale di Arco (a 5 km) con reparto Pediatria attivo',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Carne salada del Garda trentino', 'Olio extravergine DOP di Riva', 'Strudel di mele'],
      recommendedSpots: 'Ristorante La Colombera o asporto tipico trentino'
    },
    specialSpots: [
      { type: "Pasticceria d'eccellenza", name: "Garda Foodie", location: "Riva del Garda", description: "Lievitati soffici, sfoglie fragranti e monoporzioni artigianali con vista lago." },
      { type: "Ristorante Bio", name: "Bio Essere Café & Bistrot", location: "Arco", description: "Cucina naturale biologica a base di ingredienti freschi di stagione." }
    ],
    freeCamperAlternatives: [
      { name: "Parcheggio Caneve v.le Rovereto Arco", location: "Viale Rovereto 13, Arco", rating: "4.7 / 5", services: "Parcheggio comunale gratuito con camper service gratuito (carico e scarico)", whyOmittedNote: "Dista circa 5 km dalle spiagge di Riva del Garda. Sebbene collegata dalla ciclabile del fiume Sarca, non permette di uscire a piedi ogni giorno direttamente sul lungolago con la carrozzina senza dover spostare il camper." }
    ]
  },
  {
    id: 3,
    dayNumber: 3,
    date: '17 Set',
    title: 'San Nicolò, Spiaggia dei Pini e Lungolago',
    route: 'Spostamenti a piedi a Riva del Garda',
    distanceKm: 0,
    drivingTime: '0 min (Camper fermo)',
    altitudeMeters: 70,
    baseName: 'Riva del Garda (Base 1)',
    nightsInBase: 3,
    mobility: 'Carrozzina',
    summary: 'Giornata interamente senza guida: passeggiata liscia con carrozzina da San Nicolò verso la Spiaggia dei Pini e i Sabbioni tra giardini fioriti, cigni e brezza lacustre.',
    coordinates: [45.8858, 10.8524],
    schedule: [
      { time: '09:30', activity: 'Risveglio disteso e colazione in piazzola', note: 'Poppata calma con aria fresca del mattino' },
      { time: '10:30', activity: 'Passeggiata verso Porto San Nicolò e Spiaggia dei Pini', note: 'Percorso interamente ciclopedonale pavimentato, perfetto per la carrozzina' },
      { time: '12:30', activity: 'Rientro in camper per il pranzo e riposino', note: 'La piazzola al Brione è a soli 15 min di passo sereno' },
      { time: '16:00', activity: 'Passeggiata pomeridiana verso Spiaggia Sabbioni e Parco Miralago', note: 'Grandi prati alberati con panchine fronte lago' },
      { time: '18:30', activity: 'Caffè e gelato vista lago prima del calar del sole', note: 'Tramonto dorato sulle pareti della Rocchetta' }
    ],
    morningProposal: {
      title: 'Passeggiata San Nicolò e Spiaggia dei Pini',
      description: 'Lungo il nastro d’asfalto liscio a pelo d’acqua, tra le barche a vela e le anatre.',
      timeEstimate: '2h a passo d’uomo'
    },
    afternoonProposal: {
      title: 'Parco Miralago & Spiaggia Sabbioni',
      description: 'Prati curati all’inglese, siepi fiorite e panchine comode per l’allattamento.',
      timeEstimate: '1h30 di relax'
    },
    rainPlan: {
      title: 'MAG Museo Alto Garda & Caffè Storici',
      indoorActivity: 'La Rocca di Riva ospita il MAG con cortile interno coperto e sale espositive accessibili al pian terreno.',
      notes: 'I portici di Piazza III Novembre offrono ripari continui.'
    },
    walkDetails: {
      pathName: 'Ciclopedonale Riva - Torbole (Tratto Ovest)',
      surface: 'Asfalto liscio e viali in ghiaino fine compatto',
      strollerAccessibility: '100% adatta a carrozzine e passeggini',
      shadeLevel: 'Pini marittimi, salici piangenti e ulivi secolari'
    },
    camperStop: {
      name: 'Area Camper Brione (Riva del Garda)',
      coordinates: [45.8885, 10.8572],
      has220V: true,
      services: 'Allaccio 220V continuo',
      notes: 'Seconda notte nella stessa piazzola: zero stress da spostamento'
    },
    babyTips: {
      feedingSpots: 'Panchine di Parco Miralago di fronte alla Spiaggia Sabbioni',
      diaperPoints: 'Camper raggiungibile a piedi in 10-15 minuti',
      comfortNotes: 'La brezza lacustre pomeridiana (Ora del Garda) richiede un cappellino di cotone leggero per la bimba'
    },
    medicalNearby: {
      pharmacy: 'Farmacia San Nicolò - Riva del Garda (Tel. 0464 552194)',
      urgentCare: 'Pronto Soccorso Ospedale di Arco (5 km)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Pesce persico e coregone di lago', 'Polenta di Storo con formaggio di malga'],
      recommendedSpots: 'Ristorante Pizzeria Bavaria o Ristorante L’Ora'
    }
  },
  {
    id: 4,
    dayNumber: 4,
    date: '18 Set',
    title: 'Il Centro Storico di Riva, la Rocca e Tradizione Bio',
    route: 'Spostamenti a piedi a Riva del Garda',
    distanceKm: 0,
    drivingTime: '0 min (Camper fermo)',
    altitudeMeters: 70,
    baseName: 'Riva del Garda (Base 1)',
    nightsInBase: 3,
    mobility: 'Carrozzina',
    summary: 'Passeggiata verso il nucleo medievale di Riva: Piazza III Novembre, la Torre Apponale, il fossato della Rocca e visita rilassata dei giardini storici.',
    coordinates: [45.8858, 10.8524],
    schedule: [
      { time: '09:30', activity: 'Colazione calma e poppata di Eden al camper', note: 'Ritmo disteso senza sveglia' },
      { time: '10:30', activity: 'Camminata verso il centro storico pedonale di Riva', note: 'Marciapiedi complanari, passaggio attorno al porto vecchio' },
      { time: '12:30', activity: 'Pranzo sul lungolago o rientro al camper per il pisolino', note: 'Eden riposa nella massima quiete' },
      { time: '15:30', activity: 'Passeggiata ai piedi del Sentiero del Ponale (solo tratto iniziale)', note: 'Fondo asfaltato e piana fino alla vecchia casetta prima della salita' },
      { time: '18:00', activity: 'Sosta golosa da Garda Foodie per lievitati e merenda artigianale', note: 'Tavoli spaziosi all’aperto ideali per la carrozzina' }
    ],
    morningProposal: {
      title: 'Piazza III Novembre & Fossato della Rocca',
      description: 'L’eleganza asburgica di Riva, le facciate colorate e il laghetto delle ninfee della Rocca.',
      timeEstimate: '2h di passeggiata lenta'
    },
    afternoonProposal: {
      title: 'Foce del Ponale & Merenda Artigianale',
      description: 'La vista mozzafiato sulla parete rocciosa a picco e ritorno verso la pasticceria gourmet.',
      timeEstimate: '1h30'
    },
    rainPlan: {
      title: 'Portici e Cortili di Riva',
      indoorActivity: 'Camminamento interamente coperto sotto i portici medievali di Piazza Tre Novembre e Via Roma.',
      notes: 'Tutti i negozi e bar sono a filo strada senza barriere.'
    },
    walkDetails: {
      pathName: 'Anello Storico di Riva e Giardini di Porta Orientale',
      surface: 'Pavimentazione in porfido liscio e marciapiedi ampi',
      strollerAccessibility: '100% adatta a carrozzine',
      shadeLevel: 'Fitta nei vicoli e nei parchi cittadini'
    },
    camperStop: {
      name: 'Area Camper Brione (Riva del Garda)',
      coordinates: [45.8885, 10.8572],
      has220V: true,
      services: 'Allaccio 220V continuo, carico acqua e scarico serbatoi in vista della partenza di domani',
      notes: 'Terza e ultima notte a Riva del Garda'
    },
    babyTips: {
      feedingSpots: 'Giardini attorno al fossato della Rocca di Riva',
      diaperPoints: 'Bagni pubblici accessibili e puliti vicino al porto di Riva',
      comfortNotes: 'Temperatura mite e costante tra i 22 e i 25 gradi'
    },
    medicalNearby: {
      pharmacy: 'Farmacia Alla Madonna - Via Fiume 24, Riva (Tel. 0464 552554)',
      urgentCare: 'Pronto Soccorso Ospedale di Arco (5 km)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Molche (pasta di olive nere tipica gardesana)', 'Torta di noci del Bleggio'],
      recommendedSpots: 'Osteria La Contrada o Ristorante Al Volt'
    },
    specialSpots: [
      { type: "Frantoio & Cantina a filiera corta", name: "Madonna delle Vittorie", location: "Arco", description: "Frantoio artigianale con degustazione di olio extravergine del Garda e cucina a km zero." },
      { type: "Apicoltura & Asini", name: "Agriturismo Maso Bòtes", location: "Arco", description: "Uliveto storico millenario, apicoltura biologica certificata e fattoria didattica con asini." }
    ]
  },
  {
    id: 5,
    dayNumber: 5,
    date: '19 Set',
    title: 'Valle dei Laghi, Lago di Toblino e Comano Terme',
    route: 'Riva del Garda → Lago di Toblino → Comano Terme (Ponte Arche)',
    distanceKm: 32,
    drivingTime: '40 min complessivi (guida dolce)',
    altitudeMeters: 400,
    baseName: 'Ponte Arche / Comano (Base 2)',
    nightsInBase: 3,
    mobility: 'Carrozzina',
    summary: 'Spostamento breve e rilassante attraverso la Valle dei Laghi. Sosta panoramica sulla passerella in legno del Lago di Toblino e arrivo nella quiete termale di Comano.',
    coordinates: [46.0358, 10.8732],
    schedule: [
      { time: '10:00', activity: 'Partenza post-poppata da Riva lungo la SS45bis', note: 'Strada comoda e panoramica tra vigneti e pareti di roccia' },
      { time: '10:35', activity: 'Sosta sulla passerella del biotopo del Lago di Toblino', note: 'Passerella a pelo d’acqua liscia e ombreggiata con vista su Castel Toblino' },
      { time: '12:00', activity: 'Risalita verso Ponte Arche / Comano Terme (quota 400 m)', note: 'Salita graduale e dolcissima, pressione e orecchie perfette per Eden' },
      { time: '12:30', activity: 'Arrivo all’Area Camper di Ponte Arche e allaccio 220V', note: 'Piazzola a due passi dal parco termale' },
      { time: '16:00', activity: 'Passeggiata nel Parco Termale di Comano (14 ettari pianeggianti)', note: 'Viali asfaltati, scoiattoli, grandi abeti e aria purissima' }
    ],
    morningProposal: {
      title: 'Passerella sul Lago di Toblino & Castel Toblino',
      description: 'Il camminamento in legno sospeso sull’acqua tra canneti e ninfee.',
      timeEstimate: '1h di passeggiata liscia'
    },
    afternoonProposal: {
      title: 'I Viali Monumentali del Parco Termale di Comano',
      description: '14 ettari di verde protetto senza auto lungo il torrente Sarca.',
      timeEstimate: '2h con carrozzina'
    },
    rainPlan: {
      title: 'Stabilimento Termale e Porticato di Comano',
      indoorActivity: 'La grande hall termale di Comano e i portici offrono uno spazio riscaldato e silenzioso per poppata e cambio.',
      notes: 'Struttura dotata di ascensori e fasciatoi.'
    },
    walkDetails: {
      pathName: 'Anello del Parco delle Terme di Comano',
      surface: 'Asfalto perfetto e vialetti complanari lisci',
      strollerAccessibility: '100% adatto alla carrozzina (ideale)',
      shadeLevel: 'Totale grazie a pini, ippocastani e faggi centenari'
    },
    camperStop: {
      name: 'Area Camper Ponte Arche (via Lungo Sarca)',
      coordinates: [46.0358, 10.8732],
      has220V: true,
      services: 'Allaccio 220V, carico e scarico, a 300m dal parco termale e dai negozi',
      notes: 'Prima notte a Comano. Clima fresco e notti silenziose ideali per il sonno del bebè.'
    },
    babyTips: {
      feedingSpots: 'Chiosco e panchine del parco termale vicino al laghetto delle trote',
      diaperPoints: 'Tavolo camper o servizi igienici del padiglione termale',
      comfortNotes: 'A Comano l’aria è pulita e priva di umidità: ideale per la respirazione dei neonati'
    },
    medicalNearby: {
      pharmacy: 'Farmacia Comano Terme - Ponte Arche (Tel. 0465 701235)',
      urgentCare: 'Guardia Medica Ponte Arche (a 400 m) / Ospedale di Tione (15 km)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Ciuiça del Bleggio con patate e crauti', 'Noci del Bleggio DOP', 'Torta di carote e mandorle'],
      recommendedSpots: 'Osteria del Parco a Ponte Arche o Ristorante Posta'
    },
    freeCamperAlternatives: [
      { name: "Parcheggio Sarche / Lago di Toblino", location: "Via Caffaro, Sarche", rating: "4.3 / 5", services: "Parcheggio pubblico gratuito su asfalto", whyOmittedNote: "Ottimo per una sosta panoramica diurna di 1 ora per passeggiare sulla passerella del biotopo lacustre, ma sconsigliato per la notte in quanto privo di corrente 220V ed esposto al rumore del traffico della statale del Limarò." }
    ]
  }
];
