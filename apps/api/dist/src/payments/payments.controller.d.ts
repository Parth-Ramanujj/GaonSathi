import { PaymentsService } from './payments.service';
import { RazorpayWebhookDto } from './dto/razorpay-webhook.dto';
export declare class PaymentsController {
    private paymentsService;
    constructor(paymentsService: PaymentsService);
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
    razorpayWebhook(payload: RazorpayWebhookDto, signature: string): Promise<{
        received: boolean;
    }>;
}
