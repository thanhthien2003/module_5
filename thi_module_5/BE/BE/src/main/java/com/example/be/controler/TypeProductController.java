package com.example.be.controler;

import com.example.be.model.ProductType;
import com.example.be.service.ITypeProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class TypeProductController {

    @Autowired
    private ITypeProductService typeProductService;

    @GetMapping("/productType")
    public ResponseEntity<List<ProductType>> getAllProductType() {
        if (typeProductService.getAllProductType().isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(typeProductService.getAllProductType(),HttpStatus.OK);
        }
    }

}
