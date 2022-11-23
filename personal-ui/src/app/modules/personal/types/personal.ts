import { Entity } from "../../../types/entity";

export type Personal = Entity<number> & {
    name: string;
    surname: string;
    lastname: string;
    birthdate: string;
    salary: number;
    position: any;
    
};