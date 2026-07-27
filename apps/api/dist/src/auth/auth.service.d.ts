import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    sendOtp(phone: string): Promise<{
        success: boolean;
        message: string;
    }>;
    verifyOtp(phone: string, otp: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: string;
            phone: string;
            roles: string[];
        };
    }>;
}
