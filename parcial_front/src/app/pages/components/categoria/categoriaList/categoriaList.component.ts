import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoriaComponent } from "../categoria/categoria.component";

@Component({
  selector: 'categoria-list',
  imports: [CategoriaComponent],
  templateUrl: './categoriaList.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriaListComponent { }
