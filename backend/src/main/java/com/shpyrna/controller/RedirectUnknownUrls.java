package com.shpyrna.controller;

import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class RedirectUnknownUrls implements ErrorController {

    @GetMapping("/error")
    public void redirectNonExistentUrlsToHome(HttpServletResponse response) throws IOException {
        System.out.println("call in RedirectUnknownUrls");
        response.sendRedirect("/#/recipes");
    }

    @Override
    public String getErrorPath() {
        return "/error";
    }
}