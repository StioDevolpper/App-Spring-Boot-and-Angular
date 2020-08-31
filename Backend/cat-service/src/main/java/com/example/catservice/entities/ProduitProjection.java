package com.example.catservice.entities;


import org.springframework.data.rest.core.config.Projection;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@Projection(name = "P1", types = Produit.class)

public interface ProduitProjection {

    public double getPrice();

    public String getDesignation();

}
