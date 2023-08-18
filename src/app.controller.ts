import { Controller, Get, HttpException, Logger } from "@nestjs/common";
import { AppService } from './app.service';
import { Ip } from "./decorators/ip.decorator";
import { ConfigService } from "@nestjs/config";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService
  ) {}

  private readonly logger = new Logger(AppController.name);

  @Get()
  getHello(
    @Ip() ip: string
  ): string {

    this.logger.log(ip);
    this.logger.debug(this.configService.get<string>('ENVIRONMENT'));

    this.logger.error(ip);
    this.logger.verbose(ip);
    this.logger.warn(ip);

    return this.appService.getHello();
  }
}
