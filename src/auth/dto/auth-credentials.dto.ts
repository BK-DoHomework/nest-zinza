import { IsString, MinLength, MaxLength, Matches, IsBoolean, IsNumber } from "class-validator";

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    { message: 'Password is weak' }
  )
  //Biểu thức chính quy
  //https://gist.github.com/arielweinberger/18a29bfa17072444d45adaeeb8e92ddc
  //tạm thời em cứ để string hết -->sẽ điều chỉnh cho phù hợp
  password: string;

  @IsString()
  salt: string;

  @IsString()
  email: string;

  @IsString()
  gender: string;

  @IsString()
  dob: string;

  @IsString()
  avatar: string;

  @IsString()
  is_active: string;

  @IsString()
  created_at: string;

  @IsString()
  created_by: string;

  @IsString()
  leaveTime: string;

  @IsString()
  position: string;

}