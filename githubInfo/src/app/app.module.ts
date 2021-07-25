import { HttpClientModule } from '@angular/common/http';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';
import { UserReposComponent } from './components/user-repos/user-repos.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { StarReposComponent } from './components/star-repos/star-repos.component';
import { InfoBoxComponent } from './components/shared/info-box/info-box.component';
import { PrListComponent } from './components/shared/pr-list/pr-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserReposComponent,
    LoadingComponent,
    StarReposComponent,
    InfoBoxComponent,
    PrListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
