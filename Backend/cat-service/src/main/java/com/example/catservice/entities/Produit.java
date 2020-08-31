package com.example.catservice.entities;

import lombok.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor @ToString
@CrossOrigin("*")
public class Produit implements Serializable {
@Id @GeneratedValue(strategy= GenerationType.IDENTITY)

    private Long id;
    private String designation;
    private double price;
    private int quantite;


}
