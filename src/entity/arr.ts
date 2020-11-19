import {Entity, Column, BaseEntity, PrimaryColumn} from "typeorm";

@Entity('array')
export class arrDB extends BaseEntity{

    @PrimaryColumn("int", {nullable: false})
    id: number;

    @Column("int", { array: true, nullable: false})
    data: number[];

}