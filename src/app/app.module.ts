import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingAppModule, RoutingComponents} from './core/routes/routing-app.module';
import { IndexComponent } from './layout/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RoutingAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
