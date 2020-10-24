import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { GheComponent } from '../ghe/ghe.component';

import { GheService } from 'src/app/core/services/ghe.service';
import { Ghe } from 'src/app/core/models/ghe';

@Component({
  selector: 'app-danhsachghe',
  templateUrl: './danhsachghe.component.html',
  styleUrls: ['./danhsachghe.component.css'],
})
export class DanhsachgheComponent implements OnInit {
  @Output() onSelect = new EventEmitter();
  @ViewChildren(GheComponent) gheComponents: QueryList<GheComponent>;

  mangGhe: Ghe[];

  // Để sử dụng được service phải khai báo trong constrcutor
  constructor(private gheService: GheService) {}

  // tương đương với componentDidMount bên react
  ngOnInit(): void {
    this.mangGhe = this.gheService.layDanhSachGhe();
  }

  xuLyDatGhe(ghe: any) {
    this.onSelect.emit(ghe);
  }

  xuLyHuyGhe(soGhe: number) {
    this.gheComponents.forEach((item: GheComponent) => {
      if (item.ghe.soGhe === soGhe) {
        item.dangDat = false;
      }
    });
  }
}
