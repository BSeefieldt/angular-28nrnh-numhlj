import { Component, Input } from '@angular/core'; // First, import Input

@Component({
  selector: 'bryce-seefieldt',
  templateUrl: './bryce-seefieldt.component.html',
  styleUrls: ['./bryce-seefieldt.component.css'],
})
export class BryceApp {
  @Input() phone: string; // decorate the property with @Input()
  @Input() email: string; // decorate the property with @Input()
}
