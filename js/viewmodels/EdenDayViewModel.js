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

        <!-- Opzione Extra Molveno (se presente) -->
        ${this.buildMolvenoCard(day.molvenoOption)}

        <!-- Programma Orario & Ritmi Poppate -->
        ${this.buildScheduleSection(day.schedule)}

        <!-- Sosta Notte Camper 220V & Alternative Gratuite -->
        ${this.buildCamperSection(day.camperStop, day.freeCamperAlternatives)}

        <!-- Griglia Dettagli Passeggiate, Focus Eden, Medico ed Enogastronomia -->
        <div class="info-subgrid">
          ${this.buildWalkCard(day.walkDetails)}
          ${this.buildBabyCard(day.babyTips)}
          ${this.buildMedicalCard(day.medicalNearby)}
          ${this.buildGastronomyCard(day.gastronomy, day.specialSpots)}
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
   * Scheda Sosta Camper 220V & Alternative Gratuite con note
   */
  buildCamperSection(camper, freeAlternatives) {
    if (!camper || !camper.name) return '';

    let altHtml = '';
    if (freeAlternatives && freeAlternatives.length > 0) {
      const cards = freeAlternatives.map(alt => `
        <div class="camper-alt-card">
          <div class="camper-alt-name">
            <span>🅿️ ${alt.name}</span>
            <span style="font-size:11px; color:#b05a00; font-weight:bold;">${alt.rating ? '⭐ ' + alt.rating : 'Gratuito'}</span>
          </div>
          <div class="camper-alt-services">📍 ${alt.location} • <strong>Servizi:</strong> ${alt.services}</div>
          <div class="why-omitted-note">
            ⚠️ <strong>Perché considerata secondaria:</strong> ${alt.whyOmittedNote}
          </div>
        </div>
      `).join('');

      altHtml = `
        <div class="camper-alt-section">
          <div class="camper-alt-title">🅿️ Alternative Gratuite (con note sulla posizione)</div>
          ${cards}
        </div>
      `;
    }

    return `
      <div class="section-block">
        <h3 class="section-block-title">🚐 Sosta Notte Camper Primaria & Servizi</h3>
        <div class="camper-card">
          <div class="camper-220v-tag">⚡ Allaccio 220V Disponibile • Accesso Pedonale Diretto</div>
          <div class="camper-name">${camper.name}</div>
          <div class="camper-services"><strong>Servizi:</strong> ${camper.services}</div>
          <div class="camper-notes"><strong>Info Notte & Posizione:</strong> ${camper.notes}</div>
        </div>
        ${altHtml}
      </div>
    `;
  }

  /**
   * Card Opzione Extra Molveno & Dolomiti di Brenta
   */
  buildMolvenoCard(molveno) {
    if (!molveno) return '';
    return `
      <div class="molveno-extra-card">
        <div class="molveno-header">
          <span>🏔️ Opzione Extra: Lago di Molveno & Dolomiti di Brenta (864 m)</span>
        </div>
        <div class="molveno-why-omitted">
          ⚠️ <strong>Perché era omessa nell'anello principale:</strong> ${molveno.whyOmittedNote}
        </div>
        <div style="font-size: 13px; color: var(--color-lake-900); line-height: 1.5;">
          <p><strong>Cosa vedere:</strong> ${molveno.description}</p>
          <p style="margin-top:4px;"><strong>Pasticceria & Sapori:</strong> ${molveno.foodSpot}</p>
          <p style="margin-top:4px;"><strong>Sosta Camper:</strong> ${molveno.camperSpot}</p>
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

  buildGastronomyCard(food, specialSpots) {
    if (!food || !food.dishes) return '';
    const dishesList = food.dishes.join(', ');

    let specialListHtml = '';
    if (specialSpots && specialSpots.length > 0) {
      const items = specialSpots.map(s => `
        <div class="special-spot-item">
          <strong>${s.type}:</strong> ${s.name} (${s.location}) — <em>${s.description}</em>
        </div>
      `).join('');
      specialListHtml = `<div class="special-spots-list">${items}</div>`;
    }

    return `
      <div class="info-card food-card">
        <div class="info-card-header">🍷 Sapori Locali & Pasticcerie</div>
        <div class="info-card-body">
          <p><strong>Da assaggiare:</strong> ${dishesList}</p>
          <p><strong>Consiglio comodo:</strong> ${food.recommendedSpots}</p>
          ${specialListHtml}
        </div>
      </div>
    `;
  }
}

