import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [],
  templateUrl: '../test/test.component.html',
  styleUrl: './test1.component.css'
})
export class Test1Component {
  testName = 'Muthu From Test1';
}
