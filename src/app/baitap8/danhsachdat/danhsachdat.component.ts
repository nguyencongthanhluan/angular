import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-danhsachdat',
  templateUrl: './danhsachdat.component.html',
  styleUrls: ['./danhsachdat.component.css'],
})
export class DanhsachdatComponent implements OnInit {
  @Output() onRemove = new EventEmitter();
  mangGheDaDat: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  xuLyDatGhe(ghe: any) {
    if (ghe.dangDat) {
      this.mangGheDaDat.push(ghe);
    } else {
      const index = this.mangGheDaDat.findIndex(
        (item) => item.soGhe === ghe.soGhe
      );

      if (index !== -1) {
        this.mangGheDaDat.splice(index, 1);
      }
    }
  }
  xuLyHuyGhe(soGhe: number) {
    // Cách 1
    // const index = this.mangGheDaDat.findIndex(
    //   (item) => item.soGhe === soGhe
    // );

    // if (index !== -1) {
    //   this.mangGheDaDat.splice(index, 1);
    // }

    // Cách 2
    // B1: xử lý xóa ghế ra khỏi mangGheDaDat
    this.mangGheDaDat = this.mangGheDaDat.filter(
      (item) => item.soGhe !== soGhe
    );
    // B2: output soGhe ra thằng cha
    this.onRemove.emit(soGhe);
  }
}
