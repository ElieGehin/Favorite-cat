import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Cat } from "../models/cat.model";

@Component({
  selector: "app-cat-details",
  templateUrl: "./cat-details.component.html",
  styleUrls: ["./cat-details.component.scss"],
})
export class CatDetailsComponent implements OnInit {
  //@Input() cat?: Cat;
  @Input() cat: Cat = { name: "Felix", color: "grey", personality: "evil" };
  @Output() favorite = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
