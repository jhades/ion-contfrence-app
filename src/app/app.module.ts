import { NgModule } from '@angular/core';

import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage, PopoverPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';

import { BaseData } from "../providers/base-data";
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
// import {AngularFireModule} from "angularfire2";


export const firebaseConfig = {
  apiKey: "AIzaSyBIGS3Bo-Jc3NcvpSELjANCuUohVLI3rJs",
  authDomain: "fir-2eaaa.firebaseapp.com",
  databaseURL: "https://fir-2eaaa.firebaseio.com",
  storageBucket: "fir-2eaaa.appspot.com",
  messagingSenderId: "443668439244"
};

@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage
  ],
  imports: [
    IonicModule.forRoot(ConferenceApp),
    // AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage
  ],
  providers: [BaseData,ConferenceData, UserData, Storage]
})
export class AppModule {}
