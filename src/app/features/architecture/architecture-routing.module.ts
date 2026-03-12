import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrappingComponent } from './bootstrapping/bootstrapping.component';
import { ComponentTreeComponent } from './component-tree/component-tree.component';

const routes: Routes = [
   { path: 'bootstrapping', component: BootstrappingComponent },
    { path: 'component-tree', component: ComponentTreeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchitectureRoutingModule { }
