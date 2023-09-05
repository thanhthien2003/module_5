package com.example.be.repository;

import com.example.be.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface    IProductRepository extends JpaRepository<Product,Long> {
    @Query(value = "SELECT * FROM products ",nativeQuery = true)
    List<Product> getAllProduct();
    @Modifying
    @Query(nativeQuery = true,value = "insert into products (name_product,amount,day_start,product_type_id_type) " +
      "values (:#{#product.nameProduct},:#{#product.amount},:#{#product.dayStart},:#{#product.productType.idType});")
    void addNewProduct(@Param("product") Product product);
}
