package com.example.catservice;

import com.example.catservice.dao.ProduitRepository;
import com.example.catservice.entities.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin("*")
public class CatServiceApplication {
    @Autowired
    private ProduitRepository produitRepository;
    @Autowired
    private RepositoryRestConfiguration restConfiguration;

    public static void main(String[] args) {
        SpringApplication.run(CatServiceApplication.class, args);
    }


    //  @Override
    public void run(String... args) throws Exception {
        restConfiguration.exposeIdsFor(Produit.class);
        produitRepository.save(new Produit(null, "Ordinateur Hp", 112, 2));
        produitRepository.save(new Produit(null, "Impr dell", 23, 3));
        produitRepository.save(new Produit(null, "SmartPhone S8", 150, 5));

        produitRepository.findAll().forEach(p -> {
            System.out.println(p.toString());

        });
    }

}
