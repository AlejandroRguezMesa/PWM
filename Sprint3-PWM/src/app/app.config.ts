import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient} from "@angular/common/http";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
const firebaseConfig = {
  apiKey: "AIzaSyA70roiSmIzGiK1DkLqHVgCNJspbNJbAB0",
  authDomain: "empresa-pwm.firebaseapp.com",
  databaseURL: "https://empresa-pwm-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "empresa-pwm",
  storageBucket: "empresa-pwm.appspot.com",
  messagingSenderId: "622964493216",
  appId: "1:622964493216:web:6addbbcabcbf20820f32c5"
};
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth()),
    ]),
  ],

};
