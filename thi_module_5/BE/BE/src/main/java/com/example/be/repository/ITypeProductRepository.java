package com.example.be.repository;


import com.example.be.model.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ITypeProductRepository extends JpaRepository<ProductType,Integer> {
    @Query(value = "SELECT * FROM product_type ",nativeQuery = true)
    List<ProductType> getAllTypeProduct();
}
