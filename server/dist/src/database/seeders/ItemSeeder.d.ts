import { EntityManager } from '@mikro-orm/postgresql';
import { Seeder } from '@mikro-orm/seeder';
export declare class ItemSeeder extends Seeder {
    run(em: EntityManager): Promise<void>;
}
