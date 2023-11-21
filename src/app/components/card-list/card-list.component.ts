import { Component, Input, OnInit, computed, inject } from "@angular/core";
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
  private userService = inject(UserService);
  users = computed(() => this.userService.viewModel().users);
}
