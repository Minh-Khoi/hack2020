/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package MyDAO;

import Helper.JDBCHelper;
import MyModel.Product;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Sang Hub
 */
public class ProductDAO {

    static final String sql_insert = "INSERT INTO MENU  VALUES (?,?,?)";
    static final String sql_update = "UPDATE MENU SET ten_san_pham = ?, gia_ca = ? WHERE Id = ?";
    static final String sql_delete = "DELETE FROM MENU WHERE Id = ?";
    static final String sql_select = "SELECT * FROM MENU";
    static final String sql_selectWhere = "SELECT * FROM MENU WHERE Id = ?";

    public static List<Product> select() {
        return select(sql_select);
    }

    static List<Product> select(String sql, Object... args) {
        List<Product> list = new ArrayList<>();
        try {
            ResultSet rs = null;
            try {
                rs = JDBCHelper.executeQuery(sql, args);
                while (rs.next()) {
                    Product nh = readFromResultSet(rs);
                    list.add(nh);
                }
            } finally {
                rs.getStatement().close();
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return list;
    }

    static Product readFromResultSet(ResultSet rs) throws SQLException {
        Product model = new Product();
        model.setId(rs.getString(1));
        model.setTen_san_pham(rs.getString(2));
        model.setGia_ca(rs.getDouble(3));
        return model;
    }

    public static void insert(Product model) {
        JDBCHelper.executeUpdate(sql_insert,
                model.getId(),
                model.getTen_san_pham(),
                model.getGia_ca());
    }

    public static void update(Product model) {
        JDBCHelper.executeUpdate(sql_update,
                model.getId(),
                model.getTen_san_pham(),
                model.getGia_ca());
    }

    public static void delete(String Id) {
        JDBCHelper.executeUpdate(sql_delete, Id);
    }

    public static List<String> getNameProduct() throws SQLException {
        String sql = "SELECT ten_san_pham FROM Menu";
        ArrayList<String> list = new ArrayList<>();
        ResultSet rs = null;
        try {
            
            rs = JDBCHelper.executeQuery(sql);
            while (rs.next()) {
                list.add(rs.getString(1));
            }
        } catch (SQLException e) {
            System.out.println(e);
            throw new RuntimeException(e);
        } finally {
            rs.getStatement().close();
        }
        return list;
    }
    
}
