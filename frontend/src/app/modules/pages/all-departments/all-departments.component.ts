import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import { EncryptionService } from "src/app/encryption.service";
import { Message_Service } from "src/app/message.service";

@Component({
  selector: "app-all-departments",
  templateUrl: "./all-departments.component.html",
  styleUrls: ["./all-departments.component.css"],
})
export class AllDepartmentsComponent implements OnInit {
  constructor(
    private router: Router,
    private messageService: Message_Service,
    private Jarvis: AuthService,
    private encryptionService: EncryptionService
  ) {}

  ngOnInit(): void {
    this.getAllDepartments({ limit: 10, offset: 0, employeeInclude: true });
  }

  departmentsData = [
    {
      id: 1,
      name: "Creating UI/UX Design Creating UI/UX Design",
      employeeStats: {
        totalEmployees: 19,
        actimeEmployees: 15,
        inActimeEmployees: 4,
      },

      employees: [
        {
          id: 1,
          name: "Shahid Afridi",
          imageUrl: "./assets/images/shahid.png",
        },
        {
          id: 2,
          name: "Faizan Khalid",
          imageUrl: "./assets/images/faizan.png",
        },
        {
          id: 3,
          name: "Saif butt",
          imageUrl: "./assets/images/saif.png",
        },
        {
          id: 4,
          name: "Saif butt",
          imageUrl: "./assets/images/saif.png",
        },
      ],
    },
    {
      id: 2,
      name: "Creating UI/UX Design",
      employeeStats: {
        totalEmployees: 19,
        actimeEmployees: 15,
        inActimeEmployees: 4,
      },
      employees: [
        {
          id: 1,
          name: "Shahid Afridi",
          imageUrl: "./assets/images/shahid.png",
        },
        {
          id: 2,
          name: "Faizan Khalid",
          imageUrl: "./assets/images/faizan.png",
        },
        {
          id: 3,
          name: "Saif butt",
          imageUrl: "./assets/images/saif.png",
        },
      ],
    },
    {
      id: 3,
      name: "Creating UI/UX Design",
      employeeStats: {
        totalEmployees: 19,
        actimeEmployees: 15,
        inActimeEmployees: 4,
      },
      employees: [
        {
          id: 1,
          name: "Shahid Afridi",
          imageUrl: "./assets/images/shahid.png",
        },
        {
          id: 2,
          name: "Faizan Khalid",
          imageUrl: "./assets/images/faizan.png",
        },
        {
          id: 3,
          name: "Saif butt",
          imageUrl: "./assets/images/saif.png",
        },
      ],
    },
    {
      id: 4,
      name: "Creating UI/UX Design",
      employeeStats: {
        totalEmployees: 19,
        actimeEmployees: 15,
        inActimeEmployees: 4,
      },
      employees: [
        {
          id: 1,
          name: "Shahid Afridi",
          imageUrl: "./assets/images/shahid.png",
        },
        {
          id: 2,
          name: "Faizan Khalid",
          imageUrl: "./assets/images/faizan.png",
        },
        {
          id: 3,
          name: "Saif butt",
          imageUrl: "./assets/images/saif.png",
        },
      ],
    },
    {
      id: 5,
      name: "Creating UI/UX Design",
      employeeStats: {
        totalEmployees: 19,
        actimeEmployees: 15,
        inActimeEmployees: 4,
      },
      employees: [
        {
          id: 1,
          name: "Shahid Afridi",
          imageUrl: "./assets/images/shahid.png",
        },
        {
          id: 2,
          name: "Faizan Khalid",
          imageUrl: "./assets/images/faizan.png",
        },
        {
          id: 3,
          name: "Saif butt",
          imageUrl: "./assets/images/saif.png",
        },
      ],
    },
    {
      id: 6,
      name: "Creating UI/UX Design",
      employeeStats: {
        totalEmployees: 19,
        actimeEmployees: 15,
        inActimeEmployees: 4,
      },
      employees: [
        {
          id: 1,
          name: "Shahid Afridi",
          imageUrl: "./assets/images/shahid.png",
        },
        {
          id: 2,
          name: "Faizan Khalid",
          imageUrl: "./assets/images/faizan.png",
        },
        {
          id: 3,
          name: "Saif butt",
          imageUrl: "./assets/images/saif.png",
        },
      ],
    },
    {
      id: 7,
      name: "Creating UI/UX Design",
      employeeStats: {
        totalEmployees: 19,
        actimeEmployees: 15,
        inActimeEmployees: 4,
      },
      employees: [
        {
          id: 1,
          name: "Shahid Afridi",
          imageUrl: "./assets/images/shahid.png",
        },
        {
          id: 2,
          name: "Faizan Khalid",
          imageUrl: "./assets/images/faizan.png",
        },
        {
          id: 3,
          name: "Saif butt",
          imageUrl: "./assets/images/saif.png",
        },
      ],
    },
    {
      id: 8,
      name: "Creating UI/UX Design",
      employeeStats: {
        totalEmployees: 19,
        actimeEmployees: 15,
        inActimeEmployees: 4,
      },
      employees: [
        {
          id: 1,
          name: "Shahid Afridi",
          imageUrl: "./assets/images/shahid.png",
        },
        {
          id: 2,
          name: "Faizan Khalid",
          imageUrl: "./assets/images/faizan.png",
        },
        {
          id: 3,
          name: "Saif butt",
          imageUrl: "./assets/images/saif.png",
        },
      ],
    },
    {
      id: 9,
      name: "Creating UI/UX Design",
      employeeStats: {
        totalEmployees: 19,
        actimeEmployees: 15,
        inActimeEmployees: 4,
      },
      employees: [
        {
          id: 1,
          name: "Shahid Afridi",
          imageUrl: "./assets/images/shahid.png",
        },
        {
          id: 2,
          name: "Faizan Khalid",
          imageUrl: "./assets/images/faizan.png",
        },
        {
          id: 3,
          name: "Saif butt",
          imageUrl: "./assets/images/saif.png",
        },
      ],
    },
  ];

  onCardButtonClick(event) {
    if (event.value == "add") {
      this.router.navigate(["user/add-department"]);
    }
    if (event.value == "edit") {
      let encryptedId = this.encryptionService.encryptUsingAES256(
        event.id.toString()
      );
      this.router.navigate(["user/add-department"], {
        queryParams: {
          id: encryptedId,
        },
      });
    }
    if (event.value == "delete") {
      if (event.confirm) {
        this.deleteDepartment(event.id);
      }
    }
  }

  // =============== API Calls Starting ===============

  // Get Department
  getAllDepartments(data) {
    this.Jarvis.getAllDepartments(data).subscribe(
      (data) => this.handleAllDepartments(data),
      (error) => this.handleError(error)
    );
  }

  // Delete Department
  deleteDepartment(id: number) {
    // this.Jarvis.deleteDepartment(id).subscribe(
    //   (data) => this.handleDeleteDepartment(data),
    //   (error) => this.handleError(error)
    // );
  }

  // =============== API Calls Ending ===============

  // =============== Data Handling Starting ===============

  handleDeleteDepartment(data) {
    this.messageService.addMessages("success", "Success", data.message);
  }

  handleAllDepartments(data) {
    this.messageService.addMessages("success", "Success", data.message);
    this.departmentsData = [];
    for (let info of data.data) {
      let obj = {
        id: info.id,
        name: info.name,
        employeeStats: {
          totalEmployees: info.Users.length,
          actimeEmployees: info.Users.length,
          inActimeEmployees: 0,
        },
        employees: info.Users,
      };
      obj.employees = [];
      // to be done later
      // for (let value of info.Users) {
      //   obj.employees.push({
      //     id: value.id,
      //     name: value.name,
      //     imageUrl: "./assets/images/shahid.png",
      //   });
      // }
      this.departmentsData.push(obj);
    }
    // departmentsData = [
    // {
    //   id: 1,
    //   name: "Creating UI/UX Design Creating UI/UX Design",
    //   employeeStats: {
    //     totalEmployees: 19,
    //     actimeEmployees: 15,
    //     inActimeEmployees: 4,
    //   },

    //   employees: [
    //     {
    //       id: 1,
    //       name: "Shahid Afridi",
    //       imageUrl: "./assets/images/shahid.png",
    //     },
    //     {
    //       id: 2,
    //       name: "Faizan Khalid",
    //       imageUrl: "./assets/images/faizan.png",
    //     },
    //     {
    //       id: 3,
    //       name: "Saif butt",
    //       imageUrl: "./assets/images/saif.png",
    //     },
    //     {
    //       id: 4,
    //       name: "Saif butt",
    //       imageUrl: "./assets/images/saif.png",
    //     },
    //   ],
    // },
  }

  // =============== Data Handling Ending ===============

  handleError(error) {
    const msg = error.error ? error.error : error.message;
    this.messageService.addMessages("error", "Error", msg);
  }
}
