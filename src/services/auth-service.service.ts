// import { Injectable } from '@angular/core';
// import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
// import {Observable} from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthServiceService implements HttpInterceptor{
//
//   constructor(private err: HttpErrorResponse) { }
//
//    handleAuthError(): Observable<any> {
//     if (this.err.status === 401 || this.err.status === 403) {
//       console.log('403');
//     }
//     return Observable.throw(this.err);
//   }
//
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return undefined;
//   }
// }
