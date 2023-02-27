'use strict';
var __awaiter =
	(this && this.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value);
				  });
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator['throw'](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done
					? resolve(result.value)
					: adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserSeeder = void 0;
const seeder_1 = require('@mikro-orm/seeder');
const User_1 = __importDefault(require('../entities/User'));
const users_1 = __importDefault(require('./data/users'));
class UserSeeder extends seeder_1.Seeder {
	run(em) {
		return __awaiter(this, void 0, void 0, function* () {
			users_1.default.map(user =>
				__awaiter(this, void 0, void 0, function* () {
					const record = new User_1.default(
						user.firstName,
						user.lastName,
						user.email,
						user.password
					);
					return em.persist(record);
				})
			);
			yield em.flush();
		});
	}
}
exports.UserSeeder = UserSeeder;
