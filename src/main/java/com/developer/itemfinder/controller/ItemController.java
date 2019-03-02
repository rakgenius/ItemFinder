package com.developer.itemfinder.controller;

import com.developer.itemfinder.exception.ItemNotFoundException;
import com.developer.itemfinder.model.Item;
import com.developer.itemfinder.service.ItemService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/item")
public class ItemController {
    @Autowired
    ItemService itemService;

    @GetMapping("/{id}")
    public ResponseEntity getOneItemById(@Valid @PathVariable String id) {
        log.info("Fetchin the item by id: {}", id);
        Item item = itemService.findOneItemByid(id);
        return ResponseEntity.status(HttpStatus.OK).body(item);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity getOneItemByName(@PathVariable String name) {
        log.info("Fetching one item by name : {}", name);
        Item item = itemService.findOneItemByName(name);
        log.info("Found the item: {}", item);
        return ResponseEntity.status(HttpStatus.OK).body(item);
    }

    @GetMapping("/names/{name}")
    public ResponseEntity<List<Item>> getItemList(@PathVariable String name) throws ItemNotFoundException {
        log.info("Fetching the item with name : {}", name);
        List<Item> item = itemService.findItemByname(name);
        return ResponseEntity.status(HttpStatus.OK).body(item);
    }

    @GetMapping("/listall")
    public ResponseEntity<List<Item>> getAllItems() {
        log.info("fetching all the items");
        List<Item> items = itemService.getAllItems();
        return ResponseEntity.status(HttpStatus.OK).body(items);
    }

    @GetMapping("/location/{location}")
    public ResponseEntity<List<Item>> getItemByLocationList(@PathVariable String location) {
        log.info("Fetching the item with location : {}", location);
        List<Item> item = itemService.findItemByLocation(location);
        return ResponseEntity.status(HttpStatus.OK).body(item);
    }

    @GetMapping("/search/{item}/location/{location}")
    public ResponseEntity<List<Item>> getItemByNameAndLocation(@PathVariable("item") String itemName,
                                                   @PathVariable("location") String location) {
        List<Item> itemList = itemService.findItemByNameAndLocation(itemName, location);
        return ResponseEntity.status(HttpStatus.OK).body(itemList);
    }

    @PostMapping("/newitem")
    public ResponseEntity<Item> createNewItem(@Valid @RequestBody Item item) {
        //item.setName(item.getName().toLowerCase());
        //item.setLocation(item.getLocation().toLowerCase());
        log.info("Creating new item : {}", item);
        itemService.saveItem(item);
        return ResponseEntity.status(HttpStatus.CREATED).body(item);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Item> editItem(@PathVariable("id") String id,
                                         @Valid @RequestBody Item item) {
        log.info("Updating the item with id: {}", id);
        log.info("Received item is : {}", item);
        Item newItem = itemService.updateItem(id, item);
        return ResponseEntity.status(HttpStatus.OK).body(newItem);
    }

    @DeleteMapping("/deleteall")
    public ResponseEntity deleteAllItems() {
        itemService.deleteAllItems();
        return ResponseEntity.status(HttpStatus.OK).body("All items deleted successfully");
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteItem(@PathVariable String id) {
        itemService.deleteItem(id);
        return ResponseEntity.status(HttpStatus.OK).body("Item deleted successfully");
    }
}
