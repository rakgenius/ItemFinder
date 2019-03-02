package com.developer.itemfinder.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ErrorController {
    @GetMapping("/error")
    public ResponseEntity showErrorMessage() {
        return ResponseEntity.status(HttpStatus.FORBIDDEN)
                .body("Unable to access this page");
    }
}
