import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NhanvienServicesService } from 'src/app/Services/NhanVien/nhanvien-services.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  manv: number
  macv: number
  constructor(private router: Router, private nv: NhanvienServicesService) {
    try{
      
    this.manv=this.router.getCurrentNavigation().extras.state.manv;
    this.macv=this.router.getCurrentNavigation().extras.state.macv;
    console.log(this.manv)
    }catch{
      this.router.navigate([''])
    }
   
   }

  ngOnInit() {
 
  }

}
