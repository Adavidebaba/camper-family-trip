/**
 * Entry Point Applicativo
 * Bootstrap delle istanze OOP
 */
import { ITINERARY_DAYS } from './data/itineraryData.js';
import { DayViewModel } from './viewmodels/DayViewModel.js';
import { MapManager } from './managers/MapManager.js';
import { AppCoordinator } from './coordinators/AppCoordinator.js';

document.addEventListener('DOMContentLoaded', () => {
  const dayContainer = document.getElementById('dayDetailContainer');
  const sliderTrack = document.getElementById('daysTrack');
  const prevBtn = document.getElementById('prevDayBtn');
  const nextBtn = document.getElementById('nextDayBtn');

  // Inizializza il ViewModel della scheda giorno
  const dayViewModel = new DayViewModel(dayContainer);

  // Inizializza il Coordinator con istanza del MapManager
  let coordinator = null;

  const mapManager = new MapManager('leafletMap', ITINERARY_DAYS, (selectedDayId) => {
    if (coordinator) {
      coordinator.selectDay(selectedDayId);
    }
  });

  coordinator = new AppCoordinator({
    dayViewModel,
    mapManager,
    sliderTrackElement: sliderTrack,
    prevBtn,
    nextBtn
  });

  coordinator.start();
});
