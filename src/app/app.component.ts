import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PasswordGenrator';
  constructor(private toastr: ToastrService) {}

  newLength: any;
  Mypassword = '';

  letters = false;
  Numbers = false;
  Characters = false;

  emptyString = '';
  strength = '';


  ChangedLength(value: any) {
    console.log(value);
    this.newLength = parseInt(value); //convert string value to number .
    console.log(typeof this.newLength);

    if (this.newLength >= 12) {
      this.strength = 'Strong';
        
    } else if (this.newLength <= 10) {
      this.strength = 'weak';
      
    }
    if (this.newLength <= 5) {
      this.strength = 'very weak';
    }
  }

  IncludeLetters() {
    this.letters = !this.letters;
    console.log('Value is ' + this.letters);
  }
  IncludeNumbers() {
    this.Numbers = !this.Numbers;
    console.log('Value is ' + this.Numbers);
  }
  IncludeCharacters() {
    this.Characters = !this.Characters;
    console.log('Value is ' + this.Characters);
  }

  genratePassword() {
    console.log('Button clicked');

  


    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const num = '1234567890';
    const specialChar = '!@#$%^&*()?/';

    this.emptyString = '';

    if (this.letters) {
      this.emptyString = this.emptyString + str;
    }

    if (this.Numbers) {
      this.emptyString = this.emptyString + num;
    }

    if (this.Characters) {
      this.emptyString = this.emptyString + specialChar;
    }

    let genratedPassword = '';
    for (let i = 0; i < this.newLength; i++) {
      const randomNumber = Math.floor(Math.random() * this.emptyString.length); //multiplied by this.emptyString.length so that the Random number genrated will be between the selected length.
      genratedPassword = genratedPassword + this.emptyString[randomNumber];
    }

    this.Mypassword = genratedPassword;
  }

  copy(val: any) {
    val.select(); //selects the input field

    let copiedTxt = document.execCommand('copy'); //copies the text

    if (copiedTxt) {
      console.log(copiedTxt);
      this.toastr.success('Copied to Clipboard !');
    }
    val.setSelectionRange(0, 100); //copies the text for a given range
  }

  //npm install ngx-toastr --save
}
