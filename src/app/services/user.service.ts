import { Injectable, computed, signal } from "@angular/core";
import { User } from "../models";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private users = signal<User[]>([]);
  private user = signal<User | undefined>(undefined);
  private index = signal<number | null>(null);
  public readonly viewModel = computed(() => ({
    users: this.users(),
    user: this.user(),
  }));

  create(user: User) {
    this.users.update((users) => [...users, user]);
  }

  read(index: number) {
    this.user.set(this.users()[index]);
    this.index.set(index);
  }

  update(user: User) {
    if (this.index() === null) return;
    this.users.update((users) => [(users[this.index()!] = { ...user })]);
    this.user.set(undefined);
    this.index.set(null);
  }

  delete(index: number) {
    this.users.update((users) => [
      ...users.slice(0, index),
      ...users.slice(index + 1),
    ]);
  }
}
