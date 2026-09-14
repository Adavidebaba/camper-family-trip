/**
 * Modello ad Oggetti per la singola tappa dell'itinerario
 * Rispetta il principio di singola responsabilità (SRP)
 */
export class ItineraryDay {
  /**
   * @param {Object} data - Dati grezzi della giornata
   */
  constructor(data) {
    this.id = data.id;
    this.dayNumber = data.dayNumber;
    this.date = data.date;
    this.title = data.title;
    this.route = data.route;
    this.distanceKm = data.distanceKm;
    this.drivingTime = data.drivingTime;
    this.mobility = data.mobility; // 'Carrozzina' | 'Marsupio' | 'Marsupio obbligatorio' | 'Ovetto' | 'Marsupio / Carrozzina'
    this.summary = data.summary;
    this.schedule = data.schedule || []; // array di { time, activity, note }
    this.walkDetails = data.walkDetails || {}; // { pathName, surface, strollerAccessibility, shadeLevel }
    this.camperStop = data.camperStop || {}; // { name, coordinates, has220V, services, notes, mapsLink }
    this.babyTips = data.babyTips || {}; // { feedingSpots, diaperPoints, comfortNotes }
    this.medicalNearby = data.medicalNearby || {}; // { pharmacy, urgentCare, emergencyPhone }
    this.gastronomy = data.gastronomy || {}; // { dishes, recommendedSpots }
    this.coordinates = data.coordinates; // [lat, lng] per la mappa
  }

  /**
   * Restituisce la classe CSS o il badge associato alla mobilità del neonato
   * @returns {Object} { label, icon, badgeClass }
   */
  getMobilityBadge() {
    const mob = this.mobility.toLowerCase();
    if (mob.includes('obbligatorio')) {
      return {
        label: this.mobility,
        icon: '⚠️ 🦘',
        badgeClass: 'badge-marsupio-strict'
      };
    } else if (mob.includes('marsupio')) {
      return {
        label: this.mobility,
        icon: '🦘',
        badgeClass: 'badge-marsupio'
      };
    } else if (mob.includes('ovetto')) {
      return {
        label: this.mobility,
        icon: '🚗',
        badgeClass: 'badge-ovetto'
      };
    }
    return {
      label: this.mobility,
      icon: '🍼 🛒',
      badgeClass: 'badge-carrozzina'
    };
  }

  /**
   * Genera il link rapido di navigazione Google Maps per la sosta camper
   * @returns {string}
   */
  getGoogleMapsNavUrl() {
    if (this.camperStop && this.camperStop.coordinates) {
      const [lat, lng] = this.camperStop.coordinates;
      return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    }
    const [lat, lng] = this.coordinates;
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  }

  /**
   * Genera il link rapido Waze per la sosta camper
   * @returns {string}
   */
  getWazeNavUrl() {
    const coords = (this.camperStop && this.camperStop.coordinates) ? this.camperStop.coordinates : this.coordinates;
    const [lat, lng] = coords;
    return `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;
  }

  /**
   * Verifica se la giornata prevede spostamento in camper
   * @returns {boolean}
   */
  isDrivingDay() {
    return this.distanceKm > 0;
  }
}
