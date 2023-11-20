import { Component, Input, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { User } from "../../models";
import { CardComponent } from "../card/card.component";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-card-list",
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: "./card-list.component.html",
  styleUrl: "./card-list.component.css",
})
export class CardListComponent {
  users: User[] = inject(UserService).viewModel().users;
}
