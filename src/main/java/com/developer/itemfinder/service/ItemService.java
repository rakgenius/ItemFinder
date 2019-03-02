package com.developer.itemfinder.service;

import com.developer.itemfinder.exception.ItemNotFoundException;
import com.developer.itemfinder.model.Item;
import com.developer.itemfinder.repository.ItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService {
    private ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public Item findOneItemByid(String id) {
        Item item = itemRepository.findItemById(id);
        if (item == null)
            throw new ItemNotFoundException("Unable to find the item by id: " + id);

        return item;
    }
    public Item findOneItemByName(String name) {
        Item item = itemRepository.findItemByNameContainsIgnoreCase(name);
        if (item == null)
            throw new ItemNotFoundException("Unable to find the item by name : " + name);

        return item;
    }

    public List<Item> findItemByname(String name) {
        List<Item> item = itemRepository.findByNameContainsIgnoreCase(name);
        //Item item = itemRepository.findByName(name);
        if (item == null)
            throw new ItemNotFoundException("Unable to find the item : " + name);

        return item;
    }

    public List<Item> findItemByLocation(String location) {
        List<Item> item = itemRepository.findByLocationContainsIgnoreCase(location);

        if (item == null)
            throw new ItemNotFoundException("Unable to find any item at location: " + location);

        return item;
    }

    public List<Item> findItemByNameAndLocation(String name, String location) {
        List<Item> item = itemRepository.findByNameAndAndLocationContainsIgnoreCase(name, location);
        if (item == null)
            throw new ItemNotFoundException("Unable to find the item " + item + " at location " + location);

        return item;
    }

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    public Item saveItem(Item item) {
        itemRepository.save(item);
        return item;
    }

    public Item updateItem(String id, Item item) {
        Optional<Item> storedItem = itemRepository.findById(id);
        if (!storedItem.isPresent()) {
            throw new ItemNotFoundException("Unable to find the item with name " + item.getName() + " to update");
        }

        Item updatableItem = storedItem.get();
        updatableItem.setName(item.getName());
        updatableItem.setLocation(item.getLocation());
        updatableItem.setQuantity(item.getQuantity());

        itemRepository.save(updatableItem);

        return updatableItem;
    }

    public void deleteItem(String id) {
        if (!itemRepository.findById(id).isPresent())
            throw new ItemNotFoundException("Unable to delete the item");
        itemRepository.deleteById(id);
    }

    public void deleteAllItems() {
        itemRepository.deleteAll();
    }

}

