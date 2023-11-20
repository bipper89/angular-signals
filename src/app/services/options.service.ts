import { Injectable, computed, signal } from "@angular/core";
import { Option } from "../models";

@Injectable({
  providedIn: "root",
})
export class OptionsService {
  private positions = signal<Option<string>[]>([
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Fullstack", value: "fullstack" },
    { label: "Team Lead", value: "tl" },
  ]);

  private images = signal<Option<string>[]>([
    { label: "Angular", value: "assets/img/angular.svg" },
    { label: "Animations", value: "assets/img/animations.svg" },
    { label: "Component Dev Kit", value: "assets/img/cdk.svg" },
    { label: "Command Line Interface", value: "assets/img/cli.svg" },
    { label: "Compiler", value: "assets/img/compiler.svg" },
    { label: "Components", value: "assets/img/components.svg" },
    { label: "Forms", value: "assets/img/forms.svg" },
    { label: "HTTP", value: "assets/img/http.svg" },
    { label: "Internacionalization", value: "assets/img/i18n.svg" },
    { label: "Labs", value: "assets/img/labs.svg" },
    { label: "Language Services", value: "assets/img/language-services.svg" },
    { label: "Material", value: "assets/img/material.svg" },
    { label: "Progresive Web Apps", value: "assets/img/pwa.svg" },
    { label: "Router", value: "assets/img/router.svg" },
    { label: "Universal", value: "assets/img/universal.svg" },
  ]);

  public options = computed(() => ({
    positions: this.positions(),
    images: this.images(),
  }));

  constructor() {}
}
