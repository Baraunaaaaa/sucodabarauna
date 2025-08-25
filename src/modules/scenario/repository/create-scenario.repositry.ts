import { Injectable } from "@nestjs/common";
import { Scenario } from "@prisma/client";
import { PrismaService } from "src/shared/databases/prisma.database";
import { CreateScenarioDto } from "../dto/create-scenario.dto";

@Injectable()
 export class CreateScenarioRepositry {
    constructor(private readonly prisma: PrismaService){}
   async create(data: CreateScenarioDto){
      const scenario =await this.prisma.scenario.create({
         data,
      });
      return scenario;
   }
 }