import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingStatusDto } from './dto/update-booking-status.dto';
export declare class BookingsController {
    private bookingsService;
    constructor(bookingsService: BookingsService);
    createBooking(req: any, createBookingDto: CreateBookingDto): Promise<{
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
    getMyBookings(req: any, page: number, limit: number): Promise<{
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
    updateStatus(id: string, updateStatusDto: UpdateBookingStatusDto): Promise<{
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
