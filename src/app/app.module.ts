import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { baseUrl } from "../shared/baseUrl";
import { IonicStorageModule } from "@ionic/storage";
import { LocalNotifications } from "@ionic-native/local-notifications";
import { EmailComposer } from "@ionic-native/email-composer";
import { SocialSharing } from "@ionic-native/social-sharing";
import { Camera } from "@ionic-native/camera";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { MenuPage } from '../pages/menu/menu';
import { ContactPage } from '../pages/contact/contact';
import { DishdetailPage} from "../pages/dishdetail/dishdetail";
import { FavoritesPage } from "../pages/favorites/favorites";
import { ReservationPage } from "../pages/reservation/reservation";
import { RegisterPage } from "../pages/register/register";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DishProvider } from '../providers/dish/dish';
import { LeaderProvider } from '../providers/leader/leader';
import { PromotionProvider } from '../providers/promotion/promotion';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { FavoriteProvider } from '../providers/favorite/favorite';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    MenuPage,
    ContactPage,
    DishdetailPage,
    FavoritesPage,
    RegisterPage,
    ReservationPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    MenuPage,
    ContactPage,
    DishdetailPage,
    FavoritesPage,
    RegisterPage,
    ReservationPage,
  ],
  providers: [
    Camera,
    EmailComposer,
    LocalNotifications,
    SocialSharing,
    StatusBar,
    SplashScreen,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: 'baseUrl', useValue: baseUrl},
    DishProvider,
    LeaderProvider,
    PromotionProvider,
    ProcessHttpmsgProvider,
    FavoriteProvider
  ]
})
export class AppModule {}
