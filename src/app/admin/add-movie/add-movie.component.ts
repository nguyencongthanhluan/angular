import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MoviesService } from 'src/app/core/services/movies.service';
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  form: FormGroup;
  imagePreview: string | ArrayBuffer = '';

  constructor(private movieService: MoviesService) {
    this.form = new FormGroup({
      tenPhim: new FormControl(''),
      biDanh: new FormControl(''),
      trailer: new FormControl(''),
      hinhAnh: new FormControl(''),
      moTa: new FormControl(''),
      ngayKhoiChieu: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  handleChangeFile(event) {
    const file = event.target.files[0];

    if (!file) return;

    this.form.patchValue({ hinhAnh: file });
    // biến đối tượng file thành base64 => có thể gắn vào tag img
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onloadend = (e) => {
      console.log(e.target.result);
      this.imagePreview = e.target.result;
    };
  }

  handleAddMovie() {
    console.log(this.form.value);
    this.movieService.addMovie(this.form.value).subscribe();
  }
}
