import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "card",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Card.component.html",
  styleUrls: ["./Card.component.css"],
})
export class Card {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
