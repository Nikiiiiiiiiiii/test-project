import {Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {Data} from "./data";

@Entity('array')
export class Arr extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    el: number

    @ManyToOne(() => Data, data => data.array)
    data: Data;

}