import express, { Request, Response } from 'express'
import categoryService from '../services/categoryService';
import { ICategoryItem } from '../models/interfaces/categoryInterface';



const router = express.Router()


router.get('/:category', (req: Request, res: Response) => {
    const category = req.params.category;
    const categoryProducts = categoryService.getAllProductsFromSingleCategory(category)
    res.send(categoryProducts);
});


// Create a new category item
router.post('/', (req: Request, res: Response) => {
    const newCategoryItem: ICategoryItem = req.body;
    categoryService.createCategoryItem(newCategoryItem);
    res.status(201).send('Category item created successfully');
});

router.get('/:id', (req: Request, res: Response) => {
    const itemId = parseInt(req.params.id);
    const categoryItem = categoryService.getCategoryItemById(itemId);
    if (categoryItem) {
        res.send(categoryItem);
    } else {
        res.status(404).send('Category item not found');
    }
});
router.put('/:id', (req: Request, res: Response) => {
    const itemId = parseInt(req.params.id);
    const updatedCategoryItem: ICategoryItem = req.body;
    const updatedItem = categoryService.updateCategoryItemById(itemId, updatedCategoryItem);
    if (updatedItem) {
        res.send(updatedItem);
    } else {
        res.status(404).send('Category item not found');
    }
});
router.delete('/:id', (req: Request, res: Response) => {
    const itemId = parseInt(req.params.id);
    const deletedItem = categoryService.deleteCategoryItemById(itemId);
    if (deletedItem) {
        res.send('Category item deleted successfully');
    } else {
        res.status(404).send('Category item not found');
    }
});

export default router