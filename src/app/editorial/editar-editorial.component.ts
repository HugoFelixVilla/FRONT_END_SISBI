import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Editorial } from '../models/editorial';
import { EditorialService } from '../service/editorial.service';

@Component({
  selector: 'app-editar-editorial',
  templateUrl: './editar-editorial.component.html',
  styleUrls: ['./editar-editorial.component.css']
})
export class EditarEditorialComponent implements OnInit {

  editorial: Editorial = null;
  constructor(
    private editorialService: EditorialService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router


  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    // alert(id);
    this.editorialService.detail(id).subscribe(
      data =>{
        this.editorial =data;

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
    this.editorialService.update(id, this.editorial).subscribe(
      data => {
        this.toastr.success('Editorial Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/lista_edit']);
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