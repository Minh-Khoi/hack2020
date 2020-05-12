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
public class Product {
    private String id;
    private String ten_san_pham;
    private double gia_ca;

    public Product(){}
    public Product(String id, String ten_san_pham, double gia_ca) {
        this.id = id;
        this.ten_san_pham = ten_san_pham;
        this.gia_ca = gia_ca;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTen_san_pham() {
        return ten_san_pham;
    }

    public void setTen_san_pham(String ten_san_pham) {
        this.ten_san_pham = ten_san_pham;
    }

    public double getGia_ca() {
        return gia_ca;
    }

    public void setGia_ca(double gia_ca) {
        this.gia_ca = gia_ca;
    }
    
}
