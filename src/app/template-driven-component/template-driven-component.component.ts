import { Component, Output, EventEmitter} from '@angular/core';
import { UserregisterService } from '../userregister.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-template-driven-component',
  templateUrl: './template-driven-component.component.html',
  styleUrl: './template-driven-component.component.css'
})
export class TemplateDrivenComponentComponent {
  nameFormChildUsingOutput:string='';

  childToParent($event:any){
    this.nameFormChildUsingOutput=$event;
  }

}
