import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector		: 'anglo-reset-password',
	templateUrl	: './ResetPassword.component.html',
	styleUrls	: ['./ResetPassword.component.scss']
})

export class ResetPasswordComponent implements OnInit {

	resetPasswordForm : FormGroup;

	ReviewsSlides = [
	      { 
	      	images: '/assets/img/user-3.jpg',
	      	name:"Mia Mabanta",
	      	heading:"UI Developer",
	      	content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
	      },
	      { 	images: '/assets/img/user-28.jpg',
		      name:"Astell Mercell",
		      heading:"Director of Brand Development at Quartz",
		      content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
	      },
	      { 
	      	images: '/assets/img/user-4.jpg',
	      	name:"Emmy Loren",
	      	heading:"UX Developer",
	      	content:"Sed consequat lobortis risus, vitae congue nulla tempor id. Curabitur eu augue id nibh tristique tristique. Phasellus vel est nisi"
	      },
	   ];
	   
	constructor(private router : Router,
			private formBuilder : FormBuilder,
			public translate : TranslateService) { }

	ngOnInit() {
		this.resetPasswordForm = this.formBuilder.group({
			newPassword		: ["",[Validators.required,Validators.minLength(6)]],
			confirmPassword : ["",[Validators.required,Validators.minLength(6)]]
		},
		{
      	validator: this.MatchPassword // your validation method
    	})
	}

	/*
	 * Match Password Custom validation
	 */
	MatchPassword(AC: AbstractControl) {
      let password = AC.get('newPassword').value; // to get value in input tag
      let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
      if(password != confirmPassword) {
      	AC.get('confirmPassword').setErrors( {MatchPassword: true} )
      } else {
         return null
      }
	}
}
