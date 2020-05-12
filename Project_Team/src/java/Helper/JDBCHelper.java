/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Helper;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Sang Hub
 */
public class JDBCHelper {

    private final static String usename = "sa";
    private final static String password = "123456";
    private final static String url = "jdbc:sqlserver://localhost:1433;databaseName=MyDB";

    static {
        try {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        } catch (ClassNotFoundException e) {
        }
    }

    public static PreparedStatement prepareStatement(String sql, Object... args) {
        try {
            Connection conn = DriverManager.getConnection(url, usename, password);
            PreparedStatement pstm = null;
            if (sql.trim().startsWith("{")) {
                pstm = conn.prepareCall(sql);

            } else {
                pstm = conn.prepareStatement(sql);
            }
            for (int i = 0; i < args.length; i++) {
                pstm.setObject(i + 1, args[i]);
            }
            return pstm;
        } catch (SQLException ex) {
            Logger.getLogger(JDBCHelper.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }
    }

    public static int executeUpdate(String sql, Object... args) {
        PreparedStatement stmt = null;
        try {
            stmt = prepareStatement(sql, args);
            return stmt.executeUpdate();
        } catch (SQLException e) {
            System.out.println(e);
            return 0;
        } finally {
            try {
                stmt.getConnection().close();
            } 
            catch (Exception e) {
                System.out.println(e);
            }
        }
}

public static ResultSet executeQuery(String sql, Object... args) {
        PreparedStatement stmt = null;
        try {
             stmt = prepareStatement(sql, args);
            return stmt.executeQuery();
        } catch (SQLException e) {
            System.out.println(e);
            return null;
        }
    }
}
