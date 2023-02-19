declare const _default: {
    entities: (typeof import("./entities/BaseEntity").default | typeof import("./entities/Food").Food | typeof import("./entities/Item").Item | typeof import("./entities/OfficeEquipment").OfficeEquipment | typeof import("./entities/TechnicalEquipment").TehnicalEquipment | typeof import("./entities/User").default | typeof import("./entities/AuditLog").AuditLog | typeof import("./entities/DaysOff").DaysOff | typeof import("./entities/Overtime").Overtime)[];
    host: string;
    port: number;
    dbName: string;
    user: string;
    password: string;
    type: "postgresql";
    migrations: import("@mikro-orm/core").MigrationsOptions;
    seeder: import("@mikro-orm/core").SeederOptions;
    debug?: boolean | undefined;
};
export default _default;
