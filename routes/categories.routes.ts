import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { PostgressCategoriesRepository } from "../repositories/PostgressCategoriesRepositories";
import { CreateCategoryService } from "../services/CreateCategoryService";


const categoriesRoutes = Router();
const CategoriesRepo = new CategoriesRepository();


categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const CreateCategoryServices = new CreateCategoryService(CategoriesRepo);

    CreateCategoryServices.execute({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const all = CategoriesRepo.list();

    return response.json(all);
});

export { categoriesRoutes }