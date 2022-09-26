import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {Swal.fire({
    title: '<strong>¡WELCOME!</strong>',
    icon: 'info',
    html:
      'The source code is on github, you can access it by clicking Great!',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<a target="_blank" href="https://github.com/zairdelta/storelocal"><i class="fa fa-thumbs-up"></i> Great!</a>',
    confirmButtonAriaLabel: 'Thumbs up, great!',
  }) }

  ngOnInit(): void {
    
  }

}
