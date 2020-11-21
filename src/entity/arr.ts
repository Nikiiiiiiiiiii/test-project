import {Entity, Column, BaseEntity, PrimaryGeneratedColumn} from "typeorm";

@Entity('array')
export class arrDB extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text", { nullable: false})
    data: string;

}