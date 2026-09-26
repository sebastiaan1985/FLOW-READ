import {useEffect, useState} from 'react';
import {AccessibilityInfo, Platform} from 'react-native';
import * as Haptics from 'expo-haptics';

/** Voelbare bevestiging, alleen in de app. Op het web doen we niets: trillen in een browser voelt eerder als een fout. */
export const feel = {
  tap: () => { if (Platform.OS !== 'web') Haptics.selectionAsync().catch(() => {}); },
  done: () => { if (Platform.OS !== 'web') Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {}); },
};

/** Of iemand minder beweging wil zien. Luistert mee als de instelling verandert. */
export function useReduceMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    let alive = true;
    AccessibilityInfo.isReduceMotionEnabled().then(v => { if (alive) setReduce(v); }).catch(() => {});
    const sub = AccessibilityInfo.addEventListener('reduceMotionChanged', setReduce);
    return () => { alive = false; sub.remove(); };
  }, []);
  return reduce;
}
