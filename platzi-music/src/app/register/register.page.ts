import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  validation_message = {
    nombre: [
      { type: "required", message: " El nombre es requerido"},
      { type: "pattern", message: " El nombre introducido no es válido" },
      { type: "minLength", message: " El nombre debe tener mínimo tres letras"}
    ],
    apellido: [
      { type: "required", message: " El apellido es requerido"},
      { type: "pattern", message: " El apellido introducido no es válido" },
      { type: "minLength", message: " El apellido debe tener mínimo tres letras"}
    ],
    email: [
      { type: "required", message: " El email es requerido" },
      { type: "pattern", message: " ojo! este no es un email válido" }
    ],
    password: [
      { type: "required", message: " El password es requerido" },
      { type: "minlength", message: " Minimo 5 letras para el password" }
    ]
  };

  errorMessage: string = "";
  

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthenticateService, 
    private navCtrl: NavController, 
    private storage: Storage
  ) { 
    this.registerForm = this.formBuilder.group({
      nombre: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[a-zA-Z ]+"),
        Validators.minLength(3)
      ])
      ),
      apellido: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[a-zA-Z ]+"),
        Validators.minLength(3)
      ])
      ),
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])
      ),
      password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])
      )

    });
  }

  ngOnInit() {
  }

}
