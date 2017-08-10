package com.shpyrna.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;


/**
 * Created by Юра on 30.07.2017.
 */
@RestController
public class MyRestController {
    @GetMapping("/ll")
    public ResponseEntity<List<String>> test() {
        List<String> list = new ArrayList<>();
        list.add("fffff");
        list.add("wwwww");
        list.add("eeeee");
        return new ResponseEntity<List<String>>(list, HttpStatus.OK);
    }

    @PutMapping("/store")
    public String store() {
        System.out.println("conection is working");
        return "Response from server";
    }
    @PostMapping("/login")
    public void login(){
    }
}
