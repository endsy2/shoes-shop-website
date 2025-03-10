import { PrismaService } from './../../../prisma/prisma.service';
export declare class OrderService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    displayOrder(): Promise<({
        orderitem: ({
<<<<<<< HEAD
            product: {
                brand: {
                    id: number;
                    createdAt: Date;
                    name: string;
                    imageUrl: string;
                };
                productVariants: {
                    id: number;
                    product_id: number;
                    color: string;
                    price: number;
                }[];
                category: {
                    id: number;
                    name: string;
=======
            productVariant: {
                product_fk: {
                    brand: {
                        name: string;
                        id: number;
                        imageUrl: string;
                        createdAt: Date;
                    };
                    category: {
                        name: string;
                        id: number;
                    };
                } & {
                    name: string;
                    id: number;
                    createdAt: Date;
                    brandId: number;
                    categoryId: number;
                    Description: string;
>>>>>>> f48e9016a1586a8d6b4542a6ba8b555a7a5f2d0e
                };
            } & {
                color: string;
                price: number;
                size: string;
                id: number;
<<<<<<< HEAD
                createdAt: Date;
                name: string;
                brandId: number;
                categoryID: number;
                Description: string;
=======
                productId: number;
>>>>>>> f48e9016a1586a8d6b4542a6ba8b555a7a5f2d0e
            };
        } & {
            id: number;
            createdAt: Date;
<<<<<<< HEAD
            orderId: number;
            productId: number;
=======
            productVariantId: number;
>>>>>>> f48e9016a1586a8d6b4542a6ba8b555a7a5f2d0e
            quantity: number;
            orderId: number;
            amount: number;
        })[];
    } & {
        id: number;
        totalAmount: number;
        status: import(".prisma/client").$Enums.order_status;
        customerId: number;
        createdAt: Date;
    })[]>;
    displayOrderByID(id: any): Promise<{
        orderitem: ({
<<<<<<< HEAD
            product: {
                brand: {
                    id: number;
                    createdAt: Date;
                    name: string;
                    imageUrl: string;
                };
                productVariants: {
                    id: number;
                    product_id: number;
                    color: string;
                    price: number;
                }[];
                category: {
                    id: number;
                    name: string;
=======
            productVariant: {
                product_fk: {
                    brand: {
                        name: string;
                        id: number;
                        imageUrl: string;
                        createdAt: Date;
                    };
                    category: {
                        name: string;
                        id: number;
                    };
                    productVariants: {
                        color: string;
                        price: number;
                        size: string;
                        id: number;
                        productId: number;
                    }[];
                } & {
                    name: string;
                    id: number;
                    createdAt: Date;
                    brandId: number;
                    categoryId: number;
                    Description: string;
>>>>>>> f48e9016a1586a8d6b4542a6ba8b555a7a5f2d0e
                };
            } & {
                color: string;
                price: number;
                size: string;
                id: number;
<<<<<<< HEAD
                createdAt: Date;
                name: string;
                brandId: number;
                categoryID: number;
                Description: string;
=======
                productId: number;
>>>>>>> f48e9016a1586a8d6b4542a6ba8b555a7a5f2d0e
            };
        } & {
            id: number;
            createdAt: Date;
<<<<<<< HEAD
            orderId: number;
            productId: number;
=======
            productVariantId: number;
>>>>>>> f48e9016a1586a8d6b4542a6ba8b555a7a5f2d0e
            quantity: number;
            orderId: number;
            amount: number;
        })[];
    } & {
        id: number;
        totalAmount: number;
        status: import(".prisma/client").$Enums.order_status;
        customerId: number;
        createdAt: Date;
    }>;
    deleteOrder(id: any): Promise<{
        message: string;
    }>;
    deleteOrderItems(id: any): Promise<{
        message: string;
    }>;
}
