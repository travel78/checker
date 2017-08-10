package com.shpyrna.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Юра on 12.07.2017.
 */
@Controller
public class MainController {
    @GetMapping("/onload")
    public String some(){
        return "/";
    }
}
