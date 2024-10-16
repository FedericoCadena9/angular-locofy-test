import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "card1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Card1.component.html",
  styleUrls: ["./Card1.component.css"],
})
export class Card1 {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
