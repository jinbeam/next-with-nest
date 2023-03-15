import { PrismaService } from "@/server/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";

@Injectable()
export class UserService {
  constructor(private readonly db: PrismaService) {}

  async findUserById(id: number): Promise<User | null> {
    return await this.db.user.findUnique({
      where: {
        id,
      },
    });
  }
}
