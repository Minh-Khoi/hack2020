/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package MyModel;

/**
 *
 * @author Sang Hub
 */
public class Bill {
    private String name_product;
    private int quantity;
    private double price;
    public Bill(){}
    public Bill(String name_product, int quantity, double price) {
        this.name_product = name_product;
        this.quantity = quantity;
        this.price = price;
    }

    public String getName_product() {
        return name_product;
    }

    public void setName_product(String name_product) {
        this.name_product = name_product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
    
}
