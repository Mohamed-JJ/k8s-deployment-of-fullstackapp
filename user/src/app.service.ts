import { Injectable } from '@nestjs/common';

export type user = {
  id: number;
  name: string;
  last_name : string;
  username: string;
};

@Injectable()
export class AppService {
  users : user[] = [
    {
      id: 1,
      name: "John",
      last_name: "Doe", 
      username: "johndoe"
    },
    {
      id: 2,
      name: "Jane",
      last_name: "Smith",
      username: "janesmith"
    },
    {
      id: 3,
      name: "Mike",
      last_name: "Johnson",
      username: "mikej"
    },
    {
      id: 4,
      name: "Sarah",
      last_name: "Williams",
      username: "sarahw"
    },
    {
      id: 5,
      name: "David",
      last_name: "Brown",
      username: "davidb"
    },
    {
      id: 6,
      name: "Emily",
      last_name: "Davis",
      username: "emilyd"
    },
    {
      id: 7,
      name: "Alex",
      last_name: "Wilson",
      username: "alexw"
    },
    {
      id: 8,
      name: "Lisa",
      last_name: "Taylor",
      username: "lisat"
    }
  ];

  getUsers(): user[] {
    return this.users;
  }
  getUserCount() {
    return this.users.length;
  }
}
