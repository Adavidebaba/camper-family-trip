/**
 * Coordinator OOP per la guida con Eden
 * Gestisce lo slider a 16 tappe, la sincronizzazione mappa e il ViewModel.
 */
import { EDEN_DAYS, getEdenDayById } from '../data/edenData.js';

export class EdenCoordinator {
  /**
   * @param {Object} components
   * @param {import('../viewmodels/EdenDayViewModel.js').EdenDayViewModel} components.dayViewModel
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
   * Avvia il coordinatore
   */
  start() {
    this.buildSlider();
    this.mapManager.init();
    this.setupEventListeners();
    this.selectDay(1);
  }

  /**
   * Costruisce i pulsanti dello slider per le 16 tappe di Eden
   */
  buildSlider() {
    if (!this.sliderTrack) return;
    this.sliderTrack.innerHTML = '';

    EDEN_DAYS.forEach(day => {
      const pill = document.createElement('div');
      pill.className = 'day-pill';
      pill.id = `pill-eden-${day.id}`;
      pill.dataset.dayId = day.id;

      const mobBadge = day.getMobilityBadge();

      pill.innerHTML = `
        <div class="pill-date">${day.date}</div>
        <div class="pill-stage">Tappa ${day.dayNumber}</div>
        <div class="pill-mobility">${mobBadge.icon} • ${day.altitudeMeters}m</div>
      `;

      pill.addEventListener('click', () => {
        this.selectDay(day.id);
      });

      this.sliderTrack.appendChild(pill);
    });
  }

  /**
   * Ascoltatori per bottoni e tastiera
   */
  setupEventListeners() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.navigateRelative(-1));
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.navigateRelative(1));
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.navigateRelative(-1);
      } else if (e.key === 'ArrowRight') {
        this.navigateRelative(1);
      }
    });
  }

  /**
   * Seleziona e sincronizza la tappa attiva
   * @param {number} dayId
   */
  selectDay(dayId) {
    const day = getEdenDayById(dayId);
    if (!day) return;

    this.activeDayId = day.id;

    const allPills = this.sliderTrack.querySelectorAll('.day-pill');
    allPills.forEach(p => p.classList.remove('active'));

    const activePill = document.getElementById(`pill-eden-${day.id}`);
    if (activePill) {
      activePill.classList.add('active');
      activePill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    // Renderizza la vista del giorno con Eden
    this.dayViewModel.render(day);

    // Centra e attiva il marker della mappa
    this.mapManager.selectStage(day.id);

    if (this.prevBtn) this.prevBtn.disabled = (day.id === 1);
    if (this.nextBtn) this.nextBtn.disabled = (day.id === EDEN_DAYS.length);
  }

  /**
   * Naviga avanti o indietro
   * @param {number} delta
   */
  navigateRelative(delta) {
    const targetId = this.activeDayId + delta;
    if (targetId >= 1 && targetId <= EDEN_DAYS.length) {
      this.selectDay(targetId);
    }
  }
}
