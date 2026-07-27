"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('Seeding database...');
    const categoryPlumber = await prisma.category.upsert({
        where: { name: 'Plumber' },
        update: {},
        create: { name: 'Plumber', type: client_1.CategoryType.SERVICE },
    });
    const categoryTractor = await prisma.category.upsert({
        where: { name: 'Tractor Rental' },
        update: {},
        create: { name: 'Tractor Rental', type: client_1.CategoryType.EQUIPMENT },
    });
    const user1 = await prisma.user.upsert({
        where: { phone: '+919999999999' },
        update: {},
        create: {
            phone: '+919999999999',
            roles: ['SERVICE_PROVIDER'],
            firstName: 'Ramesh',
            lastName: 'Patel',
        },
    });
    const user2 = await prisma.user.upsert({
        where: { phone: '+918888888888' },
        update: {},
        create: {
            phone: '+918888888888',
            roles: ['FARMER'],
            firstName: 'Suresh',
            lastName: 'Kumar',
        },
    });
    const profile = await prisma.providerProfile.upsert({
        where: { userId: user1.id },
        update: {},
        create: {
            userId: user1.id,
            verified: true,
            rating: 4.8,
            totalReviews: 24,
            bio: 'Experienced plumber in the village.',
        },
    });
    await prisma.listing.create({
        data: {
            providerId: profile.id,
            categoryId: categoryPlumber.id,
            title: 'Pipe Leakage Repair',
            description: 'Will fix any water pipe leakage.',
            basePrice: 500,
            isPriceFixed: true,
        },
    });
    console.log('Seeding finished.');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map