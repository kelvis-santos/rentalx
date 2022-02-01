import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";


interface IRequest {
    name: string;
    description: string;
}

/**
 * [x] - Definir o tipo de retorno
 * [x] - Alterar retorno erro
 * [x] - Acessar o repositorio
 */

class CreateCategoryService {

    constructor(private CategoriesRepo: ICategoriesRepository) {}

    execute({ name, description }: IRequest) {
        const categoryAlreadyExists = this.CategoriesRepo.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists!");
        }

        this.CategoriesRepo.create({
            name,
            description
        });
    }
}

export { CreateCategoryService }