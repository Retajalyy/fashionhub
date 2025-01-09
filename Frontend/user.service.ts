// import { Injectable } from '@angular/core';
// import{HttpClient,HttpHeaders} from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { AuthService } from './auth.service';
// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {


//   constructor(private_http:HttpClient,private_authS:AuthService) { }
//   apiURL = 'http://localhost:3000/userType'
//   addUserType(userType: any): Observable<any> {
//     let token = this._authS.getAccessToken().subscribe((data) => {
//       if(data){
//         token=data
//       }
      
//     });
//     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
//   })
//   return this._http.post<any>(this.apiURL, data);
// }
// }
