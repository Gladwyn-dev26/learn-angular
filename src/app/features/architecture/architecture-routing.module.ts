import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrappingComponent } from './bootstrapping/bootstrapping.component';
import { ComponentTreeComponent } from './component-tree/component-tree.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { AngArchitectureComponent } from './ang-architecture/ang-architecture.component';

const routes: Routes = [
   { path: '', component: AngArchitectureComponent },
  //  { path: 'architecture', component: ArchitectureComponent },
      { path: 'angular-architecture', component: AngArchitectureComponent },

   { path: 'bootstrapping', component: BootstrappingComponent },
    { path: 'component-tree', component: ComponentTreeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchitectureRoutingModule { }
