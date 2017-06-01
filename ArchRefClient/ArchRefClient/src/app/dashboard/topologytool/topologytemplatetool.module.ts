import { TopologyModellerComponent } from './topologymodeller/topologymodeller.component';
import { TopologyTemplateComponent } from './topologytemplate.component';
import { TopologyTemplateToolComponent } from './topologytemplatetool.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { RouterModule } from '@angular/router';

import { ContextmenuModule } from 'ng2-contextmenu';


@NgModule({
    imports: [ContextmenuModule, CommonModule, RouterModule, Ng2BootstrapModule.forRoot()],
    declarations: [TopologyTemplateToolComponent, TopologyTemplateComponent, TopologyModellerComponent],
    exports: [TopologyTemplateToolComponent, TopologyTemplateComponent, TopologyModellerComponent]
})

export class TopologyTemplateToolModule { }