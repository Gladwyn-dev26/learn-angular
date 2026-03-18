import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', redirectTo: 'learn-angular', pathMatch: 'full' },

  {
    path: 'learn-angular',
    loadChildren: () =>
      import('./features/learn-angular/learn-angular.module')
        .then(m => m.LearnAngularModule)
  },
  {
    path: 'architecture',
    loadChildren: () =>
      import('./features/architecture/architecture.module')
        .then(m => m.ArchitectureModule)
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