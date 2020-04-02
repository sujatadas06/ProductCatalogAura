public class ProductCatalogController {
@AuraEnabled
    public static List<product2> getProducts() {
        return [select id,name from product2 LIMIT 50];
    }
}