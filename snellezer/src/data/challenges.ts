import {dateKey} from '../state/model';
import type {SessionResult} from '../types';

export type Challenge = { id: string; label: string; exerciseId: string };

/** De daguitdagingen uit de vorige versie, gekoppeld aan de oefeningen van nu. */
export const CHALLENGES: Challenge[] = [
 {id:'rsvp',label:'Lees één tekst woord voor woord',exerciseId:'rsvp'},
 {id:'chunks',label:'Rond één sessie Lezen in chunks af',exerciseId:'chunks'},
 {id:'eye',label:'Doe een oogtraining',exerciseId:'eye'},
 {id:'wordflash',label:'Speel één ronde Woordflits',exerciseId:'wordflash'},
 {id:'paper',label:'Lees een tekst met de leesgids',exerciseId:'paper'},
 {id:'peripheral',label:'Oefen je blikveld met Perifeer zien',exerciseId:'peripheral'},
 {id:'baseline',label:'Meet je leestempo opnieuw',exerciseId:'baseline'},
];

/** Elke dag een andere uitdaging, dezelfde voor de hele dag. */
export function challengeOfDay(date: Date = new Date()): Challenge {
  return CHALLENGES[date.getDate() % CHALLENGES.length];
}

/** Afgerond als je die oefening vandaag hebt gedaan — geen aparte opslag nodig. */
export function challengeDone(sessions: SessionResult[], challenge: Challenge, date: Date = new Date()): boolean {
  return sessions.some(s => s.exerciseId === challenge.exerciseId && dateKey(s.date) === dateKey(date));
}
