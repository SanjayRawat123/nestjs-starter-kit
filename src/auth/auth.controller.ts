import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthDto } from './auth.dto';

@Controller({path:'auth',
 version:'1'})
export class AuthController {

    @Post('signUp')
    @UsePipes(ValidationPipe)
    registerUser(@Body() userData:AuthDto){
        return {
            message: 'User Registered Successfully',
            email:userData.email,
        };
    }
}
