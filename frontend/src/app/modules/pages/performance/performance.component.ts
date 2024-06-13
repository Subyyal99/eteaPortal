import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Message_Service } from 'src/app/message.service';
import { PerformanceInfo } from 'src/app/models/performance-info';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {
 
  performancepageinfo: PerformanceInfo={
    title:"Faizan Khalid",
    image:"assets/images/FaizanKhalid.png",
    employName:"Faizan khalid",
    employDesignation:"Project Manager",
    department:"Project Management Office",
    email:"faizankhalid@gmail.com",
    cardNumber: "03339875214",
    cardLocation:"Taxila,Islamabad,1112",
  }
  datee: Date;
  constructor(
    private Jarwis: AuthService,
    private messageService:  Message_Service,
  ) { }

  getUserData(){
    // this.Jarwis.getUserData().subscribe(
    //   (data) => this.handleTabelData(data),
    //   (error) => this.handleError(error)
    // );
  }
  handleTabelData(data){
    this.performancepageinfo =data.data
  }
  handleError(error){
    const msg = error.error ? error.error : error.message;
    this.messageService.addMessages("error", "Error", msg);
  }
  iconData = [
    { icon: '../assets/images/icons/assignedTasks.png', data: 'Assigned tasks', number:'90' },
    { icon: '../assets/images/icons/toDo.png', data: 'To Do', number:'80' },
    { icon: '../assets/images/icons/inProgress.png', data: 'In-Progress', number:'20' },
    { icon: '../assets/images/icons/completed.png', data: 'Completed', number:'10' },
   

  ];
  iconsData=[
    { icon: '../assets/images/icons/Normal.png', data: 'Normal', number:'15' },
    { icon: '../assets/images/icons/Escalated.png', data: 'Escalated', number:'40' },
    { icon: '../assets/images/icons/superEscalated.png', data: 'Super-Escalated', number:'65' },
    { icon: '../assets/images/icons/pastDue.png', data: 'past Due', number:'70' },
  ]
  multiAxisOptions:any;
  taskData = [
      // {
      //   heading:'Task',
      //   chartData: {
      //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      //     datasets: [
      //       {
      //         label: 'Assigned tasks',
      //         backgroundColor: ['#B8FE22'],
      //         yAxisID: 'y',
      //         data: [65, 59, 80, 81, 56, 55, 10, 65, 66, 36, 45, 65]
      //       },
      //       {
      //         label: 'In Progress',
      //         backgroundColor: '#4ED4F5',
      //         yAxisID: 'y',
      //         data: [38, 48, 40, 19, 86, 27, 90, 66, 77, 88, 22, 33]
      //       },
      //       {
      //         label: 'To-Do',
      //         backgroundColor: '#FE3024',
      //         yAxisID: 'y',
      //         data: [28, 38, 50, 89, 81, 57, 95, 12, 32, 65, 45, 98]
      //       },
      //       {
      //         label: 'Completed',
      //         backgroundColor: '#164BFE',
      //         yAxisID: 'y',
      //         data: [48, 48, 40, 19, 86, 27, 90, 77, 75, 85, 95, 15]
      //       }
      //     ]
      //   },
      //   progressData: {
      //     knobValue: 20,
      //     knobColor:'#FAB400',
      //     readonly:'true',
      //     task:'Update Development',
      //     taskNumber: '2/10',
      //     assignTo: 'Ishfaque Ahmed',
      //     assignDay: '1 day ago',
      //     employeImg: 'assets/images/shahid.png'
      //   }
      // },
      {
        chartData: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'Normal',
              backgroundColor: ['#56FEA3'],
              yAxisID: 'y',
              data: [65, 59, 80, 81, 56, 55, 10, 65, 66, 36, 45, 65]
            },
            {
              label: 'Super-Escalated',
              backgroundColor: '#8264FF',
              yAxisID: 'y',
              data: [38, 48, 40, 19, 86, 27, 90, 66, 77, 88, 22, 33]
            },
            {
              label: 'Past Due',
              backgroundColor: '#C8FF54',
              yAxisID: 'y',
              data: [28, 38, 50, 89, 81, 57, 95, 12, 32, 65, 45, 98]
            },
            {
              label: 'Escalated',
              backgroundColor: '#FF9F48',
              yAxisID: 'y',
              data: [48, 48, 40, 19, 86, 27, 90, 77, 75, 85, 95, 15]
            }
          ]
        },
        progressData: {
          knobValue: 90,
          knobColor:'#32FA00',
          readonly:'true',
          task:'Missed',
          taskNumber: '1/10',
          assignTo: 'Ishfaque Ahmed',
          assignDay: '5 day ago',
          employeImg: 'assets/images/shahid.png'
        }
      }
    ];
  ngOnInit(): void {
    this.datee= new Date();
  }

}
