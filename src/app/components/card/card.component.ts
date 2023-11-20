import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { User } from "../../models";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css",
})
export class CardComponent {
  @Input() user: User | undefined = undefined;
  @Input() index: number | null = null;

  onSelectUser() {}

  onDeleteUser() {}
}
