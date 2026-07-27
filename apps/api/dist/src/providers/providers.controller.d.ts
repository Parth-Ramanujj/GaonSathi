import { ProvidersService } from './providers.service';
export declare class ProvidersController {
    private providersService;
    constructor(providersService: ProvidersService);
    getAllListings(categoryId?: string): Promise<({
        category: {
            id: string;
            name: string;
            type: import(".prisma/client").$Enums.CategoryType;
        };
        provider: {
            user: {
                phone: string;
                firstName: string | null;
                lastName: string | null;
            };
        } & {
            id: string;
            userId: string;
            verified: boolean;
            idDocumentUrl: string | null;
            rating: number;
            totalReviews: number;
            bio: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        providerId: string;
        categoryId: string;
        title: string;
        description: string | null;
        basePrice: number;
        isPriceFixed: boolean;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    getProfile(userId: string): Promise<{
        listings: {
            id: string;
            providerId: string;
            categoryId: string;
            title: string;
            description: string | null;
            basePrice: number;
            isPriceFixed: boolean;
            active: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: string;
        userId: string;
        verified: boolean;
        idDocumentUrl: string | null;
        rating: number;
        totalReviews: number;
        bio: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createListing(providerId: string, data: any): Promise<{
        id: string;
        providerId: string;
        categoryId: string;
        title: string;
        description: string | null;
        basePrice: number;
        isPriceFixed: boolean;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
