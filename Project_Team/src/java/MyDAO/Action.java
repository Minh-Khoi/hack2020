/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package MyDAO;

import MyModel.Bill;
import MyModel.Product;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import me.xdrop.fuzzywuzzy.FuzzySearch;

/**
 *
 * @author Sang Hub
 */
public class Action {

    public static List<Bill> generateBill(String text) {

        ArrayList<String> quantity = new ArrayList<>();
        String[] b = {"một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín", "mười"};
        for (int i = 1; i <= 10; i++) {
            quantity.add("" + i + "");
        }
        ArrayList<Bill> res = new ArrayList<>();
        ArrayList<String> name = new ArrayList<>();
        ArrayList<Integer> solg = new ArrayList<>();
        ArrayList<Product> getProduct = (ArrayList<Product>) ProductDAO.select();
        ArrayList<String> ReName = new ArrayList<>();
        String[] a = text.split(" ");

        // Pick name product

        for (int j = 0; j < getProduct.size(); j++) {
            if (FuzzySearch.partialRatio(text, getProduct.get(j).getTen_san_pham()) > 60) {
                name.add(getProduct.get(j).getTen_san_pham());
//                    Bill bi = new Bill(getProduct.get(j).getTen_san_pham(),0,0);
//                    res.add(bi);
            }
        }
        System.out.println("Name: " + name);

        // Pick quantity
        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < quantity.size(); j++) {
                if (quantity.get(j).equals(a[i]) || b[j].equalsIgnoreCase(a[i])) {
                    solg.add(Integer.parseInt(quantity.get(j)));

                }
            }
        }
//        System.out.println(name + "\t" + solg);
        // Add bill
        
        for (int i = 0; i < name.size(); i++) {
            for (Product prod : getProduct) {
                if (name.get(i).equalsIgnoreCase(prod.getTen_san_pham())) {
                    Bill bill = new Bill(name.get(i), solg.get(i), prod.getGia_ca());
                    res.add(bill);
                }
            }
        }

        return res;
    }

    // TH1: Bỏ trống sluong
    // TH2: Tên sản phẩm 2 từ
    // TH3: Trùng lặp sản phẩm
    public static void main(String[] args) {
        List<Bill> res = generateBill("Tôi muốn 2 ly trà sữa và 1 ly kem");
        for (Bill re : res) {
            System.out.println(re.getName_product() + "\t" + re.getQuantity());
        }
//       
//        String text = "Tôi muốn 1 ly kem 2 ly Cacao 1 Trà sữa 2 Kem";
//        ArrayList<String> words = Ngrams.sanitiseToWords(text);
//        ArrayList<String> ngrams = Ngrams.ngrams(words, 2);
//
//        System.out.println(ngrams.toString());
    }

}
