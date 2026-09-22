import {Platform} from 'react-native';
import * as Notifications from 'expo-notifications';

/** Dagelijkse herinneringen werken alleen in de iPhone- en Android-app, niet in de browser. */
export const remindersSupported = Platform.OS === 'ios' || Platform.OS === 'android';

if (remindersSupported) {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({shouldShowBanner: true, shouldShowList: true, shouldPlaySound: false, shouldSetBadge: false}),
  });
}

/** Plant één rustige herinnering per dag, of haalt hem weg. Geeft false terug als er geen toestemming is. */
export async function applyReminder(reminder: {enabled: boolean; hour: number; minute: number}): Promise<boolean> {
  if (!remindersSupported) return false;
  await Notifications.cancelAllScheduledNotificationsAsync();
  if (!reminder.enabled) return true;
  const current = await Notifications.getPermissionsAsync();
  const permission = current.granted ? current : await Notifications.requestPermissionsAsync();
  if (!permission.granted) return false;
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('dagelijks', {name: 'Dagelijkse les', importance: Notifications.AndroidImportance.DEFAULT});
  }
  await Notifications.scheduleNotificationAsync({
    content: {title: 'Je les van vandaag staat klaar', body: 'Een paar minuten lezen, in je eigen tempo.'},
    trigger: {type: Notifications.SchedulableTriggerInputTypes.DAILY, hour: reminder.hour, minute: reminder.minute, channelId: 'dagelijks'},
  });
  return true;
}
