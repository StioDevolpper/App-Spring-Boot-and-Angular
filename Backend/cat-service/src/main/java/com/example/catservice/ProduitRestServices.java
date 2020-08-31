package com.example.catservice;

import com.example.catservice.dao.ProduitRepository;
import com.example.catservice.entities.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
public class ProduitRestServices {
    @Autowired
    private ProduitRepository produitRepository;

    @GetMapping(value = "/listProduits")
    public List<Produit> listProduit() {
        return produitRepository.findAll();
    }

    @GetMapping(value = "/produits/{id}")
    public Produit listProduits(@PathVariable(name = "id") Long id) {
        return produitRepository.findById(id).get();
    }



    @PutMapping(value = "/produits/{id}")
    public Produit update(@PathVariable(name = "id") Long id, @RequestBody Produit p) {
        p.setId(id);
        return produitRepository.save(p);
    }

    @PostMapping(value = "/listProduits")
    public Produit save(@RequestBody Produit p) {
        return produitRepository.save(p);
    }


    @DeleteMapping(value = "/produits/{id}")
    public void delete(@PathVariable(name = "id") Long id) {
        produitRepository.deleteById(id);
    }
























 /*   // @DeleteMapping (value = "/listProduits/{id}") //@PutMapping(value = "/listProduits/{id}")
    @GetMapping(value = "/listProduits/{id}")
    public Produit listProduits(@PathVariable(name = "id")Long id)
    {
        return produitRepository.findById(id).get();
    }
*/

}
