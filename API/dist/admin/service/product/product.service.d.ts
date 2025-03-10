import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    insertProduct(insertProductDto: any, images: any): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        brandId: number;
<<<<<<< HEAD
        categoryID: number;
        createdAt: Date;
=======
        categoryId: number;
        Description: string;
    }>;
    updateProduct(updateProductDTO: any, images: any, oldname: any, oldColor: any): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        brandId: number;
        categoryId: number;
>>>>>>> f48e9016a1586a8d6b4542a6ba8b555a7a5f2d0e
        Description: string;
    }>;
    insertBrand(insertBrandDTO: any, image: any): Promise<{
        name: string;
        id: number;
        imageUrl: string;
        createdAt: Date;
    }>;
    insertCategory(insertCategoryDTO: any): Promise<{
        name: string;
        id: number;
    }>;
    insertVariant(insertVariantDTO: any): Promise<{
        color: string;
        price: number;
        size: string;
        id: number;
<<<<<<< HEAD
        color: string;
        price: number;
        product_id: number;
=======
        productId: number;
>>>>>>> f48e9016a1586a8d6b4542a6ba8b555a7a5f2d0e
    }>;
    uploadProductName(): Promise<void>;
    deleteProduct(id: number): Promise<{
        message: string;
    }>;
    deleteCategory(id: any): Promise<{
        message: string;
    }>;
    deleteBrand(id: any): Promise<{
        message: string;
    }>;
}
