import { UserService } from "@/server/user/user.service";
import { Controller, Get, Param } from "@nestjs/common";
import { User } from "@prisma/client";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/:id")
  async findUserById(@Param("id") id: number): Promise<User | null> {
    return await this.userService.findUserById(id);
  }
}
