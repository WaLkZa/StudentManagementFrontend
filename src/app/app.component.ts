import { Component } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simo-frontend';

  constructor(private toastr: ToastrService) {}
 
  showToasterSuccess() {
    this.toastr.success('Data shown successfully !!');
  }
 
  showToasterError() {
    this.toastr.error('Something is wrong');
  }
 
  showToasterInfo() {
    this.toastr.info('This is info');
    this.toastr.success('Login successful.')
  }
 
  showToasterWarning() {
    this.toastr.warning('This is warning');
  }
}
