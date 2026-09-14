/**
 * Dati Tappe 11 - 16 per l'itinerario con Eden (25 - 30 Settembre 2026)
 * Basi: fine Lazise (Base 4), Sarzana e Val di Magra (Base 5, notti 1-3) e Rientro a Pisa
 */
export const EDEN_PART_3 = [
  {
    id: 11,
    dayNumber: 11,
    date: '25 Set',
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
    id: 12,
    dayNumber: 12,
    date: '26 Set',
    title: 'Giornata Stanziale: Borgo, Giardini e Campagna del Garda',
    route: 'Spostamenti a piedi a Lazise',
    distanceKm: 0,
    drivingTime: '0 min (Camper fermo)',
    altitudeMeters: 75,
    baseName: 'Lazise (Base 4)',
    nightsInBase: 3,
    mobility: 'Carrozzina',
    summary: 'Giornata dedicata al totale relax: colazione nei vicoli storici, lettura e in alternativa una singola escursione facoltativa in fattoria biologica del basso Garda (La Pesenata).',
    coordinates: [45.5056, 10.7328],
    schedule: [
      { time: '09:30', activity: 'Colazione serena con brioche fresche e poppata', note: 'Ritmi lenti senza sveglia' },
      { time: '10:30', activity: 'Passeggiata rilassata tra le botteghe del borgo vecchio', note: 'Vicoli fioriti e scorci medievali silenziosi al mattino' },
      { time: '12:30', activity: 'Pranzo in piazzola o piatto tipico da asporto', note: 'Nanna prolungata di Eden' },
      { time: '15:30', activity: 'Pomeriggio sul prato o visita facoltativa a una fattoria agricola', note: 'In alternativa visita breve e tranquilla a La Pesenata (basso Garda) per prodotti tipici' },
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
      services: 'Allaccio 220V, scarico grigie e nere, carico acqua',
      notes: 'Terza e ultima notte a Lazise: domani si scende verso la Val di Magra'
    },
    babyTips: {
      feedingSpots: 'Giardini ombreggiati del Parco Comunale di Lazise',
      diaperPoints: 'Camper a portata di mano',
      comfortNotes: 'Giorno perfetto per controllare le scorte di pannolini e prodotti di farmacia per Eden'
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
    id: 13,
    dayNumber: 13,
    date: '27 Set',
    title: 'Discesa verso la Liguria: Pausa a Fontanellato e Arrivo a Sarzana',
    route: 'Lazise → Fontanellato → Sarzana',
    distanceKm: 220,
    drivingTime: '3h30–4h30 (con sosta poppata)',
    altitudeMeters: 25,
    baseName: 'Sarzana e Val di Magra (Base 5)',
    nightsInBase: 3,
    mobility: 'Carrozzina',
    summary: 'Trasferimento verso la Val di Magra con tappa intermedia rilassante a Fontanellato (vicino alla Rocca Sanvitale con fossato). Arrivo a Sarzana per l’ultima base del viaggio.',
    coordinates: [44.1114, 9.9619],
    schedule: [
      { time: '09:30', activity: 'Partenza post-poppata da Lazise imboccando la A22 e A1', note: 'Eden addormentata col dondolio autostradale' },
      { time: '11:45', activity: 'Sosta rigenerante a Fontanellato (PR)', note: 'Passeggiata con carrozzina intorno alla Rocca Sanvitale con fossato colmo d’acqua e porticati rinascimentali' },
      { time: '13:30', activity: 'Pranzo in camper o trattoria emiliana, cambio pannolino', note: 'Sosta tranquilla senza fretta' },
      { time: '14:30', activity: 'Ripartenza lungo la A15 della Cisa verso il mare ligure', note: 'Discesa panoramica verso la Lunigiana' },
      { time: '16:30', activity: 'Arrivo a Sarzana (Parcheggio Piazza Terzi o Porta Parma)', note: 'Posizionamento camper a due passi dal centro storico' }
    ],
    morningProposal: {
      title: 'Pausa Rinascimentale a Fontanellato',
      description: 'Passeggiata piana e accogliente attorno al fossato medievale della Rocca Sanvitale.',
      timeEstimate: '1h15 di passeggiata e poppata'
    },
    afternoonProposal: {
      title: 'Arrivo a Sarzana & Primo Giro del Borgo',
      description: 'Ingresso da Porta Romana verso Piazza Matteotti tra palazzi nobiliari e botteghe storiche.',
      timeEstimate: '1h30 a piedi con carrozzina'
    },
    rainPlan: {
      title: 'Portici di Fontanellato e Centro Storico di Sarzana',
      indoorActivity: 'I lunghi portici di Fontanellato e le gallerie del centro di Sarzana permettono di passeggiare all’asciutto.',
      notes: 'Superfici piatte e comode.'
    },
    walkDetails: {
      pathName: 'Anello della Rocca Sanvitale & Centro Sarzana',
      surface: 'Asfalto, lastricato liscio e ciottoli complanari',
      strollerAccessibility: '100% adatta a carrozzina',
      shadeLevel: 'Portici monumentali e viali alberati'
    },
    camperStop: {
      name: 'Parcheggio Camper Piazza Terzi (Sarzana)',
      coordinates: [44.1132, 9.9638],
      has220V: true,
      services: 'Allaccio 220V, colonnine ricarica, a 200m dal centro pedonale',
      notes: 'Soluzione urbana comodissima per vivere il centro di Sarzana a piedi. Alternativa: Camping River ad Ameglia.'
    },
    babyTips: {
      feedingSpots: 'Panchine ombreggiate sotto i tigli attorno alla Rocca a Fontanellato',
      diaperPoints: 'Tavolo camper sempre igienizzato',
      comfortNotes: 'Clima ligure mite e iodato di fine settembre: temperatura ideale'
    },
    medicalNearby: {
      pharmacy: 'Farmacia San Giorgio - Via Landinelli 60, Sarzana (Tel. 0187 620244)',
      urgentCare: 'Ospedale San Bartolomeo di Sarzana (a 2 km) / Ospedale Sant’Andrea La Spezia (12 km)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Torta d’erbi lunigianese', 'Spongata di Sarzana', 'Testaroli al pesto ligure'],
      recommendedSpots: 'Trattoria dei Fabbri o Focacceria da Francesco (focaccia calda da asporto)'
    }
  },
  {
    id: 14,
    dayNumber: 14,
    date: '28 Set',
    title: 'Il Centro Nobiliare di Sarzana e la Fortezza Firmafede',
    route: 'Spostamenti a piedi a Sarzana',
    distanceKm: 0,
    drivingTime: '0 min (Camper fermo)',
    altitudeMeters: 25,
    baseName: 'Sarzana e Val di Magra (Base 5)',
    nightsInBase: 3,
    mobility: 'Carrozzina',
    summary: 'Passeggiata nel raffinato borgo medievale di Sarzana: Via Mazzini pedonale, la Pieve di Sant’Andrea, la Cattedrale e il fossato verde della Fortezza Firmafede.',
    coordinates: [44.1114, 9.9619],
    schedule: [
      { time: '09:30', activity: 'Colazione serena con focaccia ligure appena sfornata', note: 'Poppata comoda in camper' },
      { time: '10:30', activity: 'Camminata su Via Mazzini fino a Piazza Matteotti', note: 'Zona interamente a traffico limitato, pavimentata e liscia per carrozzina' },
      { time: '12:00', activity: 'Visita alla Cattedrale di Santa Maria Assunta', note: 'Navate ampie e fresche con rampa di accesso laterale' },
      { time: '13:00', activity: 'Pranzo in trattoria con veranda esterna o rientro al camper', note: 'Tutto a pochi metri' },
      { time: '16:00', activity: 'Passeggiata attorno ai bastioni della Fortezza Firmafede', note: 'Prato verde curato nel fossato e viali esterni pianeggianti' }
    ],
    morningProposal: {
      title: 'Via Mazzini, Sant’Andrea & Piazza Matteotti',
      description: 'Il salotto elegante di Sarzana: facciate dipinte, caffè all’aperto e antiquariato.',
      timeEstimate: '2h di passeggiata lenta'
    },
    afternoonProposal: {
      title: 'Cattedrale & Anello della Fortezza Firmafede',
      description: 'La maestosa fortezza medicea con il suo fossato alberato e panchine all’ombra.',
      timeEstimate: '1h30'
    },
    rainPlan: {
      title: 'Galleria d’Arte e Sale della Fortezza Firmafede',
      indoorActivity: 'Le sale espositive a piano terra della fortezza e i porticati di Piazza Luni offrono un perfetto percorso coperto con carrozzina.',
      notes: 'Ascensori e rampe presenti.'
    },
    walkDetails: {
      pathName: 'Anello Monumentale di Sarzana',
      surface: 'Lastre di arenaria liscia e asfalto',
      strollerAccessibility: '100% adatto alla carrozzina',
      shadeLevel: 'Ombreggiatura degli edifici e dei platani dei fossati'
    },
    camperStop: {
      name: 'Parcheggio Camper Piazza Terzi (Sarzana)',
      coordinates: [44.1132, 9.9638],
      has220V: true,
      services: 'Allaccio 220V continuo',
      notes: 'Seconda notte nella stessa piazzola'
    },
    babyTips: {
      feedingSpots: 'Giardini pubblici di Piazza Garibaldi all’ombra delle magnolie',
      diaperPoints: 'Camper a 5 minuti a piedi',
      comfortNotes: 'Temperatura ligure gradevole, ventilazione leggera'
    },
    medicalNearby: {
      pharmacy: 'Farmacia Centrale Sarzana - Piazza Matteotti (Tel. 0187 620130)',
      urgentCare: 'Ospedale San Bartolomeo Sarzana (2 km)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Farinata di ceci cotta a legna', 'Pesto alla genovese fresco', 'Vino Vermentino dei Colli di Luni DOC'],
      recommendedSpots: 'Pizzeria Focacceria La Scaletta o Il Calandrino (centro storico)'
    }
  },
  {
    id: 15,
    dayNumber: 15,
    date: '29 Set',
    title: 'Bocca di Magra Facoltativa e Preparativi di Rientro',
    route: 'Sarzana ↔ Bocca di Magra (facoltativo, 12 km)',
    distanceKm: 24,
    drivingTime: '20 min a tratta',
    altitudeMeters: 10,
    baseName: 'Sarzana e Val di Magra (Base 5)',
    nightsInBase: 3,
    mobility: 'Carrozzina',
    summary: 'Uscita facoltativa verso il borgo marinaro di Bocca di Magra: passeggiata panoramica alla foce del fiume con vista sul mare e sulle Alpi Apuane.',
    coordinates: [44.0512, 9.9725],
    schedule: [
      { time: '10:00', activity: 'Breve escursione verso Bocca di Magra (o mattinata di relax a Sarzana)', note: 'Parcheggio pianeggiante lungo il fiume Magra' },
      { time: '10:45', activity: 'Passeggiata sulla banchina pedonale di Bocca di Magra', note: 'Sentiero liscio vista barche e foce del fiume che si getta nel Tirreno' },
      { time: '12:30', activity: 'Pranzo vista mare o rientro alla base camper di Sarzana', note: 'Fresco salmastro e sole dolce di fine settembre' },
      { time: '15:30', activity: 'Ultima passeggiata rilassata per souvenir tipici e tozzetti a Sarzana', note: 'Acquisto pesto fresco artigianale per casa' },
      { time: '18:00', activity: 'Preparazione camper per il rientro di domani (chiusura gavoni, scarichi)', note: 'Borsa di Eden pronta per la tratta finale' }
    ],
    morningProposal: {
      title: 'Banchina sul Fiume e Mare a Bocca di Magra',
      description: 'L’incontro tra il fiume Magra e il mare, con sfondo delle bianche cave di marmo delle Apuane.',
      timeEstimate: '1h30 con carrozzina'
    },
    afternoonProposal: {
      title: 'Ultimo Gelato a Sarzana & Preparativi Camper',
      description: 'Pomeriggio senza stress per riordinare il camper e godersi l’ultimo tramonto del viaggio.',
      timeEstimate: 'Libero'
    },
    rainPlan: {
      title: 'Bistrot del Porto di Bocca di Magra o Caffè a Sarzana',
      indoorActivity: 'Terrazze coperte e riscaldate affacciate sul fiume e sul mare.',
      notes: 'Rientro rapido a Sarzana in camper in caso di pioggia.'
    },
    walkDetails: {
      pathName: 'Banchina di Bocca di Magra & Fossato Sarzana',
      surface: 'Pavimentazione liscia e asfalto lungofiume',
      strollerAccessibility: '100% pianeggiante e agevole',
      shadeLevel: 'Pini marittimi e tamerici'
    },
    camperStop: {
      name: 'Parcheggio Camper Piazza Terzi (Sarzana)',
      coordinates: [44.1132, 9.9638],
      has220V: true,
      services: 'Allaccio 220V, camper service per svuotamento serbatoi prima del viaggio finale',
      notes: 'Terza e ultima notte a Sarzana: domani rientro a Pisa'
    },
    babyTips: {
      feedingSpots: 'Panchine del lungofiume a Bocca di Magra di fronte all’imbarcadero',
      diaperPoints: 'Camper sempre pronto e comodo',
      comfortNotes: 'Eden ha completato 15 giorni magnifici: sonno regolare e acclimatamento perfetto'
    },
    medicalNearby: {
      pharmacy: 'Farmacia Bocca di Magra / Farmacia Centrale Sarzana (Tel. 0187 620130)',
      urgentCare: 'Ospedale San Bartolomeo Sarzana (2 km)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Muscoli ripieni alla ligure (cozze)', 'Frittura di paranza del golfo', 'Panigacci di Podenzana'],
      recommendedSpots: 'Ristorante Ciccio Marina o Osteria dei Pescatori a Bocca di Magra'
    }
  },
  {
    id: 16,
    dayNumber: 16,
    date: '30 Set',
    title: 'Rientro Sereno alla Base di Pisa',
    route: 'Sarzana → Pisa',
    distanceKm: 65,
    drivingTime: '1h–1h30',
    altitudeMeters: 10,
    baseName: 'Rientro a Pisa',
    nightsInBase: 0,
    mobility: 'Ovetto',
    summary: 'Tratta conclusiva di rientro verso Pisa sulla comoda A12 / Aurelia. Chiusura del viaggio in bellezza dopo 16 giorni indimenticabili tra laghi, parchi alpini e mare.',
    coordinates: [43.7228, 10.4017],
    schedule: [
      { time: '09:30', activity: 'Ultima colazione in camper e poppata di Eden', note: 'Calma e serenità prima di staccare la 220V' },
      { time: '10:30', activity: 'Sistemazione di Eden nell’ovetto e partenza verso Pisa sulla A12', note: 'Tragitto breve di circa un’ora' },
      { time: '11:45', activity: 'Arrivo a Pisa e rientro al rimessaggio / casa', note: 'Scarico bagagli, prime coccole a casa e riposino di Eden nel suo lettino' },
      { time: '13:00', activity: 'Pranzo di festeggiamento in famiglia', note: 'Viaggio concluso con successo, ricchezza di ricordi e tanta esperienza camper acquisita!' }
    ],
    morningProposal: {
      title: 'Ultima Poppata & Tratta Autostradale',
      description: 'Guida breve e lineare lungo la costa toscana passando per Carrara e Viareggio.',
      timeEstimate: '1h15 di viaggio'
    },
    afternoonProposal: {
      title: 'Rientro a Casa & Riconsegna Camper',
      description: 'Sistemazione finale a Pisa e primi racconti di viaggio a nonni e amici.',
      timeEstimate: 'Pomeriggio sereno'
    },
    rainPlan: {
      title: 'Rientro Diretto a Casa',
      indoorActivity: 'Viaggio coperto in cabina camper e arrivo al calduccio di casa.',
      notes: 'Massimo comfort per tutta la famiglia.'
    },
    walkDetails: {
      pathName: 'Rientro alla base di Pisa',
      surface: 'Asfalto autostradale e marciapiedi domestici',
      strollerAccessibility: 'Completamente su asfalto durante le operazioni di carico/scarico',
      shadeLevel: 'Aree coperte'
    },
    camperStop: {
      name: 'Rimessaggio Camper / Casa a Pisa',
      coordinates: [43.7228, 10.4017],
      has220V: true,
      services: 'Allaccio 220V domestico, pulizia camper finale',
      notes: 'Bentornati a casa Eden, mamma e papà!'
    },
    babyTips: {
      feedingSpots: 'Casa dolce casa a Pisa',
      diaperPoints: 'Fasciatoio di casa',
      comfortNotes: 'Complimenti per la prima grande avventura in camper di Eden!'
    },
    medicalNearby: {
      pharmacy: 'Tutte le farmacie di Pisa',
      urgentCare: 'Azienda Ospedaliero-Universitaria Pisana (Cisanello / Santa Chiara Pediatria)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Pappa al pomodoro', 'Torta coi bischeri pisana'],
      recommendedSpots: 'Cena rilassata a casa per celebrare la fine del road trip'
    }
  }
];
