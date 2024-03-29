import { Injectable } from '@nestjs/common';
import { ComputerController } from 'src/computer/computer.controller';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {  }

  compute(a: number, b: number) {
    console.log("Drawing 10 watts of power from PowerService");
    this.powerService.supplyPower(10);
    return a + b;
}
}
