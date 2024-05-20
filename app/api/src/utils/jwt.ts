import jwt from 'jsonwebtoken';

export function generateToken(payload: object, secret: string, expiresIn: string): string {
    return jwt.sign(payload, secret, { expiresIn });
}


export function verifyToken(token: string): any {
    return jwt.decode(token);
}