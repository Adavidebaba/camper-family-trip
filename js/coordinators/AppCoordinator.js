/**
 * Coordinator OOP dell'Applicazione
 * Responsabilità: orchestrare il flusso dati, gli eventi di navigazione tra slider,
 * ViewModel della scheda e MapManager.
 */
import { ITINERARY_DAYS, getDayById } from '../data/itineraryData.js';

export class AppCoordinator {
  /**
   * @param {Object} components - Componenti gestiti
   * @param {import('../viewmodels/DayViewModel.js').DayViewModel} components.dayViewModel
   * @param {import('../managers/MapManager.js').MapManager} components.mapManager
   * @param {HTMLElement} components.sliderTrackElement
   * @param {HTMLElement} components.prevBtn
   * @param {HTMLElement} components.nextBtn
   */
  constructor(components) {
    this.dayViewModel = components.dayViewModel;
    this.mapManager = components.mapManager;
    this.sliderTrack = components.sliderTrackElement;
    this.prevBtn = components.prevBtn;
    this.nextBtn = components.nextBtn;
    this.activeDayId = 1;
  }

  /**
   * Avvia l'applicazione, costruisce lo slider e seleziona la prima tappa
   */
  start() {
    this.buildSlider();
    this.mapManager.init();
    this.setupEventListeners();
    
    // Seleziona la prima tappa di default
    this.selectDay(1);
  }

  /**
   * Costruisce i pulsanti dello slider orizzontale
   */
  buildSlider() {
    if (!this.sliderTrack) return;
    this.sliderTrack.innerHTML = '';

    ITINERARY_DAYS.forEach(day => {
      const pill = document.createElement('div');
      pill.className = 'day-pill';
      pill.id = `pill-day-${day.id}`;
      pill.dataset.dayId = day.id;

      const mobBadge = day.getMobilityBadge();

      pill.innerHTML = `
        <div class="pill-date">${day.date}</div>
        <div class="pill-stage">Tappa ${day.dayNumber}</div>
        <div class="pill-mobility">${mobBadge.icon}</div>
      `;

      pill.addEventListener('click', () => {
        this.selectDay(day.id);
      });

      this.sliderTrack.appendChild(pill);
    });
  }

  /**
   * Registra gli ascoltatori di eventi per pulsanti e scorciatoie da tastiera
   */
  setupEventListeners() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.navigateRelative(-1));
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.navigateRelative(1));
    }

    // Navigazione rapida tramite frecce tastiera
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.navigateRelative(-1);
      } else if (e.key === 'ArrowRight') {
        this.navigateRelative(1);
      }
    });
  }

  /**
   * Seleziona un giorno specifico e aggiorna vista e mappa
   * @param {number} dayId
   */
  selectDay(dayId) {
    const day = getDayById(dayId);
    if (!day) return;

    this.activeDayId = day.id;

    // Aggiorna stato visivo delle pillole slider
    const allPills = this.sliderTrack.querySelectorAll('.day-pill');
    allPills.forEach(p => p.classList.remove('active'));

    const activePill = document.getElementById(`pill-day-${day.id}`);
    if (activePill) {
      activePill.classList.add('active');
      activePill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    // Renderizza la scheda dettagli del giorno
    this.dayViewModel.render(day);

    // Sincronizza la mappa
    this.mapManager.selectStage(day.id);

    // Aggiorna stato bottoni avanti/indietro
    if (this.prevBtn) this.prevBtn.disabled = (day.id === 1);
    if (this.nextBtn) this.nextBtn.disabled = (day.id === ITINERARY_DAYS.length);
  }

  /**
   * Naviga avanti o indietro di N tappe
   * @param {number} delta (-1 o +1)
   */
  navigateRelative(delta) {
    const targetId = this.activeDayId + delta;
    if (targetId >= 1 && targetId <= ITINERARY_DAYS.length) {
      this.selectDay(targetId);
    }
  }
}
