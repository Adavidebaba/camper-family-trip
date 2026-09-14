/**
 * Modulo Centrale Dati Itinerario
 * Unisce le tappe e restituisce istanze della classe OOP ItineraryDay
 */
import { ITINERARY_PART_1 } from './itineraryPart1.js';
import { ITINERARY_PART_2 } from './itineraryPart2.js';
import { ItineraryDay } from '../models/ItineraryDay.js';

const rawData = [...ITINERARY_PART_1, ...ITINERARY_PART_2];

/**
 * Elenco di tutte le 15 tappe convertite in istanze di ItineraryDay
 * @type {Array<ItineraryDay>}
 */
export const ITINERARY_DAYS = rawData.map(item => new ItineraryDay(item));

/**
 * Recupera una giornata per ID numerico (1-15)
 * @param {number} id
 * @returns {ItineraryDay|undefined}
 */
export function getDayById(id) {
  return ITINERARY_DAYS.find(day => day.id === Number(id));
}

/**
 * Calcola i totali complessivi del viaggio
 * @returns {{ totalKm: number, totalDays: number, totalStops: number }}
 */
export function getTripStats() {
  const totalKm = ITINERARY_DAYS.reduce((acc, curr) => acc + (curr.distanceKm || 0), 0);
  return {
    totalKm,
    totalDays: ITINERARY_DAYS.length,
    startDate: '15 Set',
    endDate: '29 Set'
  };
}
