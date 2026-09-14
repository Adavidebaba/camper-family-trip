/**
 * Dati Tappe 1 - 5 per l'itinerario con Eden (15 - 19 Settembre 2026)
 * Basi: Riva del Garda (Base 1, notti 1-3) e inizio Comano (Base 2, notti 1-2)
 */
export const EDEN_PART_1 = [
  {
    id: 1,
    dayNumber: 1,
    date: '15 Set',
    title: 'Partenza da Pisa verso l’Alto Garda',
    route: 'Pisa → Riva del Garda',
    distanceKm: 320,
    drivingTime: '4h30–5h30 (con 2 pause poppata)',
    altitudeMeters: 70,
    baseName: 'Riva del Garda (Base 1)',
    nightsInBase: 3,
    mobility: 'Carrozzina',
    summary: 'Trasferimento principale verso il Trentino con pause strategiche a Pontremoli e in Emilia. Arrivo al Lago di Garda e allaccio camper.',
    coordinates: [45.8858, 10.8524],
    schedule: [
      { time: '09:00', activity: 'Partenza post-poppata da Pisa sulla A12 / A15 della Cisa', note: 'Eden ben allacciata nell’ovetto omologato, mai in movimento fuori dal seggiolino' },
      { time: '10:45', activity: 'Prima sosta a Pontremoli', note: 'Cambio pannolino, poppata e sosta tranquilla fuori dal traffico' },
      { time: '13:00', activity: 'Seconda pausa in Emilia (zona Reggio Emilia / Mantova)', note: 'Pranzo leggero in camper e nanna della bimba' },
      { time: '15:30', activity: 'Arrivo a Riva del Garda (Zona Brione)', note: 'Posizionamento in piazzola, allaccio 220V e discesa gambe' },
      { time: '17:30', activity: 'Primo affaccio facoltativo al lago a piedi con carrozzina', note: 'Brezza lacustre e passeggiata rilassata verso Porto San Nicolò' }
    ],
    morningProposal: {
      title: 'Viaggio & Prima Sosta a Pontremoli',
      description: 'Guida regolare lungo la Cisa con sosta defilata prima della pianura padana per la poppata di Eden.',
      timeEstimate: 'Circa 2h di marcia'
    },
    afternoonProposal: {
      title: 'Arrivo a Riva & Affaccio al Lago',
      description: 'Sistemazione camper nell’area sosta Brione e breve passeggiata pianeggiante verso il lago.',
      timeEstimate: 'Circa 1h a piedi'
    },
    rainPlan: {
      title: 'Pomeriggio Cocoon in Camper',
      indoorActivity: 'Allaccio 220V immediato, riscaldamento delicato della cellula e nanna serena dopo la lunga tratta in autostrada.',
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
      notes: 'Tranquilla e strategica per il settore est del lago. Alternativa: Camping Brione.'
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
      recommendedSpots: 'Ristorante La Colombera o asporto da consumare in camper'
    }
  },
  {
    id: 2,
    dayNumber: 2,
    date: '16 Set',
    title: 'San Nicolò, Spiaggia dei Pini e Lungolago',
    route: 'Spostamenti a piedi a Riva del Garda',
    distanceKm: 0,
    drivingTime: '0 min (Camper fermo)',
    altitudeMeters: 70,
    baseName: 'Riva del Garda (Base 1)',
    nightsInBase: 3,
    mobility: 'Carrozzina',
    summary: 'Giornata interamente senza guida: passeggiata liscia con carrozzina da San Nicolò verso la Spiaggia dei Pini e i Sabbioni tra giardini e cigni.',
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
      timeEstimate: '1h30 compreso riposo su panchina'
    },
    afternoonProposal: {
      title: 'Parco dei Sabbioni & Verde Miralago',
      description: 'Passeggiata all’ombra dei grandi pioppi con vista panoramica sul golfo di Riva.',
      timeEstimate: '1h30 con carrozzina'
    },
    rainPlan: {
      title: 'Passeggiata nei portici e Galleria Coperta di Riva',
      indoorActivity: 'Percorso al riparo sotto i portici del lungolago o visita al centro commerciale Blue Garden con carrozzina per passeggiare all’asciutto.',
      notes: 'Superfici completamente prive di gradini e riscaldate.'
    },
    walkDetails: {
      pathName: 'Lungolago dei Pini & Sabbioni',
      surface: 'Pavimentazione liscia e asfalto per carrozzine',
      strollerAccessibility: '100% pianeggiante e accessibile',
      shadeLevel: 'Molto alta (parchi alberati a riva)'
    },
    camperStop: {
      name: 'Area Sosta Camper Brione (Riva)',
      coordinates: [45.8885, 10.8572],
      has220V: true,
      services: 'Allaccio 220V attivo continuo',
      notes: 'Seconda notte nella stessa postazione: zero stress da trasloco'
    },
    babyTips: {
      feedingSpots: 'Panchine vista lago riparate sotto i tigli del Parco Sabbioni',
      diaperPoints: 'Camper facilmente raggiungibile a piedi in qualsiasi momento',
      comfortNotes: 'La carrozzina scorre senza vibrazioni favorendo la nanna di Eden'
    },
    medicalNearby: {
      pharmacy: 'Farmacia San Nicolò - Viale Rovereto 103 (Tel. 0464 552194)',
      urgentCare: 'Ospedale di Arco (5 km, pronto soccorso pediatrico)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Filetti di trota del Sarca', 'Polenta di Storo con formaggio casolet'],
      recommendedSpots: 'Ristorante Bar Spiaggia dei Pini (tavoli larghi all’aperto ideali con carrozzina)'
    }
  },
  {
    id: 3,
    dayNumber: 3,
    date: '17 Set',
    title: 'Centro Storico di Riva e la Rocca sul Lago',
    route: 'Spostamenti a piedi a Riva del Garda',
    distanceKm: 0,
    drivingTime: '0 min (Camper fermo)',
    altitudeMeters: 70,
    baseName: 'Riva del Garda (Base 1)',
    nightsInBase: 3,
    mobility: 'Carrozzina',
    summary: 'Esplorazione del borgo veneziano di Riva: Piazza III Novembre con la Torre Apponale e i giardini della Rocca del MAG.',
    coordinates: [45.8858, 10.8524],
    schedule: [
      { time: '10:00', activity: 'Camminata verso il centro storico di Riva', note: 'Tragitto di circa 30 minuti a passo comodo lungo il lago' },
      { time: '10:45', activity: 'Piazza III Novembre e porto antico di Riva', note: 'I palazzi storici col porticato e la vista sulla darsena' },
      { time: '12:00', activity: 'Parco della Rocca e fossato con ninfee', note: 'Zona fresca e riparata adatta per la poppata' },
      { time: '13:00', activity: 'Pranzo in trattoria con veranda esterna o rientro al camper', note: 'Menù leggero con prodotti trentini' },
      { time: '16:00', activity: 'Pomeriggio rilassato al parco o breve sosta all’oleificio per scorta olio', note: 'In alternativa visita rilassata a Maso Bòtes o Madonna delle Vittorie' }
    ],
    morningProposal: {
      title: 'Piazza III Novembre & Torre Apponale',
      description: 'Il cuore storico di Riva: selciato piano, vicoli medievali e terrazze dei caffè.',
      timeEstimate: 'Circa 2h'
    },
    afternoonProposal: {
      title: 'Giardini della Rocca del MAG',
      description: 'Il castello sull’acqua con il parco circostante e i canali fioriti.',
      timeEstimate: 'Circa 1h30'
    },
    rainPlan: {
      title: 'Museo Alto Garda (MAG) alla Rocca di Riva',
      indoorActivity: 'La corte interna e le sale a piano terra della Rocca offrono un riparo storico accessibile anche con carrozzina.',
      notes: 'Biglietto cumulativo e bagni con nursery.'
    },
    walkDetails: {
      pathName: 'Centro Pedonale di Riva del Garda',
      surface: 'Lastricato in pietra liscia e marciapiedi',
      strollerAccessibility: 'Ottima in tutto il centro storico pedonale',
      shadeLevel: 'Ombra degli edifici storici e dei portici'
    },
    camperStop: {
      name: 'Area Sosta Camper Brione (Riva)',
      coordinates: [45.8885, 10.8572],
      has220V: true,
      services: 'Allaccio 220V continuo',
      notes: 'Terza e ultima notte a Riva: domani trasferimento breve a Comano'
    },
    babyTips: {
      feedingSpots: 'Giardini del Brolio dietro la Rocca, silenziosi e poco affollati',
      diaperPoints: 'Nursery pubblica presso i giardini di Porta San Marco',
      comfortNotes: 'Mantenere il ciuccio a portata durante le passeggiate con brezza d’Ora'
    },
    medicalNearby: {
      pharmacy: 'Farmacia Rivana - Piazza Cavour 2, Riva (Tel. 0464 552251)',
      urgentCare: 'Ospedale di Arco (5 km)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Canederli al burro fuso e salvia', 'Torta di noci del Garda'],
      recommendedSpots: 'Ristorante Pizzeria Bavaria o Osteria La Contrada (centro storico)'
    }
  },
  {
    id: 4,
    dayNumber: 4,
    date: '18 Set',
    title: 'Dall’Alto Garda al Parco Termale di Comano',
    route: 'Riva del Garda → Lago di Toblino → Ponte Arche',
    distanceKm: 32,
    drivingTime: '45–60 min',
    altitudeMeters: 400,
    baseName: 'Ponte Arche / Comano (Base 2)',
    nightsInBase: 3,
    mobility: 'Carrozzina',
    summary: 'Salita graduale nella Valle del Sarca (quota 400 m, ampiamente sotto la soglia di sicurezza dei 900 m). Sosta panoramica facoltativa a Toblino e arrivo a Comano.',
    coordinates: [46.0375, 10.8711],
    schedule: [
      { time: '10:00', activity: 'Partenza da Riva direzione Valle dei Laghi', note: 'Strada statale SS45bis comoda e panoramica' },
      { time: '10:45', activity: 'Sosta rigenerante al Lago di Toblino', note: 'Passerella in legno pianeggiante a pelo d’acqua con carrozzina di fronte al castello' },
      { time: '12:00', activity: 'Arrivo a Ponte Arche / Comano Terme', note: 'Sistemazione nell’area camper in via Lungo Sarca e allaccio 220V' },
      { time: '13:00', activity: 'Pranzo in camper e prima poppata a quota 400m', note: 'Aria balsamica di collina' },
      { time: '15:30', activity: 'Primo giro esplorativo nel Parco Termale di Comano', note: '14 ettari di parco totalmente pianeggiante, viali alberati perfetti per carrozzina' }
    ],
    morningProposal: {
      title: 'Passerella del Castello di Toblino',
      description: 'Breve camminata in riva al canneto su tavole in legno con vista sul castello da fiaba.',
      timeEstimate: '45 min di passeggiata tranquilla'
    },
    afternoonProposal: {
      title: 'Primo giro nel Parco delle Terme di Comano',
      description: 'Viali larghi e asfalto perfetto tra abeti, tigli e il rumore rilassante del fiume Sarca.',
      timeEstimate: '1h30'
    },
    rainPlan: {
      title: 'Galleria Termale e Chioschi Coperti di Comano',
      indoorActivity: 'La struttura centrale del parco termale e i porticati dei bar offrono ampi spazi caldi e coperti per passeggiare con Eden.',
      notes: 'Attenzione: nessun bagno termale per la neonata (le acque sono riservate alla cura dermatologica pediatrica a partire dai 6-8 mesi, solo su prescrizione).'
    },
    walkDetails: {
      pathName: 'Anello dei Tigli nel Parco Termale',
      surface: 'Asfalto liscio e viali in ghiaia compattata finissima',
      strollerAccessibility: '100% eccellente per la carrozzina',
      shadeLevel: 'Massima (bosco-parco secolare)'
    },
    camperStop: {
      name: 'Area Camper Ponte Arche (via Lungo Sarca)',
      coordinates: [46.0358, 10.8732],
      has220V: true,
      services: 'Allaccio 220V, camper service, colonnine ricarica, accesso diretto pedonale al parco',
      notes: 'Pianeggiante e tranquilla, vicinissima al centro abitato di Ponte Arche. Alternativa: parcheggi del parco.'
    },
    babyTips: {
      feedingSpots: 'Panchine coperte del gazebo centrale nel parco termale',
      diaperPoints: 'Servizi igienici del parco termale dotati di nursery riscaldata',
      comfortNotes: 'Quota 400m è ideale: ossigenazione perfetta per i polmoncini di Eden'
    },
    medicalNearby: {
      pharmacy: 'Farmacia Comano Terme - Via Battisti 4, Ponte Arche (Tel. 0465 701434)',
      urgentCare: 'Ospedale di Tione di Trento (a 15 km, Pronto Soccorso attivo 24/7)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Ciiuìga del Banale (Presidio Slow Food)', 'Noci del Bleggio', 'Formaggio Spressa delle Giudicarie DOP'],
      recommendedSpots: 'Trattoria Da Lucio o bottega contadina a Ponte Arche'
    }
  },
  {
    id: 5,
    dayNumber: 5,
    date: '19 Set',
    title: 'La Quiete del Parco di Comano e la Passeggiata sul Sarca',
    route: 'Spostamenti a piedi a Ponte Arche',
    distanceKm: 0,
    drivingTime: '0 min (Camper fermo)',
    altitudeMeters: 400,
    baseName: 'Ponte Arche / Comano (Base 2)',
    nightsInBase: 3,
    mobility: 'Carrozzina',
    summary: 'Giornata all’insegna della lentezza e del benessere: passeggiate lungo il corso limpido del fiume Sarca e riposini all’ombra dei grandi pini.',
    coordinates: [46.0375, 10.8711],
    schedule: [
      { time: '09:30', activity: 'Colazione calma e poppata in piazzola', note: 'Temperatura frizzante del mattino alpino' },
      { time: '10:30', activity: 'Passeggiata lungo il tratto arginale del fiume Sarca', note: 'Sentiero pedonale pianeggiante con carrozzina, ponticelli in legno e anatre' },
      { time: '12:30', activity: 'Pranzo in camper e siesta prolungata', note: 'Ambiente silenzioso a contatto con la natura' },
      { time: '15:30', activity: 'Secondo anello nel parco termale verso il percorso vita', note: 'Zone prative ampie per stendere la coperta da pic-nic' },
      { time: '18:00', activity: 'Giro nella piazzetta di Ponte Arche per pane fresco e formaggi', note: 'Tutto a pochi passi dalla sosta' }
    ],
    morningProposal: {
      title: 'Passeggiata Fluviale sul Sarca',
      description: 'Lungo il fiume alpino con ponti pedonali e panchine ogni 50 metri.',
      timeEstimate: '1h30'
    },
    afternoonProposal: {
      title: 'Prato dei Faggi nel Parco di Comano',
      description: 'Relax sull’erba curata con carrozzina all’ombra naturale dei faggi secolari.',
      timeEstimate: '2h di relax totale'
    },
    rainPlan: {
      title: 'Biblioteca e Caffè Termale di Ponte Arche',
      indoorActivity: 'Ambienti accoglienti e riscaldati nel centro del paese a 200 metri dal camper per leggere o allattare al caldo.',
      notes: 'Rientro facile in camper in caso di temporale passeggero.'
    },
    walkDetails: {
      pathName: 'Sentiero Fluviale & Parco Terme',
      surface: 'Asfalto e terra battuta fine',
      strollerAccessibility: '100% adatta a carrozzine standard',
      shadeLevel: 'Altissima'
    },
    camperStop: {
      name: 'Area Camper Ponte Arche (via Lungo Sarca)',
      coordinates: [46.0358, 10.8732],
      has220V: true,
      services: 'Allaccio 220V continuo',
      notes: 'Seconda notte nella pace di Comano'
    },
    babyTips: {
      feedingSpots: 'Panchine vicino alla fontanella d’acqua oligominerale di Comano',
      diaperPoints: 'Camper adiacente al parco',
      comfortNotes: 'Copertina leggera per Eden durante i passaggi nelle zone più ombreggiate'
    },
    medicalNearby: {
      pharmacy: 'Farmacia Comano Terme - Via Battisti 4 (Tel. 0465 701434)',
      urgentCare: 'Guardia Medica Ponte Arche / Ospedale Tione di Trento',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Strangolapreti trentini agli spinaci', 'Torta di mele cotogne'],
      recommendedSpots: 'Pasticceria d’Autore a Ponte Arche (brioche artigianali e caffè)'
    }
  }
];
