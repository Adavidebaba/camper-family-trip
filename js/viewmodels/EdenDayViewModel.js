/**
 * ViewModel OOP dedicato per il rendering della scheda giornaliera del viaggio con Eden
 * Include Proposte Mattina/Pomeriggio, Piano Pioggia, Quota Altimetrica e Regole Eden.
 */
export class EdenDayViewModel {
  /**
   * @param {HTMLElement} containerElement
   */
  constructor(containerElement) {
    this.container = containerElement;
  }

  /**
   * Renderizza la scheda completa per la giornata fornita
   * @param {import('../models/EdenItineraryDay.js').EdenItineraryDay} day
   */
  render(day) {
    if (!this.container || !day) return;

    const mobility = day.getMobilityBadge();
    const altitude = day.getAltitudeBadge();
    const gmapsUrl = day.getGoogleMapsNavUrl();
    const wazeUrl = day.getWazeNavUrl();

    this.container.innerHTML = `
      <article class="day-card" id="day-card-${day.id}">
        <!-- Header Tappa & Badges -->
        <header class="day-header-top">
          <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
            <span class="day-badge-date">Tappa ${day.dayNumber} • ${day.date}</span>
            <span class="badge-base-tag">📍 ${day.baseName}</span>
          </div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <span class="mobility-badge ${altitude.badgeClass}">
              ⛰️ ${altitude.label}
            </span>
            <span class="mobility-badge ${mobility.badgeClass}">
              ${mobility.icon} ${mobility.label}
            </span>
          </div>
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

        <!-- Due Possibilità al Giorno: Mattina & Pomeriggio -->
        ${this.buildTwoHalvesSection(day.morningProposal, day.afternoonProposal)}

        <!-- Piano Pioggia Dedicato -->
        ${this.buildRainPlanSection(day.rainPlan)}

        <!-- Programma Orario & Ritmi Poppate -->
        ${this.buildScheduleSection(day.schedule)}

        <!-- Sosta Notte Camper 220V -->
        ${this.buildCamperSection(day.camperStop)}

        <!-- Griglia Dettagli Passeggiate, Focus Eden, Medico ed Enogastronomia -->
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
   * Costruisce il blocco "Due possibilità al giorno" (Mattina & Pomeriggio)
   */
  buildTwoHalvesSection(morning, afternoon) {
    if (!morning && !afternoon) return '';
    return `
      <div class="section-block">
        <h3 class="section-block-title">☀️ Due Possibilità al Giorno (Senza Obblighi)</h3>
        <div class="halves-grid">
          ${morning ? `
            <div class="half-box morning">
              <span class="half-label">🌅 Mattina: ${morning.title}</span>
              <p class="half-desc">${morning.description}</p>
              <div class="half-time">⏱️ Stima: ${morning.timeEstimate}</div>
            </div>
          ` : ''}
          ${afternoon ? `
            <div class="half-box afternoon">
              <span class="half-label">🌇 Pomeriggio: ${afternoon.title}</span>
              <p class="half-desc">${afternoon.description}</p>
              <div class="half-time">⏱️ Stima: ${afternoon.timeEstimate}</div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  /**
   * Costruisce il box per il Piano Pioggia
   */
  buildRainPlanSection(rain) {
    if (!rain || !rain.title) return '';
    return `
      <div class="rain-plan-box">
        <div class="rain-plan-header">
          <span>🌧️ Piano Pioggia Alternativo: ${rain.title}</span>
        </div>
        <div class="rain-plan-body">
          <p>${rain.indoorActivity}</p>
          ${rain.notes ? `<p class="rain-plan-notes">💡 <strong>Nota:</strong> ${rain.notes}</p>` : ''}
        </div>
      </div>
    `;
  }

  /**
   * Timeline del programma
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
        <h3 class="section-block-title">🕒 Programma Suggerito & Ritmi di Eden</h3>
        <div class="timeline-list">${itemsHtml}</div>
      </div>
    `;
  }

  /**
   * Scheda Sosta Camper 220V
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

  buildBabyCard(baby) {
    if (!baby) return '';
    return `
      <div class="info-card">
        <div class="info-card-header">🍼 Viaggiare con Eden</div>
        <div class="info-card-body">
          <p><strong>Punti Poppata:</strong> ${baby.feedingSpots}</p>
          <p><strong>Punti Cambio:</strong> ${baby.diaperPoints}</p>
          <p><strong>Comfort & Clima:</strong> ${baby.comfortNotes}</p>
        </div>
      </div>
    `;
  }

  buildMedicalCard(med) {
    if (!med) return '';
    return `
      <div class="info-card medical-alert">
        <div class="info-card-header">🏥 Presidio Pediatrico & Farmacia</div>
        <div class="info-card-body">
          <p><strong>Farmacia:</strong> ${med.pharmacy}</p>
          <p><strong>Pronto Soccorso:</strong> ${med.urgentCare}</p>
          <p><strong>Emergenza Nazionale:</strong> 📞 ${med.emergencyPhone}</p>
        </div>
      </div>
    `;
  }

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
