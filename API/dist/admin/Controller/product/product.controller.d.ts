import { InsertbrandDTO } from 'src/admin/dto/insertDTO/InsertBrand.dio';
import { InsertCategoryDTO } from 'src/admin/dto/insertDTO/insertCategory.dto';
import { InsertProductDto } from 'src/admin/dto/insertDTO/InsertProduct.dto';
import { insertVariantDTO } from 'src/admin/dto/insertDTO/InsertVariant.dto';
import { UpdateProductVariantDTO } from 'src/admin/dto/insertDTO/UpdateDTO/UpdateProductVariant.dto';
import { OrderService } from 'src/admin/service/order/order.service';
import { ProductService } from 'src/admin/service/product/product.service';
import { SharedService } from 'src/shared/shared.service';
<<<<<<< HEAD:API/dist/admin/admin.controller.d.ts
import { AdminService } from './admin.service';
import { ProductService } from './service/product/product.service';
import { InsertbrandDTO } from './dto/insertDTO/InsertBrand.dio';
import { InsertCategoryDTO } from './dto/insertDTO/insertCategory.dto';
import { insertVariantDTO } from './dto/insertDTO/InsertVariant.dto';
export declare class AdminController {
    private readonly adminService;
=======
export declare class ProductController {
>>>>>>> f48e9016a1586a8d6b4542a6ba8b555a7a5f2d0e:API/dist/admin/Controller/product/product.controller.d.ts
    private readonly sharedService;
    private readonly orderService;
    private readonly productService;
    constructor(sharedService: SharedService, orderService: OrderService, productService: ProductService);
    displayProduct(): Promise<({
        discount: {
            id: number;
            name: string;
            createdAt: Date;
            productId: number | null;
            description: string | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            value: number;
            startDate: Date;
            endDate: Date;
        }[];
        brand: {
            id: number;
            name: string;
            createdAt: Date;
            imageUrl: string;
        };
<<<<<<< HEAD:API/dist/admin/admin.controller.d.ts
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
>>>>>>> f48e9016a1586a8d6b4542a6ba8b555a7a5f2d0e:API/dist/admin/Controller/product/product.controller.d.ts
            id: number;
            color: string;
            price: number;
            product_id: number;
        }[];
    } & {
        id: number;
        name: string;
        brandId: number;
        categoryID: number;
        createdAt: Date;
        Description: string;
    })[]>;
    displayProductByID(id: number): Promise<{
        discount: {
            id: number;
            name: string;
            createdAt: Date;
            productId: number | null;
            description: string | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            value: number;
            startDate: Date;
            endDate: Date;
        }[];
        brand: {
            id: number;
            name: string;
            createdAt: Date;
            imageUrl: string;
        };
<<<<<<< HEAD:API/dist/admin/admin.controller.d.ts
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
>>>>>>> f48e9016a1586a8d6b4542a6ba8b555a7a5f2d0e:API/dist/admin/Controller/product/product.controller.d.ts
            id: number;
            color: string;
            price: number;
            product_id: number;
        }[];
    } & {
        id: number;
        name: string;
        brandId: number;
        categoryID: number;
        createdAt: Date;
        Description: string;
    }>;
    displayProductByName(name: string): Promise<({
        discount: {
            id: number;
            name: string;
            createdAt: Date;
            productId: number | null;
            description: string | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            value: number;
            startDate: Date;
            endDate: Date;
        }[];
        brand: {
            id: number;
            name: string;
            createdAt: Date;
            imageUrl: string;
        };
<<<<<<< HEAD:API/dist/admin/admin.controller.d.ts
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
>>>>>>> f48e9016a1586a8d6b4542a6ba8b555a7a5f2d0e:API/dist/admin/Controller/product/product.controller.d.ts
            id: number;
            color: string;
            price: number;
            product_id: number;
        }[];
    } & {
        id: number;
        name: string;
        brandId: number;
        categoryID: number;
        createdAt: Date;
        Description: string;
    })[]>;
<<<<<<< HEAD:API/dist/admin/admin.controller.d.ts
    displayOrder(): Promise<({
        orderitem: ({
            product: {
                brand: {
                    id: number;
                    name: string;
                    createdAt: Date;
                    imageUrl: string;
                };
                productVariants: {
                    id: number;
                    color: string;
                    price: number;
                    product_id: number;
                }[];
                category: {
                    id: number;
                    name: string;
                };
            } & {
                id: number;
                name: string;
                brandId: number;
                categoryID: number;
                createdAt: Date;
                Description: string;
            };
        } & {
            id: number;
            createdAt: Date;
            productId: number;
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
    displayOrderByID(id: number): Promise<{
        orderitem: ({
            product: {
                brand: {
                    id: number;
                    name: string;
                    createdAt: Date;
                    imageUrl: string;
                };
                productVariants: {
                    id: number;
                    color: string;
                    price: number;
                    product_id: number;
                }[];
                category: {
                    id: number;
                    name: string;
                };
            } & {
                id: number;
                name: string;
                brandId: number;
                categoryID: number;
                createdAt: Date;
                Description: string;
            };
        } & {
            id: number;
            createdAt: Date;
            productId: number;
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
    }>;
=======
>>>>>>> f48e9016a1586a8d6b4542a6ba8b555a7a5f2d0e:API/dist/admin/Controller/product/product.controller.d.ts
    displayCategory(): Promise<({
        orderitem: ({
            product: {
                brand: {
                    id: number;
                    name: string;
                    createdAt: Date;
                    imageUrl: string;
                };
                productVariants: {
                    id: number;
                    color: string;
                    price: number;
                    product_id: number;
                }[];
                category: {
                    id: number;
                    name: string;
                };
            } & {
                id: number;
                name: string;
                brandId: number;
                categoryID: number;
                createdAt: Date;
                Description: string;
            };
        } & {
            id: number;
            createdAt: Date;
            productId: number;
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
    InsertProduct(files: Array<Express.Multer.File>, insertProductDto: InsertProductDto): Promise<{
        id: number;
        name: string;
        brandId: number;
        categoryID: number;
        createdAt: Date;
        Description: string;
    }>;
    InsertBrand(file: Express.Multer.File, insertbrandDTO: InsertbrandDTO): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        imageUrl: string;
    }>;
    InsertCategory(insertCategoryDTO: InsertCategoryDTO): Promise<{
        id: number;
        name: string;
    }>;
    InsertVariant(insertVariantDIO: insertVariantDTO): Promise<{
        id: number;
        color: string;
        price: number;
        product_id: number;
    }>;
<<<<<<< HEAD:API/dist/admin/admin.controller.d.ts
    UpdateProductName(: any): any;
=======
    displayProductDiscount(): Promise<({
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
    deleteProduct(id: number): Promise<{
        message: string;
    }>;
    deleteCategory(id: number): Promise<{
        message: string;
    }>;
    deleteBrand(id: number): Promise<{
        message: string;
    }>;
>>>>>>> f48e9016a1586a8d6b4542a6ba8b555a7a5f2d0e:API/dist/admin/Controller/product/product.controller.d.ts
}
