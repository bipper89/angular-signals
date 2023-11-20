import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OptionsService } from "../../services/options.service";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-form",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.css",
})
export class FormComponent {
  private fb = inject(FormBuilder);
  protected userForm = this.fb.group({
    fullname: [],
    position: [],
    nacionality: [],
    image: [],
  });
  private optionsService = inject(OptionsService);
  protected options = this.optionsService.options;

  get img() {
    const value = this.userForm.controls.image.value;
    return value ? value : "assets/img/angular.svg";
  }
}
