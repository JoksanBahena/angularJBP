import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { materialModules } from './types/material-modules';
import { AppRouterModule } from './shared/routers/app-router.module';
import { AuthModule } from './modules/auth/auth.module';
import { PersonalModule } from './modules/personal/personal.module';
import { CustomHttpInterceptorService } from './services/http_interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AuthModule,
    PersonalModule,
    ...materialModules,
    HttpClientModule,
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: CustomHttpInterceptorService,
    multi: true,
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
