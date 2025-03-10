import { PrismaService } from 'src/prisma/prisma.service';
export declare class SharedService {
    private prisma;
    constructor(prisma: PrismaService);
    displayProduct(): Promise<({
        discount: {
            id: number;
            createdAt: Date;
            name: string;
            productId: number | null;
            description: string | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            value: number;
            startDate: Date;
            endDate: Date;
        }[];
        brand: {
            id: number;
            createdAt: Date;
            name: string;
            imageUrl: string;
        };
<<<<<<< HEAD
        productimage: {
            imageUrl: string;
        }[];
        productVariants: {
=======
        productVariants: ({
            productimage: {
                id: number;
                createdAt: Date;
                imageUrl: string;
                productVariantId: number;
            }[];
            discount: {
                id: number;
                name: string;
                createdAt: Date;
                productVariantId: number | null;
                description: string | null;
                discountType: import(".prisma/client").$Enums.discount_discountType;
                value: number;
                startDate: Date;
                endDate: Date;
            }[];
        } & {
>>>>>>> f48e9016a1586a8d6b4542a6ba8b555a7a5f2d0e
            id: number;
            product_id: number;
            color: string;
            price: number;
        }[];
    } & {
        id: number;
        createdAt: Date;
        name: string;
        brandId: number;
        categoryID: number;
        Description: string;
    })[]>;
    displayProductByID(id: number): Promise<{
        discount: {
            id: number;
            createdAt: Date;
            name: string;
            productId: number | null;
            description: string | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            value: number;
            startDate: Date;
            endDate: Date;
        }[];
        brand: {
            id: number;
            createdAt: Date;
            name: string;
            imageUrl: string;
        };
<<<<<<< HEAD
        productimage: {
            imageUrl: string;
        }[];
        productVariants: {
=======
        productVariants: ({
            productimage: {
                id: number;
                createdAt: Date;
                imageUrl: string;
                productVariantId: number;
            }[];
            discount: {
                id: number;
                name: string;
                createdAt: Date;
                productVariantId: number | null;
                description: string | null;
                discountType: import(".prisma/client").$Enums.discount_discountType;
                value: number;
                startDate: Date;
                endDate: Date;
            }[];
        } & {
>>>>>>> f48e9016a1586a8d6b4542a6ba8b555a7a5f2d0e
            id: number;
            product_id: number;
            color: string;
            price: number;
        }[];
    } & {
        id: number;
        createdAt: Date;
        name: string;
        brandId: number;
        categoryID: number;
        Description: string;
    }>;
    displayProductByName(name: string): Promise<({
        discount: {
            id: number;
            createdAt: Date;
            name: string;
            productId: number | null;
            description: string | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            value: number;
            startDate: Date;
            endDate: Date;
        }[];
        brand: {
            id: number;
            createdAt: Date;
            name: string;
            imageUrl: string;
        };
<<<<<<< HEAD
        productimage: {
            imageUrl: string;
        }[];
        productVariants: {
=======
        productVariants: ({
            productimage: {
                id: number;
                createdAt: Date;
                imageUrl: string;
                productVariantId: number;
            }[];
            discount: {
                id: number;
                name: string;
                createdAt: Date;
                productVariantId: number | null;
                description: string | null;
                discountType: import(".prisma/client").$Enums.discount_discountType;
                value: number;
                startDate: Date;
                endDate: Date;
            }[];
        } & {
>>>>>>> f48e9016a1586a8d6b4542a6ba8b555a7a5f2d0e
            id: number;
            product_id: number;
            color: string;
            price: number;
        }[];
    } & {
        id: number;
        createdAt: Date;
        name: string;
        brandId: number;
        categoryID: number;
        Description: string;
    })[]>;
    getCategory(): Promise<{
        id: number;
        name: string;
    }[]>;
<<<<<<< HEAD
=======
    getProductByCategory({ categoryName }: {
        categoryName: any;
    }): Promise<({
        brand: {
            id: number;
            name: string;
            createdAt: Date;
            imageUrl: string;
        };
        productVariants: ({
            productimage: {
                id: number;
                createdAt: Date;
                imageUrl: string;
                productVariantId: number;
            }[];
            discount: {
                id: number;
                name: string;
                createdAt: Date;
                productVariantId: number | null;
                description: string | null;
                discountType: import(".prisma/client").$Enums.discount_discountType;
                value: number;
                startDate: Date;
                endDate: Date;
            }[];
        } & {
            id: number;
            productId: number;
            color: string;
            size: string;
            price: number;
        })[];
    } & {
        id: number;
        name: string;
        brandId: number;
        categoryId: number;
        createdAt: Date;
        Description: string;
    })[]>;
    getSortPrice({ min, max }: {
        min: any;
        max: any;
    }): Promise<{
        finalPrice: any;
        productVariants: ({
            discount: {
                id: number;
                name: string;
                createdAt: Date;
                productVariantId: number | null;
                description: string | null;
                discountType: import(".prisma/client").$Enums.discount_discountType;
                value: number;
                startDate: Date;
                endDate: Date;
            }[];
        } & {
            id: number;
            productId: number;
            color: string;
            size: string;
            price: number;
        })[];
        id: number;
        name: string;
        brandId: number;
        categoryId: number;
        createdAt: Date;
        Description: string;
    }[]>;
    getDiscountedProducts(): Promise<({
        product_fk: {
            id: number;
            name: string;
            brandId: number;
            categoryId: number;
            createdAt: Date;
            Description: string;
        };
        discount: {
            id: number;
            name: string;
            createdAt: Date;
            productVariantId: number | null;
            description: string | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            value: number;
            startDate: Date;
            endDate: Date;
        }[];
    } & {
        id: number;
        productId: number;
        color: string;
        size: string;
        price: number;
    })[]>;
    getOrderByCustomerName(firstName: string, lastName: string): Promise<({
        orderitem: ({
            productVariant: {
                product_fk: {
                    id: number;
                    name: string;
                    brandId: number;
                    categoryId: number;
                    createdAt: Date;
                    Description: string;
                };
            } & {
                id: number;
                productId: number;
                color: string;
                size: string;
                price: number;
            };
        } & {
            id: number;
            createdAt: Date;
            productVariantId: number;
            orderId: number;
            quantity: number;
            amount: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        totalAmount: number;
        status: import(".prisma/client").$Enums.order_status;
        customerId: number;
    })[]>;
>>>>>>> f48e9016a1586a8d6b4542a6ba8b555a7a5f2d0e
}
