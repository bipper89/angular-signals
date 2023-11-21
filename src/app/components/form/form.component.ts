import { Component, computed, effect, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OptionsService } from "../../services/options.service";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-form",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.css",
})
export class FormComponent {
  private fb = inject(FormBuilder);
  private optionsService = inject(OptionsService);
  private userService = inject(UserService);
  protected options = this.optionsService.options;
  protected user = computed(() => this.userService.viewModel().user);
  protected userForm = this.fb.group({
    fullname: ["", [Validators.required, Validators.minLength(4)]],
    position: ["", Validators.required],
    nacionality: ["", Validators.required],
    img: ["", Validators.required],
  });

  constructor() {
    effect(() => {
      if (this.user() !== undefined) {
        this.userForm.patchValue({
          fullname: this.user()!.fullname,
          position: this.user()!.position,
          nacionality: this.user()!.nacionality,
          img: this.user()!.img,
        });
      } else {
        this.onReset();
      }
    });
  }

  get img() {
    const value = this.userForm.controls.img.value;
    return value ? value : "assets/img/angular.svg";
  }

  onSave() {
    const { fullname, position, nacionality, img } = this.userForm.value;
    if (!fullname || !position || !nacionality || !img) return;
    this.userService.create({ fullname, position, nacionality, img });
    this.onReset();
  }

  onEdit() {
    const { fullname, position, nacionality, img } = this.userForm.value;
    if (!fullname || !position || !nacionality || !img) return;
    this.userService.update({ fullname, position, nacionality, img });
    this.onReset();
  }

  onReset() {
    this.userForm.reset();
  }
}
