/**
 * An abstract controller class.
 * An abstract class is similar to a TypeScript interface and is another way
 * of defining the shape of our objects. 
 * 
 * FYI: An abstract class is a class whose methods may not be implemented. An instance of an abstract class
 * cannot be created, but other classes can be derived/extended from this class. 
 */

 import {Request, Response} from "express";
 export abstract class CrudController {
     public abstract create(req: Request, res: Response): void;
     public abstract read(req: Request, res: Response): void;
     public abstract update(req: Request, res: Response): void;
     public abstract delete(req: Request, res: Response): void;
 }