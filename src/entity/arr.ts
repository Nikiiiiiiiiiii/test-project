import {Entity, Column, BaseEntity, PrimaryGeneratedColumn, PrimaryColumn} from "typeorm";

@Entity('array')
export class arrDB extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @PrimaryColumn()
    sortid: number

    @Column("int", { nullable: false})
    el: number

}