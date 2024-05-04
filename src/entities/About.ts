import { BaseEntity, Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("About_pkey", ["aboutId"], { unique: true })
@Entity("About", { schema: "public" })
export default class About extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "bigint", name: "about_id" })
  aboutId!: string;

  @Column("text", { name: "content" })
  content!: string;
}
