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
var __classPrivateFieldSet =
	(this && this.__classPrivateFieldSet) ||
	function (receiver, state, value, kind, f) {
		if (kind === 'm') throw new TypeError('Private method is not writable');
		if (kind === 'a' && !f)
			throw new TypeError('Private accessor was defined without a setter');
		if (
			typeof state === 'function'
				? receiver !== state || !f
				: !state.has(receiver)
		)
			throw new TypeError(
				'Cannot write private member to an object whose class did not declare it'
			);
		return (
			kind === 'a'
				? f.call(receiver, value)
				: f
				? (f.value = value)
				: state.set(receiver, value),
			value
		);
	};
var __classPrivateFieldGet =
	(this && this.__classPrivateFieldGet) ||
	function (receiver, state, kind, f) {
		if (kind === 'a' && !f)
			throw new TypeError('Private accessor was defined without a getter');
		if (
			typeof state === 'function'
				? receiver !== state || !f
				: !state.has(receiver)
		)
			throw new TypeError(
				'Cannot read private member from an object whose class did not declare it'
			);
		return kind === 'm'
			? f
			: kind === 'a'
			? f.call(receiver)
			: f
			? f.value
			: state.get(receiver);
	};
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
var _DB_config, _DB_instance;
Object.defineProperty(exports, '__esModule', { value: true });
exports.init = exports.db = void 0;
const core_1 = require('@mikro-orm/core');
const reflection_1 = require('@mikro-orm/reflection');
const entities_1 = __importDefault(require('./entities'));
const mikro_orm_config_1 = __importDefault(require('./mikro-orm.config'));
class DB {
	constructor(config) {
		_DB_config.set(this, void 0);
		_DB_instance.set(this, void 0);
		__classPrivateFieldSet(this, _DB_config, config, 'f');
	}
	get instance() {
		if (!__classPrivateFieldGet(this, _DB_instance, 'f'))
			throw new Error('Database not connected');
		return __classPrivateFieldGet(this, _DB_instance, 'f');
	}
	connect(connect = true) {
		return __awaiter(this, void 0, void 0, function* () {
			__classPrivateFieldSet(
				this,
				_DB_instance,
				yield core_1.MikroORM.init(
					Object.assign(
						Object.assign({}, __classPrivateFieldGet(this, _DB_config, 'f')),
						{
							populateAfterFlush: true,
							entitiesTs: entities_1.default,
							metadataProvider: reflection_1.TsMorphMetadataProvider,
						}
					),
					connect
				),
				'f'
			);
			return __classPrivateFieldGet(this, _DB_instance, 'f');
		});
	}
}
(_DB_config = new WeakMap()), (_DB_instance = new WeakMap());
const db = new DB(mikro_orm_config_1.default);
exports.db = db;
function init() {
	return __awaiter(this, void 0, void 0, function* () {
		yield db.connect();
	});
}
exports.init = init;
