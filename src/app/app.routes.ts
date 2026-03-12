import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'learn',
    pathMatch: 'full'
  },
  {
    path: 'learn',
    loadComponent: () =>
      import('./features/learn-angular/learn-angular-routing.module')
        .then(m => m.LearnAngularRoutingModule)
  },
  {
    path: 'architecture',
    loadComponent: () =>
      import('./features/architecture/architecture-routing.module')
        .then(m => m.ArchitectureRoutingModule)
  },
  {
    path: 'practice',
    loadComponent: () =>
      import('./features/practice/practice.component')
        .then(m => m.PracticeComponent)
  },
  {
    path: 'interview',
    loadComponent: () =>
      import('./features/interview-questions/interview-questions.component')
        .then(m => m.InterviewQuestionsComponent)
  }
];