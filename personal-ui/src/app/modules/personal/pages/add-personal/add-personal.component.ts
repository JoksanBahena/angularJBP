import { DialogRef } from "@angular/cdk/dialog";
import { Component, OnInit } from "@angular/core";
import { Personal } from "../../types/personal";
import { PersonalService } from "../../service/personal.service";

@Component({
  selector: "app-add-personal",
  templateUrl: "./add-personal.component.html",
})
export class AddPersonalComponent implements OnInit {
  person: Personal = {
    id: 0,
    name: "",
    surname: "",
    lastname: "",
    birthday: "",
    salary: 0,
    position: {},
  };

  positions: any[] = [];

  constructor(
    public modal: DialogRef<AddPersonalComponent>,
    private personalService: PersonalService
  ) {
    this.person = this.personalService.person;
  }

  ngOnInit(): void {
    this.getPositions();
    
  }

  getPositions() {
    this.personalService.findAllPositions().subscribe((response) => {
      this.personalService.setIsLoading = false;
      this.positions = response;
      console.log(this.person);
      console.log(this.personalService.personal);
      
    });
  }

  savePerson() {
    if (this.personalService.edit) {
      this.personalService.update(this.person).subscribe((response) => {
        this.personalService.setIsLoading = false;
      });
    } else {
      this.personalService.save(this.person).subscribe((response) => {
        this.personalService.setIsLoading = false;
        console.log(this.person);
        this.person = {
          id: 0,
          name: "",
          surname: "",
          lastname: "",
          birthday: "",
          salary: 0,
          position: {},
        };

        this.modal.close();
        //cerrar el modal
        //limpiar el formulario
        //consultar nuevamente la lista de personal 
      });
    }
  }
}
