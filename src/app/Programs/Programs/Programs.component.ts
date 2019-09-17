import { Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'anglo-programs',
  templateUrl: './Programs.component.html',
  styleUrls: ['./Programs.component.scss']
})

export class ProgramsComponent implements OnInit {

	constructor(public translate : TranslateService) { }

	ngOnInit() {}

}
