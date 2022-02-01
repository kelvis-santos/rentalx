import { Category } from "../model/Category";
import { ICategoriesRepository } from "./ICategoriesRepository";



class PostgressCategoriesRepository implements ICategoriesRepository {
    findByName(name: string): Category {
        throw new Error("Method not implemented.");
    }
    list(): Category[] {
        throw new Error("Method not implemented.");
    }
    create(name: string, description: string): void {
        throw new Error("Method not implemented.");
    }

}

export { PostgressCategoriesRepository };