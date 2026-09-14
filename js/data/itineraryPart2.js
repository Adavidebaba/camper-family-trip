/**
 * Dati di dettaglio per le Tappe 9 - 15 (23 Set - 29 Set)
 */
export const ITINERARY_PART_2 = [
  {
    id: 9,
    dayNumber: 9,
    date: '23 Set',
    title: 'I Mostri di Bomarzo e il Tufo Sospeso di Vitorchiano',
    route: 'Bolsena → Bomarzo → Vitorchiano',
    distanceKm: 45,
    drivingTime: '~50 min',
    mobility: 'Marsupio obbligatorio',
    summary: 'Visita mattutina al fiabesco Sacro Bosco di Bomarzo tra le gigantesche sculture di pietra vulcanica; nel pomeriggio passeggiata sul borgo di tufo di Vitorchiano.',
    coordinates: [42.4705, 12.1764],
    schedule: [
      { time: '09:00', activity: 'Partenza da Bolsena verso Bomarzo', note: 'Percorso veloce e panoramico attraverso la campagna laziale' },
      { time: '09:50', activity: 'Parcheggio camper a Bomarzo e preparazione Marsupio', note: 'Nel Sacro Bosco viali in pendenza, radici e gradini di roccia vietano i passeggini' },
      { time: '10:15', activity: 'Tour del Parco dei Mostri (Orco, Casa Pendente, Gigante)', note: 'Molto ombreggiato dagli alberi secolari, perfetto per la bimba nel marsupio' },
      { time: '12:45', activity: 'Pappa post-visita nell’area pic-nic alberata del parco', note: 'Tavoli all’ombra e punto ristoro ben attrezzato' },
      { time: '14:30', activity: 'Spostamento a Vitorchiano (~15 min) e sosta camper', note: 'Il "Borgo dei Peperini" a strapiombo sulla forra verde' },
      { time: '16:00', activity: 'Passeggiata nel centro storico e al belvedere della rupe', note: 'Visita alla statua Moai originale dell’Isola di Pasqua scolpita a Vitorchiano' }
    ],
    walkDetails: {
      pathName: 'Viali del Parco dei Mostri & Vicoli di Vitorchiano',
      surface: 'Terra battuta, gradoni in roccia basaltica, selciato medievale',
      strollerAccessibility: 'Praticamente nulla a Bomarzo (Marsupio tassativo); discreta a Vitorchiano solo nelle piazze piane',
      shadeLevel: 'Boschiva e molto fresca a Bomarzo'
    },
    camperStop: {
      name: 'Area Sosta Camper Comunale Vitorchiano (o Caprarola)',
      coordinates: [42.4678, 12.1742],
      has220V: true,
      services: 'Allaccio 220V, camper service, illuminata, fondo in autobloccanti',
      notes: 'Tranquillissima sotto le mura del borgo. In alternativa comodo trasferimento alla vicina Caprarola.'
    },
    babyTips: {
      feedingSpots: 'Radura della Tartaruga a Bomarzo o belvedere di Vitorchiano',
      diaperPoints: 'Servizi igienici all’ingresso del Parco dei Mostri dotati di fasciatoio',
      comfortNotes: 'Indossare scarpe da ginnastica comode: il bosco di Bomarzo richiede stabilità col bimbo in fascia/marsupio'
    },
    medicalNearby: {
      pharmacy: 'Farmacia San Michele - Piazza Roma 6, Bomarzo (Tel. 0761 924089) / Vitorchiano',
      urgentCare: 'Ospedale Belcolle Viterbo a soli 9 km da Vitorchiano (centro di riferimento regionale)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Cavatelli vitorchianesi al finocchietto selvatico e pomodoro', 'Castagne e marroni dei Cimini', 'Nocciole tostate'],
      recommendedSpots: 'Ristorante La Cuccagna o Osteria del Duca a Vitorchiano'
    }
  },
  {
    id: 10,
    dayNumber: 10,
    date: '24 Set',
    title: 'I Giochi d’Acqua di Villa Lante e la Faggeta di Soriano',
    route: 'Vitorchiano → Bagnaia → Soriano nel Cimino',
    distanceKm: 25,
    drivingTime: '~35 min',
    mobility: 'Marsupio / Carrozzina',
    summary: 'Mattinata tra le spettacolari fontane rinascimentali e le siepi di Villa Lante a Bagnaia; pomeriggio nella fresca e maestosa faggeta dei Monti Cimini.',
    coordinates: [42.4278, 12.1524],
    schedule: [
      { time: '09:30', activity: 'Breve tragitto in camper fino al parcheggio di Bagnaia', note: 'Ampio piazzale comodo per camper all’ingresso del borgo' },
      { time: '10:00', activity: 'Visita ai Giardini di Villa Lante', note: 'Fontana dei Mori, Catena d’Acqua e labirinti di bosso. I terrazzamenti alti si fanno meglio con marsupio' },
      { time: '12:30', activity: 'Pranzo nella piazza rinascimentale di Bagnaia', note: 'Pasticcerie e forni tipici con focacce calde e tozzetti' },
      { time: '14:30', activity: 'Salita panoramica verso Soriano nel Cimino / Faggeta Vetusta', note: 'Bosco patrimonio UNESCO a 1000m di quota con aria balsamica' },
      { time: '17:30', activity: 'Discesa e insediamento all’Area Camper Caprarola (Lago di Vico)', note: 'Posizionamento per 3 notti consecutive nella pace della riserva' }
    ],
    walkDetails: {
      pathName: 'Giardini di Villa Lante & Sentiero Faggeta Soriano',
      surface: 'Ghiaia fine nei parterre bassi (ok carrozzina); rampe di gradini per le fontane alte (marsupio)',
      strollerAccessibility: 'Mista: carrozzina nei giardini bassi, marsupio per godere appieno dei giochi d’acqua',
      shadeLevel: 'Altissima sia nei viali di Villa Lante che tra i faggi secolari'
    },
    camperStop: {
      name: 'Area Camper Caprarola - Loc. Lago di Vico',
      coordinates: [42.3275, 12.1812],
      has220V: true,
      services: 'Allaccio 220V, carico/scarico, immersa nei boschi e noccioli, silenzio perfetto',
      notes: 'Posizione strategica per 3 notti stanziali tra Lago di Vico, Palazzo Farnese e Vignanello'
    },
    babyTips: {
      feedingSpots: 'Panchine ombreggiate di fronte alla Fontana dei Fiumi a Villa Lante',
      diaperPoints: 'Tavolo camper sempre a disposizione; servizi igienici di Villa Lante all’ingresso',
      comfortNotes: 'Sui Cimini la quota supera gli 800m: tenere a portata di mano un maglioncino di lana per la bimba'
    },
    medicalNearby: {
      pharmacy: 'Farmacia San Giovanni - Piazza XX Settembre 16, Bagnaia (Tel. 0761 288006)',
      urgentCare: 'Ospedale Belcolle Viterbo (a 6 km da Bagnaia)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Gnocchi col ferro di Soriano', 'Porchetta viterbese a legna', 'Torta con crema di nocciole Dop'],
      recommendedSpots: 'Bottega della Carne da Egidio (salumi e formaggi artigianali per la dispensa camper)'
    }
  },
  {
    id: 11,
    dayNumber: 11,
    date: '25 Set',
    title: 'I Giardini Farnesiani e i Labirinti di Palazzo Ruspoli',
    route: 'Caprarola ↔ Vignanello',
    distanceKm: 20,
    drivingTime: '~15 min a tratta',
    mobility: 'Marsupio',
    summary: 'Doppia meraviglia rinascimentale: i giardini all’italiana più intatti d’Europa a Palazzo Ruspoli (Vignanello) e il monumentale Palazzo Farnese a pianta pentagonale.',
    coordinates: [42.3275, 12.1812],
    schedule: [
      { time: '09:30', activity: 'Breve escursione a Vignanello per visitare Castello Ruspoli', note: 'I celebri giardini di siepi di bosso geometriche voluti da Ottavia Orsini' },
      { time: '11:30', activity: 'Aperitivo e passeggiata con marsupio nelle viuzze di Vignanello', note: 'Profumo di mosto e tradizione contadina autentica' },
      { time: '13:00', activity: 'Rientro in camper a Caprarola per il pranzo e la poppata', note: 'Massima comodità senza fretta' },
      { time: '15:00', activity: 'Salita alla spettacolare scala elicoidale del Vignola a Palazzo Farnese', note: 'Affreschi della Sala del Mappamondo e giardini segreti con fontane' },
      { time: '18:00', activity: 'Giro serale e scorta di biscotti di nocciole a Caprarola', note: 'Capitale italiana della Tonda Gentile Romana' }
    ],
    walkDetails: {
      pathName: 'Scale monumentali Palazzo Farnese & Terrazze Ruspoli',
      surface: 'Gradoni elicoidali in peperino, viottoli in selciato',
      strollerAccessibility: 'Scarsa negli interni monumentali (scale storiche): MARSUPIO raccomandato',
      shadeLevel: 'Buona nei boschi e nei cortili interni'
    },
    camperStop: {
      name: 'Area Camper Caprarola (Lago di Vico)',
      coordinates: [42.3275, 12.1812],
      has220V: true,
      services: '220V garantita, piazzole ampie',
      notes: 'Seconda notte nella stessa piazzola: comodità di non dover rifare i bagagli'
    },
    babyTips: {
      feedingSpots: 'Giardini Alti di Palazzo Farnese (Casina del Piacere) tra i cipressi',
      diaperPoints: 'Camper nell’area sosta a poca distanza',
      comfortNotes: 'La monumentale scala a chiocciola è stupenda ma richiede un passo calmo col marsupio'
    },
    medicalNearby: {
      pharmacy: 'Farmacia Farnese - Via Filippo Nicolai 114, Caprarola (Tel. 0761 646014)',
      urgentCare: 'Postazione 118 Ronciglione / Ospedale Civico Civita Castellana',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Pici ai funghi porcini dei Cimini', 'Nocciolata artigianale senza olio di palma', 'Cipolla di Vignanello stufata'],
      recommendedSpots: 'Trattoria del Cimino da Colombo (Caprarola) o asporto tipico da consumare in piazzola'
    }
  },
  {
    id: 12,
    dayNumber: 12,
    date: '26 Set',
    title: 'La Pace Naturale del Lago di Vico',
    route: 'Spostamenti locali a piedi',
    distanceKm: 0,
    drivingTime: '0 min (Camper fermo)',
    mobility: 'Carrozzina',
    summary: 'Giornata interamente dedicata al riposo, al birdwatching e alla natura incontaminata nella Riserva Naturale del Lago di Vico, al riparo da ogni rumore urbano.',
    coordinates: [42.3172, 12.1685],
    schedule: [
      { time: '09:00', activity: 'Colazione all’aperto con canti di uccelli lacustri', note: 'Temperatura ideale di fine settembre' },
      { time: '10:00', activity: 'Passeggiata con carrozzina sulla sponda del lago', note: 'Sentiero pianeggiante tra canneti e boschi di querce' },
      { time: '12:30', activity: 'Pranzo rilassato all’aperto sotto la veranda del camper', note: 'La bimba può dormire all’aria aperta protetta dalle zanzariere' },
      { time: '15:30', activity: 'Visita all’Osservatorio Ornitologico della Riserva di Vico', note: 'Capanni in legno pianeggianti con rampa accessibile per carrozzine' },
      { time: '18:00', activity: 'Preparazione camper per la discesa al mare del giorno dopo', note: 'Verifica serbatoi, scarico grigie e sistemazione interna' }
    ],
    walkDetails: {
      pathName: 'Sentiero Natura Spiaggetta di Vico',
      surface: 'Ghiaia fine battuta e sterrato pianeggiante',
      strollerAccessibility: 'Ottima con ruote da carrozzina su tutto il lungolago',
      shadeLevel: 'Molto alta (bosco a riva d’acqua)'
    },
    camperStop: {
      name: 'Area Camper Caprarola (Lago di Vico)',
      coordinates: [42.3275, 12.1812],
      has220V: true,
      services: 'Allaccio 220V, carico acqua fresca sorgiva, scarico cassetta/nautico',
      notes: 'Terza notte nel verde: sonno profondo e aria pura'
    },
    babyTips: {
      feedingSpots: 'Panchine del pontile in legno sul Lago di Vico',
      diaperPoints: 'Camper a pochi passi',
      comfortNotes: 'L’ambiente lacustre è rilassante per la neonata: il rollio del passeggino favorisce lunghi sonni'
    },
    medicalNearby: {
      pharmacy: 'Farmacia Ronciglione - Corso Umberto I (Tel. 0761 625026)',
      urgentCare: 'Punto di Primo Soccorso Ronciglione (5 km)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Filetto di pesce persico fritto', 'Acquacotta viterbese', 'Biscotti tozzetti alle nocciole e cioccolato'],
      recommendedSpots: 'Ristorante La Bella Venere (lungolago di Vico, terrazza a pelo d’acqua)'
    }
  },
  {
    id: 13,
    dayNumber: 13,
    date: '27 Set',
    title: 'Discesa sulla Costa Tirrenica: Tarquinia Lido',
    route: 'Caprarola → Tarquinia Lido',
    distanceKm: 55,
    drivingTime: '~50 min',
    mobility: 'Carrozzina',
    summary: 'Dai boschi vulcanici alla costa del Tirreno per godere del tepore marino settembrino, dell’aria ricca di iodio e di un lungomare liscio e infinito.',
    coordinates: [42.2356, 11.7214],
    schedule: [
      { time: '10:00', activity: 'Partenza post-poppata direzione Monte Romano e Tarquinia', note: 'Discesa graduale e panoramica verso la Maremma laziale' },
      { time: '11:15', activity: 'Arrivo al Camping Village Tuscia Tirrenica (Tarquinia Lido)', note: 'Piazzola fronte mare, allaccio 220V, servizi completi e docce calde' },
      { time: '12:30', activity: 'Pranzo sul mare e primo respiro di iodio per la neonata', note: 'L’aria di mare fa benissimo alle vie aeree del bimbo' },
      { time: '16:00', activity: 'Lunga passeggiata sulla pista ciclopedonale del lungomare', note: 'Completamente pianeggiante, pavimentata, perfetta per la carrozzina' },
      { time: '18:30', activity: 'Tramonto rosso fuoco sull’orizzonte del Tirreno', note: 'Spettacolo imperdibile con le luci delle isole toscane in lontananza' }
    ],
    walkDetails: {
      pathName: 'Passeggiata Lungomare dei Tirreni',
      surface: 'Asfalto colato, mattonelle e pontili in legno',
      strollerAccessibility: '100% accessibile senza alcuna barriera architettonica',
      shadeLevel: 'Sole temperato di fine settembre, tamerici sul lungomare'
    },
    camperStop: {
      name: 'Camping Village Tuscia Tirrenica (Tarquinia Lido)',
      coordinates: [42.2341, 11.7202],
      has220V: true,
      services: 'Allaccio 220V potenziato, bagni riscaldati per bimbi, lavatrici, market interno, accesso diretto spiaggia',
      notes: 'Struttura ideale per fine viaggio: massima comodità per neonata, docce calde spaziose e quiete settembrina'
    },
    babyTips: {
      feedingSpots: 'Chiringuito riparato dal vento o panchine lungomare fronte onde',
      diaperPoints: 'Nursery del camping o comodità della piazzola camper',
      comfortNotes: 'Portare parasole/ombrellino per carrozzina per le ore del primo pomeriggio'
    },
    medicalNearby: {
      pharmacy: 'Farmacia Lido di Tarquinia - Viale dei Navigatori 14 (Tel. 0766 864228)',
      urgentCare: 'Ospedale Civile di Tarquinia (a 6 km dal lido, con Pronto Soccorso)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Spaghetti alle telline del Tirreno', 'Frittura di paranza maremmana', 'Gelato artigianale sul lungomare'],
      recommendedSpots: 'Ristorante Il Porticciolo o Capolinea Bistrot (fronte mare, ampi spazi per passeggino)'
    }
  },
  {
    id: 14,
    dayNumber: 14,
    date: '28 Set',
    title: 'Giornata Cuscinetto di Puro Mare e Sole Mite',
    route: 'Spostamenti locali a piedi',
    distanceKm: 0,
    drivingTime: '0 min (Camper fermo)',
    mobility: 'Carrozzina',
    summary: 'Giornata di totale relax prima del rientro: sole dolce, brezza salmastra, passeggiata alle Saline Naturali di Tarquinia e preparativi sereni.',
    coordinates: [42.2356, 11.7214],
    schedule: [
      { time: '09:00', activity: 'Risveglio col rumore della risacca e colazione marina', note: 'Ritmo disteso senza sveglia' },
      { time: '10:00', activity: 'Passeggiata verso l’Oasi Naturalistica delle Saline di Tarquinia', note: 'Sentiero pianeggiante con carrozzina, fenicotteri rosa e uccelli migratori' },
      { time: '12:30', activity: 'Pranzo fresco in camper o pesce grigliato da asporto', note: 'Nanna prolungata favorita dal cullare del mare' },
      { time: '16:00', activity: 'Ultimo bagno di sole dolce e gelato pomeridiano', note: 'Fine estate sulla riviera etrusca' },
      { time: '18:00', activity: 'Controllo camper pre-rientro: allineamento carichi e pappe', note: 'Preparare la borsa da viaggio per la tappa finale di domani' }
    ],
    walkDetails: {
      pathName: 'Sentiero delle Saline & Pineta Litoranea',
      surface: 'Pavimentazione liscia e sterrato costiero battuto',
      strollerAccessibility: 'Ottima su tutta la fascia litoranea',
      shadeLevel: 'Pineta vicina molto fresca, lungomare soleggiato'
    },
    camperStop: {
      name: 'Camping Village Tuscia Tirrenica (Tarquinia Lido)',
      coordinates: [42.2341, 11.7202],
      has220V: true,
      services: 'Allaccio 220V, camper service per svuotamento completo acque prima del viaggio',
      notes: 'Seconda notte sul mare: camper già posizionato e pronto per la ripartenza'
    },
    babyTips: {
      feedingSpots: 'Ombra della pineta di Tarquinia Lido a 2 passi dalla spiaggia',
      diaperPoints: 'Nursery e camper comodi a ogni momento',
      comfortNotes: 'Serata mite: ottima per preparare in anticipo l’occorrente del viaggio in ovetto di domani'
    },
    medicalNearby: {
      pharmacy: 'Farmacia Comunale Tarquinia - Via Dante Alighieri (Tel. 0766 856711)',
      urgentCare: 'Ospedale di Tarquinia (Tel. 0766 8491)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Zuppa di moscardini alla tarquiniese', 'Crostini al burro e alici fresche', 'Vino Tarquinia DOC bianco fresco'],
      recommendedSpots: 'Ristorante La Pinnaccola (tavoli all’aperto molto comodi con carrozzina)'
    }
  },
  {
    id: 15,
    dayNumber: 15,
    date: '29 Set',
    title: 'Risalita dell’Aurelia e Rientro a Casa',
    route: 'Tarquinia → Pisa',
    distanceKm: 230,
    drivingTime: '~2h30 (con sosta intermedia poppata)',
    mobility: 'Ovetto',
    summary: 'Risalita comoda e scorrevole lungo la Via Aurelia (SS1) a 4 corsie con sosta intermedia in Maremma per poppata e rientro sereno alla base di Pisa.',
    coordinates: [43.7228, 10.4017],
    schedule: [
      { time: '09:30', activity: 'Ultime operazioni camper (scarico acque, chiusura 220V)', note: 'Bimba sveglia per la poppata mattutina prima della partenza' },
      { time: '10:30', activity: 'Sistemazione bimba nell’Ovetto omologato e partenza sulla SS1 Aurelia', note: 'Andatura costante e rilassata per favorire il sonno' },
      { time: '12:00', activity: 'Sosta rigenerante zona Grosseto / Castiglione della Pescaia', note: 'Pausa pappa, cambio pannolino e gambe sgranchite' },
      { time: '13:30', activity: 'Ripartenza direzione Livorno / Pisa', note: 'Seconda parte del viaggio con musica dolce o rumore bianco in camper' },
      { time: '15:00', activity: 'Arrivo a Pisa e rientro a casa', note: 'Viaggio concluso con successo, ricchezza di ricordi ed esperienza consolidata!' }
    ],
    walkDetails: {
      pathName: 'Area di sosta maremmana & Rientro a Pisa',
      surface: 'Aree di servizio autostradali/statali asfaltate',
      strollerAccessibility: 'Tutto su asfalto durante le soste tecniche',
      shadeLevel: 'Autogrill/aree verdi attrezzate'
    },
    camperStop: {
      name: 'Rientro al Rimessaggio / Casa a Pisa',
      coordinates: [43.7228, 10.4017],
      has220V: true,
      services: 'Allaccio 220V domestico, pulizia camper finale',
      notes: 'Bentornati a casa dopo 15 giorni indimenticabili in famiglia!'
    },
    babyTips: {
      feedingSpots: 'Zona ristoro maremmana all’ombra dei pini marittimi',
      diaperPoints: 'Tavolo camper sempre igienico e confortevole per il cambio',
      comfortNotes: 'Regolare l’inclinazione dell’ovetto e l’aria condizionata delicata in cabina camper'
    },
    medicalNearby: {
      pharmacy: 'Tutte le farmacie del tragitto SS1 / Pisa',
      urgentCare: 'Azienda Ospedaliero-Universitaria Pisana (Cisanello / Santa Chiara - Pediatria)',
      emergencyPhone: '112'
    },
    gastronomy: {
      dishes: ['Torta coi bischeri pisana', 'Crostino toscano al fegatino'],
      recommendedSpots: 'Pranzo comodo in camper durante la sosta maremmana'
    }
  }
];
