import { TokenStorageService } from "./token-storage.service";
import { LoginInfo } from "./../models/login-info";
// import { User } from './../models/user';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { JwtResponse } from "./jwt-response";
import { environment } from "src/environments/environment";
import { UserInfo } from "../models/user-info";
/**
 * it is a variable of constant type that defines the api of request header and also get the meta data
 */
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Accept: "application/json",
    // "Access-Control-Allow-Origin": "https://sms.innovacontents.com/api/",
    "Access-Control-Allow-Origin": environment.url,
  }),
};
/**
 * It is a Decorator that marks a class as available to be provided and injected as a dependency.
 */
@Injectable({
  providedIn: "root",
})
export class AuthService {
  /**
   * It is a url of an api
   */
  private baseUrl = environment.url;

  /**
   * This is our constructor
   * @param http object of http client
   * @param tokenStorage parameter of token storage service
   */
  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService
  ) {}

  /**
   * This function is used to login, it stores user login credentials
   * @param credentials this parameter stores and passes user credentials
   * @returns
   */
  public authenticate(credentials: LoginInfo): Observable<JwtResponse> {
    const httpOptionsSaved = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": `${this.baseUrl}`,
      }),
    };
    return this.http.post<JwtResponse>(
      `${this.baseUrl}/user/login`,
      credentials,
      httpOptionsSaved
    );
  }
  public signUp(credentials: any): Observable<JwtResponse> {
    const httpOptionsSaved = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": `${this.baseUrl}`,
        "access-token": this.tokenStorage.getToken(),
      }),
    };
    return this.http.post<JwtResponse>(
      `${this.baseUrl}/user/register`,
      credentials,
      httpOptionsSaved
    );
  }

  ///// create task ///

  public createtask(TaskInfo: any) {
    const httpOptionsSaved = {
      headers: new HttpHeaders({
        // "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": `${this.baseUrl}`,
        "access-token": this.tokenStorage.getToken(),
      }),
    };
    return this.http.post(
      `${this.baseUrl}/task/create-task`,
      TaskInfo,
      httpOptionsSaved
    );
  }
  /// all task tabel ///

  public allTaskTabel(TaskInfo: any) {
    const httpOptionsSaved = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": `${this.baseUrl}`,
        "access-token": this.tokenStorage.getToken(),
      }),
    };
    return this.http.post(`${this.baseUrl}`, TaskInfo, httpOptionsSaved);
  }
  public getAllTasks(TaskInfo: any) {
    const httpOptionsSaved = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": `${this.baseUrl}`,
        "access-token": this.tokenStorage.getToken(),
      }),
    };
    return this.http.post(
      `${this.baseUrl}/task/get-all`,
      TaskInfo,
      httpOptionsSaved
    );
  }

  // =============== Departments API's ===============

  // Delete Department

  public deleteDepartment(id: number) {
    const httpOptionsSaved = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": `${this.baseUrl}`,
        "access-token": this.tokenStorage.getToken(),
      }),
    };
    return this.http.post(`${this.baseUrl}`, id, httpOptionsSaved);
  }

  // Get All Departments

  public getAllDepartments(data) {
    const httpOptionsSaved = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": `${this.baseUrl}`,
        "access-token": this.tokenStorage.getToken(),
      }),
    };
    return this.http.post(
      `${this.baseUrl}/department/get-all`,
      data,
      httpOptionsSaved
    );
  }

  // =============== Tasks API's ===============
  // data required for creating a task form
  public getTaskFormData() {
    const httpOptionsSaved = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": `${this.baseUrl}`,
        "access-token": this.tokenStorage.getToken(),
      }),
    };
    return this.http.get(
      `${this.baseUrl}/task/task-form-data`,
      httpOptionsSaved
    );
  }
  // Getting Tasks Counts
  public getTasksCount() {
    const httpOptionsSaved = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": `${this.baseUrl}`,
        "access-token": this.tokenStorage.getToken(),
      }),
    };
    return this.http.get(`${this.baseUrl}`, httpOptionsSaved);
  }

  // Getting One Task
  public getTask(data: any) {
    const httpOptionsSaved = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": `${this.baseUrl}`,
        "access-token": this.tokenStorage.getToken(),
      }),
    };
    return this.http.post(
      `${this.baseUrl}/task/get-task`,
      data,
      httpOptionsSaved
    );
  }

  // =============== Comments API's ===============

  // Get One Task's All Comments
  public getTaskComments(id: number) {
    const httpOptionsSaved = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": `${this.baseUrl}`,
        "access-token": this.tokenStorage.getToken(),
      }),
    };
    return this.http.post(`${this.baseUrl}`, id, httpOptionsSaved);
  }

  // Get One Task's All Comments
  public postComment(data: any) {
    const httpOptionsSaved = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": `${this.baseUrl}`,
        "access-token": this.tokenStorage.getToken(),
      }),
    };
    return this.http.post(`${this.baseUrl}`, data, httpOptionsSaved);
  }

  // =============== Work Logs API's ===============

  // Get One Task's All Work Logs
  public getTasksWorkLogs(id: number) {
    const httpOptionsSaved = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": `${this.baseUrl}`,
        "access-token": this.tokenStorage.getToken(),
      }),
    };
    return this.http.post(`${this.baseUrl}`, id, httpOptionsSaved);
  }

  /// Get User Data ///

  public getUserData() {
    const httpOptionsSaved = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": `${this.baseUrl}`,
        "access-token": this.tokenStorage.getToken(),
      }),
    };
    return this.http.get(`${this.baseUrl}`, httpOptionsSaved);
  }
  //// Add Department
  public addDepartment(DepartmentInfo: any) {
    const httpOptionsSaved = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": `${this.baseUrl}`,
        "access-token": this.tokenStorage.getToken(),
      }),
    };
    return this.http.post(
      `${this.baseUrl}/department/add-department`,
      DepartmentInfo,
      httpOptionsSaved
    );
  }
  public getAllUsers(data) {
    const httpOptionsSaved = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": `${this.baseUrl}`,
        "access-token": this.tokenStorage.getToken(),
      }),
    };
    return this.http.post(
      `${this.baseUrl}/user/get-all-users`,
      data,
      httpOptionsSaved
    );
  }
  public assignEmployee(DepartmentInfo: any) {
    const httpOptionsSaved = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": `${this.baseUrl}`,
        "access-token": this.tokenStorage.getToken(),
      }),
    };
    return this.http.post(
      `${this.baseUrl}/user/assign-employee`,
      DepartmentInfo,
      httpOptionsSaved
    );
  }
  /// User Form ////
  public userFormData(userInfo: UserInfo) {
    const httpOptionsSaved = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": `${this.baseUrl}`,
        "access-token": this.tokenStorage.getToken(),
      }),
    };
    return this.http.post(
      `${this.baseUrl}/user/register`,
      userInfo,
      httpOptionsSaved
    );
  }
  // function used for dynamically searching data from backend so body must contain the database table name on which the search is to be performed
  public dynamicSearch(searchData: any) {
    const httpOptionsSaved = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": `${this.baseUrl}`,
        "access-token": this.tokenStorage.getToken(),
      }),
    };
    return this.http.post(
      `${this.baseUrl}/search/dynamic-search`,
      searchData,
      httpOptionsSaved
    );
  }
}
