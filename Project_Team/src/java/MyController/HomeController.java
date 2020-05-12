/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package MyController;

import MyDAO.Action;
import MyModel.Bill;
import com.google.gson.Gson;
import java.io.PrintWriter;
import java.text.ParseException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.json.JsonObject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
//import com.fasterxml.jackson.databind.ObjectMapper;

/**
 *
 * @author Sang Hub
 */
@Controller
public class HomeController {

//    @RequestMapping(value = "formAction", method = RequestMethod.GET)
//    public String showhome(HttpServletResponse resp) {
//        resp.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//        return "home";
//    }

    @RequestMapping(value = "/formAction", method = RequestMethod.POST)
    public void home( HttpServletRequest re, HttpServletResponse resp) {
        List<Bill> list = null;
        Map model = new HashMap();
        try {
            String name = re.getParameter("text");
            System.out.println(re.getParameter("text"));
            list = Action.generateBill(name);
            double tong = 0;
            for (Bill b : list) {
                tong += b.getQuantity() * b.getPrice();
            }
            JSONArray listToJSON = JSONstringify(list);
            model.put("getVoice", listToJSON);
            model.put("Amount", tong);
            JSONObject jsonObj = new JSONObject(model) ;
            resp.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
            resp.setContentType("text/plain; charset=utf-8");
            resp.setCharacterEncoding("UTF-8");
            PrintWriter printer = resp.getWriter();
            System.out.println(jsonObj.toString());
            printer.print(jsonObj.toString());
//            printer.flush();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("thaats bai");
        }
//        return "index";
    }
    
    public JSONArray JSONstringify(Object obj){
        try {
            Gson gson = new Gson();
            
            String json = gson.toJson(obj);
            JSONArray jsonObject = new JSONArray(json);
            System.out.println(json);
            return jsonObject;
        } catch (ParseException ex) {
            Logger.getLogger(HomeController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }

//    public static void main(String[] args) {
//        for (int i = 0; i < 10; i++) {
//
//        }
//    }
}
