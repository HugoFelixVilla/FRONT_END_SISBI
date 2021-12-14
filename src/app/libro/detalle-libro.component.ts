import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Libro } from '../models/libro';
import { LibroService } from '../service/libro.service';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.css']
})
export class DetalleLibroComponent implements OnInit {
  libro: Libro = null;
  constructor(

    private libroService: LibroService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router

  ) { }

  ngOnInit(): void{ const id = this.activatedRoute.snapshot.params['id'];
  this.libroService.detail(id).subscribe(
    data => {
      this.libro = data;
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
  this.router.navigate(['/lista_lib']);
}


}
