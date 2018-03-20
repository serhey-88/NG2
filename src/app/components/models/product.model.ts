enum Category { Ready, HandMade}

interface IProduct {
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
}

export class Product implements IProduct {
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;

    constructor( prodName: string, prodDesc: string, prodPrice: number, prodAvailability: boolean) {
        this.name = prodName;
        this.description = prodDesc;
        this.price = prodPrice;
        this.isAvailable = prodAvailability;
    }
}
