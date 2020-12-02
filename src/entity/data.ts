import {Entity, BaseEntity, PrimaryGeneratedColumn, PrimaryColumn, OneToMany} from "typeorm";
import {Arr} from "./array";

@Entity('data')
export class Data extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @PrimaryColumn()
    sortid: number

    @OneToMany(() => Arr, arr => arr.data)
    array: Arr[]

}