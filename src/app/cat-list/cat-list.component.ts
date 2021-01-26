import { Component, OnInit } from "@angular/core";
import { Cat } from "../models/cat.model";

@Component({
  selector: "app-cat-list",
  templateUrl: "./cat-list.component.html",
  styleUrls: ["./cat-list.component.scss"],
})
export class CatListComponent implements OnInit {
  cats: Cat[] = [
    { name: "Asgore", color: "Orange", personality: "Dumb as fuck" },
    { name: "Moon", color: "Black", personality: "Weird" },
    { name: "Maya", color: "Ginger", personality: "Angry little shit" },
    {
      name: "Sumo",
      color: "Black and white",
      personality: "Likes to hunt flowers",
    },
    {
      name: "Attila",
      color: "Black and White",
      personality: "Fat (and not a Norwegian forest cat)",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  declaration(event: string) {
    window.alert(event + " is now your favorite cat !");
  }
}
