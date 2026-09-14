/**
 * ViewModel OOP per il rendering e la gestione visiva della scheda giornaliera
 * Principio di singola responsabilità: presentare i dati di ItineraryDay nel DOM
 */
export class DayViewModel {
  /**
   * @param {HTMLElement} containerElement - Elemento in cui renderizzare la scheda
   */
  constructor(containerElement) {
    this.container = containerElement;
  }

  /**
   * Renderizza la scheda completa per la giornata fornita
   * @param {import('../models/ItineraryDay.js').ItineraryDay} day
   */
  render(day) {
    if (!this.container || !day) return;

    const mobility = day.getMobilityBadge();
    const gmapsUrl = day.getGoogleMapsNavUrl();
    const wazeUrl = day.getWazeNavUrl();

    this.container.innerHTML = `
      <article class="day-card" id="day-card-${day.id}">
        <!-- Intestazione Tappa -->
        <header class="day-header-top">
          <span class="day-badge-date">Tappa ${day.dayNumber} • ${day.date}</span>
          <span class="mobility-badge ${mobility.badgeClass}">
            ${mobility.icon} ${mobility.label}
          </span>
        </header>

        <h2 class="day-title-main">${day.title}</h2>

        <div class="day-route-meta">
          <span class="route-badge">📍 ${day.route}</span>
          <span>•</span>
          <span>🚗 ${day.distanceKm} km</span>
          <span>•</span>
          <span>⏱️ ${day.drivingTime}</span>
        </div>

        <p class="day-summary-box">${day.summary}</p>

        <!-- Azioni Rapide GPS Navigatore -->
        <div class="nav-actions-strip">
          <a href="${gmapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-nav-action btn-google-maps">
            🗺️ Apri su Google Maps
          </a>
          <a href="${wazeUrl}" target="_blank" rel="noopener noreferrer" class="btn-nav-action btn-waze">
            🚙 Naviga con Waze
          </a>
        </div>

        <!-- Programma Orario Baby-Friendly -->
        ${this.buildScheduleSection(day.schedule)}

        <!-- Sosta Notte Camper 220V -->
        ${this.buildCamperSection(day.camperStop)}

        <!-- Griglia Dettagli Passeggiate, Bimbo, Medico ed Enogastronomia -->
        <div class="info-subgrid">
          ${this.buildWalkCard(day.walkDetails)}
          ${this.buildBabyCard(day.babyTips)}
          ${this.buildMedicalCard(day.medicalNearby)}
          ${this.buildGastronomyCard(day.gastronomy)}
        </div>
      </article>
    `;
  }

  /**
   * Costruisce l'HTML della timeline del programma giornaliero
   * @param {Array<{time: string, activity: string, note: string}>} schedule
   * @returns {string}
   */
  buildScheduleSection(schedule) {
    if (!schedule || schedule.length === 0) return '';
    const itemsHtml = schedule.map(item => `
      <div class="timeline-item">
        <div class="timeline-item-time">${item.time}</div>
        <div class="timeline-item-act">${item.activity}</div>
        ${item.note ? `<div class="timeline-item-note">💡 ${item.note}</div>` : ''}
      </div>
    `).join('');

    return `
      <div class="section-block">
        <h3 class="section-block-title">🕒 Programma Orario & Ritmi Neonata</h3>
        <div class="timeline-list">${itemsHtml}</div>
      </div>
    `;
  }

  /**
   * Costruisce l'HTML della card dedicata alla sosta camper e allaccio 220V
   * @param {Object} camper
   * @returns {string}
   */
  buildCamperSection(camper) {
    if (!camper || !camper.name) return '';
    return `
      <div class="section-block">
        <h3 class="section-block-title">🚐 Sosta Notte Camper & Servizi</h3>
        <div class="camper-card">
          <div class="camper-220v-tag">⚡ Allaccio 220V Disponibile</div>
          <div class="camper-name">${camper.name}</div>
          <div class="camper-services"><strong>Servizi:</strong> ${camper.services}</div>
          <div class="camper-notes"><strong>Info Notte:</strong> ${camper.notes}</div>
        </div>
      </div>
    `;
  }

  /**
   * Card accessibilità passeggiate e tipo di fondo
   */
  buildWalkCard(walk) {
    if (!walk || !walk.pathName) return '';
    return `
      <div class="info-card">
        <div class="info-card-header">🚶‍♂️ Passeggiata & Fondo Stradale</div>
        <div class="info-card-body">
          <p><strong>Percorso:</strong> ${walk.pathName}</p>
          <p><strong>Fondo:</strong> ${walk.surface}</p>
          <p><strong>Carrozzina:</strong> ${walk.strollerAccessibility}</p>
          <p><strong>Ombreggiatura:</strong> ${walk.shadeLevel}</p>
        </div>
      </div>
    `;
  }

  /**
   * Card consigli pratici bimba (poppate, cambio, comfort)
   */
  buildBabyCard(baby) {
    if (!baby) return '';
    return `
      <div class="info-card">
        <div class="info-card-header">🍼 Focus Bimbo & Allattamento</div>
        <div class="info-card-body">
          <p><strong>Punti Poppata:</strong> ${baby.feedingSpots}</p>
          <p><strong>Punti Cambio:</strong> ${baby.diaperPoints}</p>
          <p><strong>Comfort & Clima:</strong> ${baby.comfortNotes}</p>
        </div>
      </div>
    `;
  }

  /**
   * Card presidio medico e farmacia
   */
  buildMedicalCard(med) {
    if (!med) return '';
    return `
      <div class="info-card medical-alert">
        <div class="info-card-header">🏥 Presidio Medico & Farmacia</div>
        <div class="info-card-body">
          <p><strong>Farmacia:</strong> ${med.pharmacy}</p>
          <p><strong>Pronto Soccorso:</strong> ${med.urgentCare}</p>
          <p><strong>Emergenza Nazionale:</strong> 📞 ${med.emergencyPhone}</p>
        </div>
      </div>
    `;
  }

  /**
   * Card enogastronomia locale
   */
  buildGastronomyCard(food) {
    if (!food || !food.dishes) return '';
    const dishesList = food.dishes.join(', ');
    return `
      <div class="info-card food-card">
        <div class="info-card-header">🍷 Sapori Locali & Ristoro</div>
        <div class="info-card-body">
          <p><strong>Da assaggiare:</strong> ${dishesList}</p>
          <p><strong>Consiglio comodo:</strong> ${food.recommendedSpots}</p>
        </div>
      </div>
    `;
  }
}
