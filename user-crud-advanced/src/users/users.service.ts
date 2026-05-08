import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { users } from './enitites/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  //  Dependency Injection
  constructor(
    @InjectRepository(users)
    private readonly userRepository: Repository<users>,
  ) {}

  //   Add New Users
  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });

    if (existingUser) {
      throw new BadRequestException('Email already exists');
    }

    const user = this.userRepository.create(createUserDto);

    return await this.userRepository.save(user);
  }

  // Get All Users
  async findAll() {
    return await this.userRepository.find();
  }

  // Get User By ID
  async findOne(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  // Update User Details
  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);

    Object.assign(user, updateUserDto);

    return await this.userRepository.save(user);
  }

  // Delete Users
  async remove(id: number) {
    const user = await this.findOne(id);

    await this.userRepository.remove(user);

    return {
      success: true,
      message: 'User deletd successfully',
    };
  }
}
