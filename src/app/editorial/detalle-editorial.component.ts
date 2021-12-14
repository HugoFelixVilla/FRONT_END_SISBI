import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Editorial } from '../models/editorial';
import { EditorialService } from '../service/editorial.service';

@Component({
  selector: 'app-detalle-editorial',
  templateUrl: './detalle-editorial.component.html',
  styleUrls: ['./detalle-editorial.component.css']
})
export class DetalleEditorialComponent implements OnInit {
  editorial: Editorial = null;
  constructor(

    private editorialService: EditorialService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router


  ) { }

  ngOnInit(): void { const id = this.activatedRoute.snapshot.params['id'];
  this.editorialService.detail(id).subscribe(
    data => {
      this.editorial = data;
    },
    err => {
      this.toastr.error(err.error.mensaje, 'Fail', {
        timeOut: 3000,  positionClass: 'toast-top-center',
      });
      this.volver();
    }
  );
  
}

volver(): void {
  this.router.navigate(['/lista_edit']);
}


}
