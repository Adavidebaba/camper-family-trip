/**
 * Entry Point Applicativo per la guida "In camper con Eden"
 */
import { EDEN_DAYS } from './data/edenData.js';
import { EdenDayViewModel } from './viewmodels/EdenDayViewModel.js';
import { MapManager } from './managers/MapManager.js';
import { EdenCoordinator } from './coordinators/EdenCoordinator.js';

document.addEventListener('DOMContentLoaded', () => {
  const dayContainer = document.getElementById('dayDetailContainer');
  const sliderTrack = document.getElementById('daysTrack');
  const prevBtn = document.getElementById('prevDayBtn');
  const nextBtn = document.getElementById('nextDayBtn');

  const dayViewModel = new EdenDayViewModel(dayContainer);

  let coordinator = null;

  const mapManager = new MapManager('leafletMap', EDEN_DAYS, (selectedDayId) => {
    if (coordinator) {
      coordinator.selectDay(selectedDayId);
    }
  });

  coordinator = new EdenCoordinator({
    dayViewModel,
    mapManager,
    sliderTrackElement: sliderTrack,
    prevBtn,
    nextBtn
  });

  coordinator.start();
});
