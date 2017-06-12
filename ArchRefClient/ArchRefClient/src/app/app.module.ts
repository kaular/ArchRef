import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FlashMessageModule } from 'angular2-flash-message';
import { DashboardModule } from './dashboard/dashboard.module';
import { ContextmenuModule } from 'ng2-contextmenu';
import { RepositoryService } from './shared/dataservices/repository.service';
import { FragmentNodeService } from './shared/dataservices/types/fragmenttype.service';
import { LevelService } from './shared/dataservices/levelgraph/level.service';
import { LevelGraphService } from './shared/dataservices/levelgraph/levelgraph.service';
import { LevelGraphNodeService } from './shared/dataservices/levelgraph/levelgraphnode.service';
import { LevelGraphRelationService } from './shared/dataservices/levelgraph/levelgraphrelation.service';
import { ExpectedPropertyService } from './shared/dataservices/metrics/expectedproperty.service';
import { NodeTypeService } from './shared/dataservices/types/nodetype.service';
import { RelationshipTypeService } from './shared/dataservices/types/relationshiptype.service';
import { TopologyTemplateService } from './shared/dataservices/topologytemplate/topologytemplate.service';
import { NodeTemplateService } from './shared/dataservices/topologytemplate/nodetemplate.service';
import { RelationshipTemplateService } from './shared/dataservices/topologytemplate/relationshiptemplate.service';
import { PropertyService } from './shared/dataservices/metrics/property.service';
import { ProvidedPropertyService } from './shared/dataservices/metrics/providedpropertyservice.service';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [

    BrowserModule,
    FlashMessageModule,
    ContextmenuModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    DashboardModule
  ],
  providers: [ExpectedPropertyService, ProvidedPropertyService, PropertyService, RepositoryService, RelationshipTemplateService, NodeTemplateService, LevelGraphRelationService, NodeTypeService, RelationshipTypeService, LevelGraphService, LevelService, LevelGraphNodeService, TopologyTemplateService, FragmentNodeService],
  bootstrap: [AppComponent]
})

/****************************************************************************************************************************
 *
 * @module AppModule - Module as wrapper for the whole application modules and components. It is the root module of the application.
 *                     You should register all services here so that the are accessible from everywhere.
 *
 * @author Arthur Kaul
 *
 ***************************************************************************************************************************/
export class AppModule { }
