import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";
import { Message_Service } from "src/app/message.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  cardData = [
    {
      title: "Assigned Tasks",
      count: 90,
      image: "../assets/images/icons/assignedTasks.png",
      background: "#F8F8F8",
    },
    {
      title: "To Do",
      count: 170,
      image: "../assets/images/icons/toDo.png",
      background: "#F8F8F8",
    },
    {
      title: "In Progress",
      count: 79,
      image: "../assets/images/icons/inProgress.png",
      background: "#F8F8F8",
    },
    {
      title: "Completed",
      count: 39,
      image: "../assets/images/icons/completed.png",
      background: "#F8F8F8",
    },

    {
      title: "Normal",
      count: 170,
      image: "../assets/images/icons/Normal.png",
      background: "#F8F8F8",
    },
    {
      title: "Escalated",
      count: 20,
      image: "../assets/images/icons/Escalated.png",
      background: "#F8F8F8",
    },
    {
      title: "Super-Escalated",
      count: 59,
      image: "../assets/images/icons/superEscalated.png",
      background: "#F8F8F8",
    },
    {
      title: "past Due",
      count: 20,
      image: "../assets/images/icons/pastDue.png",
      background: "#F8F8F8",
    },
  ];

  firstChartData = {
    labels: ["Assigned Tasks", "To Do", "In Progress", "Completed"],
    datasets: [
      {
        data: [90, 170, 79, 39],
        backgroundColor: ["#7fbb00", "#fe2e2b", "#00c1f1", "#002efe"],
        hoverBackgroundColor: ["#7fbb00", "#fe2e2b", "#00c1f1", "#002efe"],
      },
    ],
  };

  firstCharOptions = {
    cutout: "80%",
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#000000de",
          font: {
            size: "14px",
            weight: "bold",
          },
        },
      },
    },
  };

  secondChartData = {
    labels: ["Normal", "Escalated", "Super-Escalated", "Past Due"],
    datasets: [
      {
        data: [90, 170, 79, 39],
        backgroundColor: ["#81ae21", "#b53533", "#20399b", "#2ba0bd"],
        hoverBackgroundColor: ["#81ae21", "#b53533", "#20399b", "#2ba0bd"],
      },
    ],
  };

  secondChartOptions = {
    cutout: "80%",
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#000000de",
          font: {
            size: "14px",
            weight: "bold",
          },
        },
      },
    },
  };

  constructor(
    private Jarvis: AuthService,
    private messageService: Message_Service
  ) {}

  ngOnInit(): void {
    // this.allUserTasks();
  }

  allUserTasks() {
    this.Jarvis.getTasksCount().subscribe(
      (data) => this.handleAllUserTasks(data),
      (error) => this.handleError(error)
    );
  }

  handleAllUserTasks(data) {
    this.messageService.addMessages("success", "Success", data.message);
  }
  handleError(error) {
    const msg = error.error ? error.error : error.message;
    this.messageService.addMessages("error", "Error", msg);
  }
}
