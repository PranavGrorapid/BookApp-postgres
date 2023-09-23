import { Controller,Get,Post,Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(

        private usersService:UsersService
    ){}


    @Get()
    getAllUsers() {
        
        return this.usersService.find()
    }

    @Post()
    createUser(@Body() body: any) {
        
        const {email,password}=body
        
        return this.usersService.create(email,password)
    } 


}
