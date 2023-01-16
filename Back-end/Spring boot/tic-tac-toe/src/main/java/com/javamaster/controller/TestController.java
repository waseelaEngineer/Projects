package com.javamaster.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sub")
public class TestController {
    @GetMapping("/test")
    public String test(){
        return "test";
    }
}
