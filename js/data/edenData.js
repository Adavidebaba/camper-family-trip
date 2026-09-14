/**
 * Modulo Centrale Dati Itinerario per Eden (15 - 30 Settembre 2026)
 * Unisce le 16 tappe divise in 3 parti per rispettare il limite di 500 righe per file
 */
import { EDEN_PART_1 } from './edenPart1.js';
import { EDEN_PART_2 } from './edenPart2.js';
import { EDEN_PART_3 } from './edenPart3.js';
import { EdenItineraryDay } from '../models/EdenItineraryDay.js';

const rawData = [...EDEN_PART_1, ...EDEN_PART_2, ...EDEN_PART_3];

/**
 * Elenco di tutte le 16 tappe convertite in istanze di EdenItineraryDay
 * @type {Array<EdenItineraryDay>}
 */
export const EDEN_DAYS = rawData.map(item => new EdenItineraryDay(item));

/**
 * Recupera una giornata per ID numerico (1-16)
 * @param {number} id
 * @returns {EdenItineraryDay|undefined}
 */
export function getEdenDayById(id) {
  return EDEN_DAYS.find(day => day.id === Number(id));
}

/**
 * Calcola i totali complessivi del viaggio con Eden
 * @returns {{ totalKm: number, totalDays: number, startDate: string, endDate: string }}
 */
export function getEdenTripStats() {
  const totalKm = EDEN_DAYS.reduce((acc, curr) => acc + (curr.distanceKm || 0), 0);
  return {
    totalKm,
    totalDays: EDEN_DAYS.length,
    startDate: '15 Set',
    endDate: '30 Set'
  };
}
