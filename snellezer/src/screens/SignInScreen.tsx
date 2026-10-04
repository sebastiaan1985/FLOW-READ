import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Platform, Pressable, ScrollView, StyleSheet, View, useWindowDimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, {Path} from 'react-native-svg';
import * as AppleAuthentication from 'expo-apple-authentication';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import {T} from '../components/UI';
import {FlowBackground} from '../components/FlowBackground';
import {LogoTile, Wordmark} from '../components/Logo';
import {brand, fonts} from '../design';
import {useApp} from '../state/AppProvider';
import {GOOGLE_IDS, accountFromGoogleToken, cleanAccount, googleConfigured} from '../state/auth';
import {feel} from '../state/feedback';

WebBrowser.maybeCompleteAuthSession();

/** Het eerste scherm: inloggen met Apple of Google, of zonder account verder. */
export function SignInScreen() {
  const {signIn, skipSignIn} = useApp();
  const {width, height} = useWindowDimensions();
  const wide = width >= 760;
  const [appleReady, setAppleReady] = useState(false);
  const [note, setNote] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'ios') AppleAuthentication.isAvailableAsync().then(setAppleReady).catch(() => setAppleReady(false));
  }, []);

  const apple = async () => {
    setNote('');
    try {
      const c = await AppleAuthentication.signInAsync({requestedScopes: [AppleAuthentication.AppleAuthenticationScope.FULL_NAME, AppleAuthentication.AppleAuthenticationScope.EMAIL]});
      const account = cleanAccount({provider: 'apple', id: c.user, name: c.fullName?.givenName ?? undefined, email: c.email ?? undefined});
      if (account) {feel.done(); signIn(account);}
    } catch (e: any) {
      if (e?.code !== 'ERR_REQUEST_CANCELED') setNote('Inloggen met Apple lukte niet. Probeer het nog eens.');
    }
  };

  return (
    <View style={{flex: 1}}>
      <FlowBackground/>
      <SafeAreaView edges={['top', 'bottom']} style={{flex: 1}}>
        <ScrollView contentContainerStyle={[s.page, {minHeight: height - 40}]} bounces={false}>
          <View style={s.brand}>
            <LogoTile size={44}/>
            <Wordmark size={28} style={{color: '#FFFFFF'}}/>
          </View>
          <View style={{flex: 1, justifyContent: 'center', gap: 14, paddingVertical: 32, maxWidth: 520}}>
            <T variant="eyebrow" color={brand.dot}>28 DAGEN · 10 MINUTEN PER DAG</T>
            <T variant="display" color="#FFFFFF" style={{fontSize: wide ? 56 : 42, lineHeight: wide ? 62 : 48}}>Lees sneller.{'\n'}Onthoud meer.</T>
            <T color="rgba(255,255,255,0.82)" style={{fontSize: 17, lineHeight: 26}}>Log in, dan staat je leesplek klaar met jouw naam. Het duurt maar een paar tellen.</T>
          </View>
          <View style={[s.panel, wide && {alignSelf: 'center', width: 440}]}>
            {appleReady && (
              <AppleAuthentication.AppleAuthenticationButton
                buttonType={AppleAuthentication.AppleAuthenticationButtonType.CONTINUE}
                buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
                cornerRadius={16}
                style={{height: 54, width: '100%'}}
                onPress={apple}
              />
            )}
            {/* Zonder client-ID tonen we geen Google-knop: een knop die niets doet, keurt Apple af. */}
            {googleConfigured(Platform.OS) && <GoogleButton busy={busy} setBusy={setBusy} setNote={setNote} onAccount={a => {feel.done(); signIn(a);}}/>}
            {!!note && <T variant="caption" accessibilityRole="alert" style={{textAlign: 'center', color: '#8A3B12'}}>{note}</T>}
            <Pressable accessibilityRole="button" onPress={() => {feel.tap(); skipSignIn();}} style={({pressed}) => [s.skip, {opacity: pressed ? 0.6 : 1}]}>
              <T variant="label" color={brand.ink}>Doorgaan zonder account</T>
            </Pressable>
            <T variant="caption" style={{textAlign: 'center', fontSize: 12, lineHeight: 17, color: '#5C6B75'}}>Je naam en e-mailadres blijven op dit apparaat. Wij krijgen ze niet en je voortgang blijft van jou.</T>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

/** Een eigen component, zodat de Google-hook alleen draait als er een client-ID is. */
function GoogleButton({busy, setBusy, setNote, onAccount}: {busy: boolean; setBusy: (v: boolean) => void; setNote: (v: string) => void; onAccount: (a: NonNullable<ReturnType<typeof accountFromGoogleToken>>) => void}) {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(GOOGLE_IDS);
  useEffect(() => {
    if (!response) return;
    setBusy(false);
    if (response.type === 'success') {
      const account = accountFromGoogleToken(response.params.id_token ?? '');
      if (account) onAccount(account); else setNote('We konden je Google-account niet lezen. Probeer het nog eens.');
    } else if (response.type === 'error') setNote('Inloggen met Google lukte niet. Probeer het nog eens.');
  }, [response]);
  return <ProviderButton label="Doorgaan met Google" busy={busy} disabled={!request} onPress={() => {setNote(''); setBusy(true); promptAsync().catch(() => setBusy(false));}}/>;
}

function ProviderButton({label, onPress, busy, disabled}: {label: string; onPress: () => void; busy?: boolean; disabled?: boolean}) {
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={label} disabled={disabled || busy} onPress={onPress}
      style={({pressed}) => [s.provider, {opacity: disabled ? 0.5 : pressed ? 0.75 : 1}]}>
      {busy ? <ActivityIndicator color={brand.ink}/> : <><GoogleMark/><T style={{fontFamily: fonts.strong, fontSize: 17, color: '#1F1F1F'}}>{label}</T></>}
    </Pressable>
  );
}

function GoogleMark() {
  return (
    <Svg width={20} height={20} viewBox="0 0 48 48">
      <Path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <Path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <Path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <Path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </Svg>
  );
}

const s = StyleSheet.create({
  page: {flexGrow: 1, paddingHorizontal: 24, paddingTop: 16, paddingBottom: 20, width: '100%', maxWidth: 1080, alignSelf: 'center'},
  brand: {flexDirection: 'row', alignItems: 'center', gap: 12},
  panel: {backgroundColor: '#FFFFFF', borderRadius: 28, padding: 22, gap: 12, shadowColor: '#000', shadowOpacity: 0.18, shadowRadius: 30, shadowOffset: {width: 0, height: 12}, elevation: 8},
  provider: {height: 54, borderRadius: 16, borderWidth: 1.5, borderColor: '#DADCE0', backgroundColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12},
  skip: {minHeight: 48, alignItems: 'center', justifyContent: 'center'},
});
