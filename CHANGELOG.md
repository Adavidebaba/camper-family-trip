# CHANGELOG

## [1.0.0] - 2026-09-14

### Aggiunto
- **Guida Web Interattiva Camper**: applicazione modulare responsive per il viaggio in camper (15-29 Settembre 2026) con moglie e neonata.
- **Dati Tappe (1-15)**: 15 giornate dettagliate suddivise in `itineraryPart1.js` e `itineraryPart2.js` con coordinate GPS, orari baby-friendly, mobilità bimbo, allaccio 220V camper, passeggiate, farmacie/presidi medici e piatti tipici.
- **Architettura OOP & MVVM**:
  - `ItineraryDay.js`: Model OOP con metodi helper per badge e link GPS Google Maps / Waze.
  - `DayViewModel.js`: rendering dinamico delle schede giornaliere.
  - `MapManager.js`: mappa interattiva Leaflet con marker numerati e linea percorso.
  - `AppCoordinator.js`: coordinamento tra slider, mappa e vista.
- **Design System**: stile "Outdoor Family Elegante" con palette verde salvia, terracotta e blu lago in `theme.css`, `layout.css` e `components.css`.
- **Tutti i file sotto le 500 righe**: rispetto rigoroso dei vincoli di modularità e singola responsabilità.
