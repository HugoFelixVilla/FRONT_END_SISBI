import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Editorial } from '../models/editorial';
import { Especialidad } from '../models/especialidad';
import { Libro } from '../models/libro';
import { EditorialService } from '../service/editorial.service';
import { EspecialidadService } from '../service/especialidad.service';
import { LibroService } from '../service/libro.service';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {

  libro: Libro = null;


  lstespecialidad:Especialidad[]=[];
  lsteditorial:Editorial[]=[];
  constructor(

    private libroService: LibroService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private especialidadService:EspecialidadService,
    private editorialService:EditorialService,
    
  ) { }

  ngOnInit(): void{

    this.editorialService.lista().subscribe(edit =>{
      this.lsteditorial=edit;
    })

    this.especialidadService.lista().subscribe(espe =>{
      this.lstespecialidad=espe;
    })

    
    const id = this.activatedRoute.snapshot.params['id'];
    // alert(id);
    this.libroService.detail(id).subscribe(
      data =>{
        this.libro =data;

      },

      err => {
        
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut:3000,
          positionClass:'toast-top-center'
        });
       // this.router.navigate(['/']);
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.libroService.update(id, this.libro).subscribe(
      data => {
        this.toastr.success('Libro Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/lista_lib']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
     //   this.router.navigate(['/']);
      }
    );
  }

}
