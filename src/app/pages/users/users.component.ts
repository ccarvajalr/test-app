import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { ThrowStmt } from '@angular/compiler';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  desde:number=1;
  current_page: number=0;
  per_page:number=0;
  total:number=0;
  total_pages:number=0;
  arr_tot =[];
  usuarios = [];
  usuariosSort = [];
  constructor(public _userService : UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers()
  {

    this._userService.getUsers(this.desde).subscribe((resp:any)=>{

      this.total_pages = resp.total_pages;
      this.current_page = resp.page;
      this.arr_tot = new Array(this.total_pages);
      this.usuarios = resp.data;

      this.usuariosSort = this.usuarios.sort((a,b)=>{
        return (a.first_name > b.first_name ? 1 : -1)
      });

    });

  }
  paginacion(valor : string)
  {
    let page_next =  Number.parseInt(valor);
    if (page_next <= this.total_pages && page_next > 0) {
      this.desde = page_next;
      this.getUsers();
    }
  }

}
