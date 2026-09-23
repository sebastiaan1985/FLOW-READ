import * as ImagePicker from 'expo-image-picker';
import {manipulateAsync, SaveFormat} from 'expo-image-manipulator';

import {validPhoto} from './model';

/** Een profielfoto is een klein vierkant JPEG-plaatje (ongeveer 20 kB) dat alleen op dit apparaat wordt bewaard. */
export const PHOTO_SIZE = 320;

/** Laat iemand een foto kiezen, snijdt die vierkant bij vanuit het midden en verkleint hem. `null` als er niets gekozen is. */
export async function pickProfilePhoto(): Promise<string | null> {
  const result = await ImagePicker.launchImageLibraryAsync({mediaTypes: ['images'], allowsEditing: true, aspect: [1, 1], quality: 1});
  if (result.canceled || !result.assets?.length) return null;
  const asset = result.assets[0];
  const w = asset.width || PHOTO_SIZE, h = asset.height || PHOTO_SIZE, side = Math.min(w, h);
  const out = await manipulateAsync(asset.uri, [
    {crop: {originX: Math.round((w - side) / 2), originY: Math.round((h - side) / 2), width: side, height: side}},
    {resize: {width: PHOTO_SIZE, height: PHOTO_SIZE}},
  ], {compress: 0.8, format: SaveFormat.JPEG, base64: true});
  const data = out.base64 ? `data:image/jpeg;base64,${out.base64}` : out.uri;
  if (!validPhoto(data)) throw new Error('photo');
  return data;
}
