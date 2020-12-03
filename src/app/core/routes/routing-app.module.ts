import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
// Component
import { IndexComponent } from '../../layout/index/index.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FormMahasiswaComponent } from '../../layout/content/form-mahasiswa/form-mahasiswa.component';
import { ListMahasiswaComponent } from '../../layout/content/list-mahasiswa/list-mahasiswa.component';
import { PageNotFoundComponent } from '../../layout/page-not-found/page-not-found.component';
import { AboutComponent } from '../../layout/about/about.component';
import { BannerSliderComponent } from '../../layout/banner-slider/banner-slider.component';

const routes : Routes = [
  {path: 'list-mahasiswa', component : ListMahasiswaComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component : IndexComponent},
  {path: 'about', component : AboutComponent},
  {path: 'input-mahasiswa', component : FormMahasiswaComponent},
  {path: '**', component : PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingAppModule {}
export const RoutingComponents = [
  IndexComponent,
  FooterComponent,
  NavbarComponent,
  FormMahasiswaComponent,
  ListMahasiswaComponent,
  PageNotFoundComponent,
  AboutComponent,
  BannerSliderComponent
]
