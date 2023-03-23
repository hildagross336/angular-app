import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaiDVListComponent } from 'src/app/pages/LoaiDV/services-tpye-list.component';


import { A11yModule } from '@angular/cdk/a11y';
//import {ClipboardModule} from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { DichvuComponent } from 'src/app/pages/DichVu/dichvu.component';
import { KhachhangComponent } from 'src/app/pages/KhachHang/khachhang.component';
import { ThosuaComponent } from 'src/app/pages/ThoSua/thosua.component';
import { DialogThoSua } from 'src/app/pages/ThoSua/DialogThoSua.component';
import { TintucComponent } from 'src/app/pages/tintuc/tintuc.component';
import { DialogTinTuc } from 'src/app/pages/tintuc/DialogTinTuc.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DialogKhachHang } from 'src/app/pages/KhachHang/DialogKhachHang.component';
import { NhanvienComponent } from 'src/app/pages/nhanvien/nhanvien.component';
import { DialogNhanVien } from 'src/app/pages/nhanvien/dialog_nhanvien.component';
// import {CanvasJS} from 'src/assets/canvasjs.min'
import { HoadonComponent } from 'src/app/pages/hoadon/hoadon.component';
import { DialogHoaDon } from 'src/app/pages/hoadon/DialogHoaDon.component';
import jsPDF from 'jspdf';
import { ReportHopDong } from 'src/app/pages/ThoSua/ReportHopDong.component';

import { HopdongComponent } from 'src/app/pages/HopDong/hopdong.component';
import { GoithoComponent } from 'src/app/pages/GoiTho/goitho.component';
import { DialogGoiTho } from 'src/app/pages/GoiTho/DialogGoiTho.component';
//import { WebsiteLayoutComponent } from '../website-layout/website-layout.component';


// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,

    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    FlexLayoutModule,
    

  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    LoaiDVListComponent,
    DichvuComponent,
    KhachhangComponent,
    ThosuaComponent,
    DialogThoSua,
    TintucComponent,
    DialogTinTuc,
    DialogKhachHang,
    NhanvienComponent,
    DialogNhanVien,
    HoadonComponent,
    DialogHoaDon,
    ReportHopDong,
    HopdongComponent,
    GoithoComponent,
    DialogGoiTho,
    
  ],
   providers: [DatePipe]
})

export class AdminLayoutModule { }
