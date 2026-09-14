# CHANGELOG

## [1.1.0] - 2026-09-14

### Aggiunto
- **Seconda Guida Web "In camper con Eden" (`eden.html`)**:
  - Itinerario di 16 giorni (15–30 Settembre 2026) in Trentino, Laghi e Garda.
  - 5 basi strategiche da 3 notti (Riva del Garda, Ponte Arche/Comano, Lago di Levico, Lazise, Sarzana/Val di Magra) e rientro a Pisa.
  - Sezione "Due possibilità al giorno" (proposta Mattina e Pomeriggio).
  - Box "Piano Pioggia" dedicato per ciascuna giornata.
  - Monitor quota altimetrica con badge di sicurezza garantita sotto 850-900 m.
  - Ritenuta Eden in marcia, regole sonno e nessun bagno termale per la neonata.
- **Architettura Modulare OOP per Eden**:
  - `EdenItineraryDay.js`: Model esteso con quote e piani pioggia.
  - `edenPart1.js`, `edenPart2.js`, `edenPart3.js`: dati divisi in 3 file per rispettare rigorosamente il vincolo di < 500 righe per file.
  - `EdenDayViewModel.js`: rendering UI delle proposte e del piano pioggia.
  - `EdenCoordinator.js`: coordinamento dello slider a 16 tappe e della mappa.
  - `eden-components.css`: stili dedicati a box mattina/pomeriggio, piano pioggia e switcher.
- **Switcher Rapido Reciproco**:
  - Pulsante in testata su entrambe le pagine per passare con un tocco tra "Tour Centro Italia" e "Tour Trentino con Eden".

## [1.0.0] - 2026-09-14

### Aggiunto
- Guida Web Interattiva Camper per il Tour Centro Italia (15-29 Settembre 2026).
- Architettura OOP & MVVM modulare con tutti i file sotto le 500 righe.
- Mappa interattiva Leaflet e slider orizzontale giornaliero responsive.
