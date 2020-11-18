import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class arrDB {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("int", { array: true })
    data: number[];

}