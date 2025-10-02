# React Native Demo (Expo + TypeScript)

Dieses Projekt ist eine kleine Demo-App, die mit **React Native** und **Expo** entwickelt wurde.  
Ziel war es, grundlegende Funktionen wie Anmeldung und das Laden von Inhalten über eine API zu zeigen.

## Funktionen
- **Login-Screen** (E-Mail & Passwort, einfache Validierung)
- **Navigation** zwischen Login und Startseite mit `expo-router`
- **API-Integration**: Beiträge werden von [jsonplaceholder](https://jsonplaceholder.typicode.com/) geladen
- **Pull-to-Refresh**
- **Lokaler Speicher** für das Session-Token (`AsyncStorage`)

## Technischer Stack
- React Native mit TypeScript
- Expo Router
- React Native Gesture Handler
- Async Storage

## Projekt starten
```bash
npm install
npx expo start
