import { Test, TestingModule } from '@nestjs/testing';
import { ConsoleModule } from '../module';
import { ConsoleService } from '../service';
import { Command } from 'commander';

let mod: TestingModule;
let service: ConsoleService;

beforeAll(async () => {
    mod = await Test.createTestingModule({
        imports: [ConsoleModule]
    }).compile();
});

beforeEach(async () => {
    service = mod.get<ConsoleService>(ConsoleService);
});

describe('ConsoleService', () => {
    it('should set the container in the service and return the service', () => {
        expect(service.setContainer(mod)).toBeInstanceOf(ConsoleService);
    });

    it('should have a cli defined', () => {
        const cli = service.getCli();
        expect(cli).toBeDefined();
        expect(cli).toBeInstanceOf(Command);
    });
});
