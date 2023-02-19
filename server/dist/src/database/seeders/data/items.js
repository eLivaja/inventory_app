"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        name: 'Tablet',
        status: 'not available',
        purchaseDate: '01.04.2020',
        category: 'tehnical_equipment',
        user: 1,
        tehnicalEquipment: {
            description: 'Tablet',
            brand: 'Apple',
            left_handed: true,
        },
    },
    {
        name: 'Scanner',
        status: 'not available',
        purchaseDate: '01.10.2018',
        category: 'tehnical_equipment',
        user: 2,
        tehnicalEquipment: {
            description: 'Scanner',
            brand: 'HP',
            left_handed: false,
        },
    },
    {
        name: 'Scissors',
        status: 'available',
        purchaseDate: '01.08.2017',
        category: 'office_equipment',
        user: 3,
        office_equipment: {
            description: 'Small Scissors',
        },
    },
    {
        name: 'Toblerone Chocholate',
        status: 'available',
        description: 'Black Chocholate',
        purchaseDate: '01.02.2023',
        category: 'food',
        user: 3,
        food: {
            vegan: false,
            vegetarian: false,
            gluten_free: false,
            expire_date: '01.02.2023',
            brand: 'Toblerone',
        },
    },
    {
        name: 'Apple',
        status: 'available',
        description: 'Green Smith small apples',
        purchaseDate: '05.02.2023',
        category: 'food',
        user: 4,
        food: {
            vegan: true,
            vegetarian: true,
            gluten_free: true,
            expire_date: '01.02.2023',
            brand: 'Green Smith',
        },
    },
    {
        name: 'Paper',
        status: 'available',
        description: 'White A4',
        purchaseDate: '01.12.2022',
        user: 4,
        office_equipment: {
            description: 'no need for extra description?',
        },
    },
];
