"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20230210085304 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
const TABLE_NAME = 'user';
class Migration20230210085304 extends migrations_1.Migration {
    up() {
        return __awaiter(this, void 0, void 0, function* () {
            const knex = this.getKnex();
            const user = knex.schema.createTable(TABLE_NAME, table => {
                table.increments();
                table.string('first_name').notNullable();
                table.string('last_name').notNullable();
                table.string('email').notNullable();
                table.string('password').nullable();
                table.timestamps();
            });
            this.addSql(user.toQuery());
        });
    }
    down() {
        return __awaiter(this, void 0, void 0, function* () {
            const knex = this.getKnex();
            this.addSql(knex.schema.dropTable(TABLE_NAME).toQuery());
        });
    }
}
exports.Migration20230210085304 = Migration20230210085304;
