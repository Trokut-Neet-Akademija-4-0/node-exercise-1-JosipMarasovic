import { BaseEntity, Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Blog_pkey", ["blogId"], { unique: true })
@Entity("Blog", { schema: "public" })
export  default class Blog  extends BaseEntity{
  @PrimaryGeneratedColumn({ type: "bigint", name: "blog_id" })
  blogId!: number;

  @Column("character varying", { name: "title", nullable: true, length: 60 })
  title!: string | null;

  @Column("text", { name: "content", nullable: true })
  content!: string | null;

  @Column("character varying", { name: "images", nullable: true, length: 255 })
  images!: string | null;
}
