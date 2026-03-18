import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';

@Component({
  selector: 'app-interceptors',
  imports: [MaterialModule],
  templateUrl: './interceptors.component.html',
  styleUrl: './interceptors.component.scss'
})
export class InterceptorsComponent {


interceptorExample = `
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: 'Bearer token'
      }
    });

    return next.handle(clonedRequest);
  }

}
`;

registerExample = `
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
];
`;
}
