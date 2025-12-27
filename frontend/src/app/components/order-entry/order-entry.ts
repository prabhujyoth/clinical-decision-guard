import { Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-order-entry',
  imports: [NzTableModule],
  templateUrl: './order-entry.html',
  styleUrl: './order-entry.scss',
})
export class OrderEntry {
  listOfData: any[] = [];

  ngOnInit(): void {
    const data: any[] = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      });
    }
    this.listOfData = data;
  }
}
