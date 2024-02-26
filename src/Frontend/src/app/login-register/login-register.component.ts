import { AfterViewInit,Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css'
})
export class LoginRegisterComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
      
  }
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const container = this.elementRef.nativeElement.querySelector('#container');
    const registerBtn = this.elementRef.nativeElement.querySelector('#register');
    const loginBtn = this.elementRef.nativeElement.querySelector('#login');

    registerBtn.addEventListener('click', () => {
      container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
      container.classList.remove("active");
    });
  }
  

}
