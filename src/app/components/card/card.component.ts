import { Component, Input, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { User } from "../../models";
import { UserService } from "../../services/user.service";

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
  private userService = inject(UserService);

  onSelectUser() {
    if (this.index === null) return;
    this.userService.read(this.index);
  }

  onDeleteUser() {
    if (this.index === null) return;
    this.userService.delete(this.index);
  }
}
