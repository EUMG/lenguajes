import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LenguajeNoviaComponent } from './components/lenguaje-novia/lenguaje-novia.component';
import { GatiboComponent } from './components/gatibo/gatibo.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDoubleDown, faArrowRotateRight, faBars, faBookmark, faChevronDown, faChevronLeft, faChevronRight, faCircle, faCircleQuestion, faEllipsisVertical, faEnvelope, faGear, faInbox, faList, faMagnifyingGlass, faMessage, faSquare, faStar, faTableList, faTag, faUpRightFromSquare, faUserGroup, faVideo, faXmark } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    LenguajeNoviaComponent,
    GatiboComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library:FaIconLibrary){
    library.addIcons(
      faBars,
      faEnvelope,
      faMessage,
      faVideo,
      faMagnifyingGlass,
      faCircle,
      faChevronDown,
      faCircleQuestion,
      faGear,
      faList,
      faSquare,
      faArrowRotateRight,
      faEllipsisVertical,
      faChevronRight,
      faChevronLeft,
      faTableList,
      faInbox,
      faTag,
      faUserGroup,
      faStar,
      faBookmark,
      faUpRightFromSquare,
      faXmark
    )
  }
}
