/**
 * Manager OOP per la gestione della Mappa Interattiva Leaflet
 * Responsabilità: cartografia, tracciamento itinerario, marker personalizzati e sincronizzazione vista
 */
export class MapManager {
  /**
   * @param {string} elementId - ID del contenitore DOM della mappa
   * @param {Array<import('../models/ItineraryDay.js').ItineraryDay>} days - Elenco delle tappe
   * @param {Function} onStageSelected - Callback quando l'utente clicca su un marker
   */
  constructor(elementId, days, onStageSelected) {
    this.elementId = elementId;
    this.days = days;
    this.onStageSelected = onStageSelected;
    this.map = null;
    this.markers = new Map(); // dayId -> Leaflet marker
    this.routePolyline = null;
    this.activeDayId = null;
  }

  /**
   * Inizializza la mappa Leaflet con layer OpenStreetMap e marker
   */
  init() {
    if (!window.L) {
      console.error('Leaflet non è caricato');
      return;
    }

    // Centro medio tra Toscana, Marche, Umbria e Lazio
    const initialCenter = [43.0, 12.0];
    this.map = window.L.map(this.elementId, {
      center: initialCenter,
      zoom: 8,
      scrollWheelZoom: false
    });

    // Layer OpenStreetMap con stile pulito
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.renderRoute();
    this.renderMarkers();
  }

  /**
   * Disegna la linea del percorso che connette tutte le 15 tappe
   */
  renderRoute() {
    const latLngs = this.days.map(d => d.coordinates);
    this.routePolyline = window.L.polyline(latLngs, {
      color: '#42725e',
      weight: 3.5,
      opacity: 0.8,
      dashArray: '6, 8',
      lineCap: 'round'
    }).addTo(this.map);

    // Adatta lo zoom per mostrare tutto il percorso
    this.map.fitBounds(this.routePolyline.getBounds(), { padding: [30, 30] });
  }

  /**
   * Renderizza i marker numerati personalizzati per ciascun giorno
   */
  renderMarkers() {
    this.days.forEach(day => {
      const customIcon = window.L.divIcon({
        className: 'custom-leaflet-marker',
        html: `<div class="custom-pin" id="pin-day-${day.id}">${day.dayNumber}</div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -18]
      });

      const marker = window.L.marker(day.coordinates, { icon: customIcon }).addTo(this.map);
      
      const popupHtml = `
        <div style="font-family: sans-serif; font-size: 13px; line-height: 1.4;">
          <strong>Tappa ${day.dayNumber}: ${day.date}</strong><br/>
          <span style="color:#576860;">${day.route}</span><br/>
          <span style="font-size: 11.5px; font-weight: bold; color: #42725e;">${day.mobility}</span>
        </div>
      `;
      marker.bindPopup(popupHtml);

      marker.on('click', () => {
        if (typeof this.onStageSelected === 'function') {
          this.onStageSelected(day.id);
        }
      });

      this.markers.set(day.id, marker);
    });
  }

  /**
   * Seleziona e focalizza una tappa sulla mappa
   * @param {number} dayId
   */
  selectStage(dayId) {
    if (this.activeDayId) {
      const prevEl = document.getElementById(`pin-day-${this.activeDayId}`);
      if (prevEl) prevEl.classList.remove('active-pin');
    }

    this.activeDayId = dayId;
    const currentEl = document.getElementById(`pin-day-${dayId}`);
    if (currentEl) currentEl.classList.add('active-pin');

    const marker = this.markers.get(dayId);
    if (marker && this.map) {
      this.map.panTo(marker.getLatLng(), { animate: true, duration: 0.8 });
      marker.openPopup();
    }
  }
}
