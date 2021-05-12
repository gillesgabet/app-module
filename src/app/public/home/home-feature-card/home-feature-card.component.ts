import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-feature-card',
  templateUrl: './home-feature-card.component.html',
  styles: [
  ]
})
export class HomeFeatureCardComponent implements OnInit {

  // @Input : permet a un composant fils de récupérer des données de son composant paren (=>home-> feature)
  @Input() description!: string;
  @Input() icon!: string;
  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
