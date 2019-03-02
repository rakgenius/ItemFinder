package com.developer.itemfinder.repository;

import com.developer.itemfinder.model.Item;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.regex.Pattern;

@Repository
public interface ItemRepository extends MongoRepository<Item, String> {

    Item findItemById(String id);

    Item findItemByNameContainsIgnoreCase(String name);

    List<Item> findByNameContainsIgnoreCase(String name);

    List<Item> findByLocationContainsIgnoreCase(String location);

    List<Item> findByNameAndAndLocationContainsIgnoreCase(String name, String location);

}
