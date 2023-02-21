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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemSeeder = void 0;
const seeder_1 = require("@mikro-orm/seeder");
const Item_1 = __importDefault(require("../entities/Item"));
const Office_1 = __importDefault(require("../entities/Office"));
const User_1 = __importDefault(require("../entities/User"));
const Food_1 = require("./../entities/Food");
const OfficeEquipment_1 = require("./../entities/OfficeEquipment");
const TechnicalEquipment_1 = require("./../entities/TechnicalEquipment");
const items_1 = __importDefault(require("./data/items"));
class ItemSeeder extends seeder_1.Seeder {
    run(em) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield em.getRepository(User_1.default).findAll();
            const offices = yield em.getRepository(Office_1.default).findAll();
            items_1.default.map((item) => __awaiter(this, void 0, void 0, function* () {
                const user = users.find(it => it.id === item.user);
                const office = offices.find(it => it.id === item.office);
                const record = new Item_1.default(item.name, item.status, new Date(item.purchaseDate), item.category, item.description, user, office);
                if (item.tehnicalEquipment) {
                    const equipment = item.tehnicalEquipment;
                    const technicalEquipment = new TechnicalEquipment_1.TehnicalEquipment(equipment.description, equipment.brand, equipment.left_handed, record);
                    em.persist(technicalEquipment);
                }
                if (item.officeEquipment) {
                    const equipment = item.officeEquipment;
                    const officeEquipment = new OfficeEquipment_1.OfficeEquipment(equipment.description, record);
                    em.persist(officeEquipment);
                }
                if (item.food) {
                    const seedFood = item.food;
                    const food = new Food_1.Food(seedFood.vegan, seedFood.vegetarian, seedFood.gluten_free, seedFood.expire_date, seedFood.brand, record);
                    em.persist(food);
                }
                return em.persist(record);
            }));
            yield em.flush();
        });
    }
}
exports.ItemSeeder = ItemSeeder;
