import { Request, Response } from 'express'
import categoryService from '../services/categoryService'
import { ICategoryItem } from '../models/interfaces/categoryInterface';

const getAllProductsFromSingleCategory =  (req: Request, res: Response) => {
    const category = req.params.category;
    const categoryProducts = categoryService.getAllProductsFromSingleCategory(category)
    res.send(categoryProducts);

}

const createCategoryItem  =  (req: Request, res: Response) => {
    const newCategoryItem: ICategoryItem = req.body;
    categoryService.createCategoryItem(newCategoryItem);
    res.status(201).send('Category item created successfully');

}

const getCategoryItemById =    (req: Request, res: Response) => {
    const itemId = parseInt(req.params.id);
    const categoryItem = categoryService.getCategoryItemById(itemId);
    if (categoryItem) {
        res.send(categoryItem);
    } else {
        res.status(404).send('Category item not found');
    }

}

const updateCategoryItemById =  (req: Request, res: Response) => {
    const itemId = parseInt(req.params.id);
    const updatedCategoryItem: ICategoryItem = req.body;
    const updatedItem = categoryService.updateCategoryItemById(itemId, updatedCategoryItem);
    if (updatedItem) {
        res.send(updatedItem);
    } else {
        res.status(404).send('Category item not found');
    }

}

const deleteCategoryItemById =  (req: Request, res: Response) => {
    const itemId = parseInt(req.params.id);
    const deletedItem = categoryService.deleteCategoryItemById(itemId);
    if (deletedItem) {
        res.send('Category item deleted successfully');
    } else {
        res.status(404).send('Category item not found');
    }

}

export {getAllProductsFromSingleCategory,getCategoryItemById,createCategoryItem,updateCategoryItemById,deleteCategoryItemById}