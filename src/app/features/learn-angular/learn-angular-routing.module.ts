import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { ComponentComponent } from './component/component.component';
import { DiComponent } from './di/di.component';
import { DirectiveComponent } from './directive/directive.component';
import { GuardComponent } from './guard/guard.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { InterceptorsComponent } from './interceptors/interceptors.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { PipeComponent } from './pipe/pipe.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RoutingComponent } from './routing/routing.component';
import { ServiceComponent } from './service/service.component';
import { LearnAngularComponent } from './learn-angular/learn-angular.component';
import { Angular19Component } from './angular-19/angular-19.component';
const routes: Routes = [
 {
    path: '',
    component: Angular19Component,
    children: [
            { path: 'angular', component: Angular19Component },
      { path: 'change-detection', component: ChangeDetectionComponent },
      { path: 'component', component: ComponentComponent },
      { path: 'di', component: DiComponent },
      { path: 'directive', component: DirectiveComponent },
      { path: 'guard', component: GuardComponent },
      { path: 'httpclient', component: HttpclientComponent },
      { path: 'interceptors', component: InterceptorsComponent },
      { path: 'lazy-loading', component: LazyLoadingComponent },
      { path: 'lifecycle-hooks', component: LifecycleHooksComponent },
      { path: 'pipe', component: PipeComponent },
      { path: 'reactive-form', component: ReactiveFormComponent },
      { path: 'routing', component: RoutingComponent },
      { path: 'service', component: ServiceComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnAngularRoutingModule { }
