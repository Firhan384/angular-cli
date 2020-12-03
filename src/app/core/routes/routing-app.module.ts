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

const routes : Routes = [
  {path: 'list-mahasiswa', component : ListMahasiswaComponent},
  {path: 'input-mahasiswa', component : FormMahasiswaComponent}
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
  PageNotFoundComponent
]
