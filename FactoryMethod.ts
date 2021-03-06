interface Product {
    getName(): string;
    setPrice(price: number): void;
}

class IPhone implements Product {
    private price: number = 0;

    getName(): string {
        return "Apple iPhone";
    }

    setPrice(price: number): void {
        this.price = price;
    }
}

/* 
Could be made with abstract class which had default implementation for makeProduct.
*/
interface ProductFactory {
    makeProduct(): Product;
}

class IPhoneFactory implements ProductFactory {
    makeProduct(): Product {
        const iPhone = new IPhone();
        iPhone.setPrice(100);
        return iPhone;
    }
}