import { PrismaService } from '../prisma/prisma.service';
export declare class PaymentsService {
    private prisma;
    constructor(prisma: PrismaService);
    initiatePayment(bookingId: string): Promise<{
        id: string;
        bookingId: string;
        razorpayOrderId: string | null;
        amount: number;
        status: import(".prisma/client").$Enums.PaymentStatus;
        escrowReleased: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    verifyPaymentWebhook(payload: any, signature: string): Promise<{
        received: boolean;
    }>;
}
