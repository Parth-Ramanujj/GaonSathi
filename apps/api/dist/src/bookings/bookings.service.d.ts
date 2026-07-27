import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { BookingStatus } from '@prisma/client';
export declare class BookingsService {
    private prisma;
    constructor(prisma: PrismaService);
    createBooking(customerId: string, data: CreateBookingDto): Promise<{
        id: string;
        customerId: string;
        providerId: string;
        listingId: string;
        status: import(".prisma/client").$Enums.BookingStatus;
        scheduledDate: Date | null;
        agreedPrice: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getCustomerBookings(customerId: string, page?: number, limit?: number): Promise<{
        data: ({
            provider: {
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
            listing: {
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
            };
        } & {
            id: string;
            customerId: string;
            providerId: string;
            listingId: string;
            status: import(".prisma/client").$Enums.BookingStatus;
            scheduledDate: Date | null;
            agreedPrice: number;
            createdAt: Date;
            updatedAt: Date;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    updateBookingStatus(bookingId: string, status: BookingStatus): Promise<{
        id: string;
        customerId: string;
        providerId: string;
        listingId: string;
        status: import(".prisma/client").$Enums.BookingStatus;
        scheduledDate: Date | null;
        agreedPrice: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
