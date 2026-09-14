/**
 * Modello OOP dedicato per le tappe dell'itinerario con Eden
 * Eredita la struttura base e aggiunge proprietà specifiche:
 * quota altimetrica, piano pioggia, proposta mattina e pomeriggio.
 */
import { ItineraryDay } from './ItineraryDay.js';

export class EdenItineraryDay extends ItineraryDay {
  /**
   * @param {Object} data - Dati grezzi della giornata
   */
  constructor(data) {
    super(data);
    this.altitudeMeters = data.altitudeMeters || 70; // Quota base in metri
    this.morningProposal = data.morningProposal || {}; // { title, description, timeEstimate }
    this.afternoonProposal = data.afternoonProposal || {}; // { title, description, timeEstimate }
    this.rainPlan = data.rainPlan || {}; // { title, indoorActivity, notes }
    this.baseName = data.baseName || ''; // Nome della base di soggiorno (Riva, Comano, Levico, Lazise, Sarzana)
    this.nightsInBase = data.nightsInBase || 3; // Numero notti continuative
  }

  /**
   * Restituisce un badge sullo stato di sicurezza della quota altimetrica (<850m)
   * @returns {{ label: string, isSafe: boolean, badgeClass: string }}
   */
  getAltitudeBadge() {
    const isSafe = this.altitudeMeters <= 900;
    return {
      label: `Quota: ${this.altitudeMeters} m`,
      isSafe,
      badgeClass: isSafe ? 'badge-altitude-safe' : 'badge-altitude-warn'
    };
  }
}
