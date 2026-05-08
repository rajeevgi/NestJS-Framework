import { IsEmail, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({
    message: 'Name is required',
  })
  name!: string;

  @IsEmail(
    {},
    {
      message: 'Invalid email address',
    },
  )
  email!: string;

  @IsNumber()
  @Min(1)
  age!: number;
}
