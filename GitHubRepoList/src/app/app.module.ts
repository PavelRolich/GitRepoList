import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepoListComponent } from './repo-list/repo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GitAPIService } from './git-api.service';

@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    GitAPIService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
