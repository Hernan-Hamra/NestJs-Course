import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { error } from 'console';
import { Request, Response } from 'express';
import { request } from 'http';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
    if (authorization !== '123') {
      throw new HttpException('Forbiden', HttpStatus.FORBIDDEN);
    }
    next();
  }
}
