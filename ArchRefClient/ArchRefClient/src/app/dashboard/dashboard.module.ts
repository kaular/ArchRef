import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { DashboardComponent } from './dashboard.component';
import { TopNavComponent } from '../shared/index';
import { FlashMessageModule } from 'angular2-flash-message';
import { AdministrationModule } from './administration/administration.module';
import { LevelGraphToolModule } from './levelgraphtool/levelgraphtool.module';
import { TopologyTemplateToolModule } from './topologytool/topologytemplatetool.module';
import { ContextmenuModule } from 'ng2-contextmenu';


@NgModule({
  imports: [
    TopologyTemplateToolModule,
    FlashMessageModule,
    ContextmenuModule,
    LevelGraphToolModule,
    CommonModule,
    RouterModule,
    AdministrationModule,
    Ng2BootstrapModule.forRoot()
  ],
  declarations: [DashboardComponent, TopNavComponent ],
  exports: [DashboardComponent, TopNavComponent]
})

/*******************************************************************************************************************
 *
 * @module DashboardModule - Lazy loaded module as wrapper for all application modules and components as
 *                           central view controller of the application
 *
 * @author Arthur Kaul
 *
 ******************************************************************************************************************/
export class DashboardModule { }
