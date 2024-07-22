import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem, PoMenuModule, PoToolbarModule } from '@po-ui/ng-components';

@Component({
  selector: 'lcs-layout',
  standalone: true,
  imports: [
    PoToolbarModule,
    PoMenuModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  @Input() name!: string;

  constructor(private router: Router) { }
  readonly menus: Array<PoMenuItem> = [
    { label: 'Dasboard', link: '/dashboard', action: this.click.bind(this) },
    { label: 'Entregas', link: '/entregas', action: this.click.bind(this) },
  ];

  click(menuItem: PoMenuItem) {
    this.router.navigate([menuItem.link]);
  };
}
