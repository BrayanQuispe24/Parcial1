import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoriaListComponent } from "../components/categoria/categoriaList/categoriaList.component";
import { FormularioComponent } from "../components/categoria/formulario/formulario.component";

@Component({
  selector: 'categoria-page',
  imports: [CategoriaListComponent, FormularioComponent],
  templateUrl: './categoria-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriaPageComponent { }
