package com.example.be.service;

import com.example.be.model.ProductType;
import com.example.be.repository.ITypeProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeProductService implements ITypeProductService{
    @Autowired
    private ITypeProductRepository typeProductRepository;
    @Override
    public List<ProductType> getAllProductType() {
        return typeProductRepository.getAllTypeProduct();
    }
}
