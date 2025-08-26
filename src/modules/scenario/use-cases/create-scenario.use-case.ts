import { Injectable, Logger } from "@nestjs/common";
import { CreateScenarioDto } from "../dto/create-scenario.dto";

@Injectable ()
 export class CreateScenarioRepositry{
    constructor(
  private readonly createScenarioRepository: CreateScenarioRepositry,
  private readonly logger: Logger
    ) {}
    async execute (data: CreateScenarioDto) {
        try {
            const scenario = await this.createScenarioRepository.create(data);
            return scenario;

        } catch (error) {
            this.logger.error(error);
            throw error;
        }
            
        }
    }
 


 