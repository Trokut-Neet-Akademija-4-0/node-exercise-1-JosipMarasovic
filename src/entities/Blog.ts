import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Blog_pkey", ["blogId"], { unique: true })
@Entity("Blog", { schema: "public" })
export class Blog {
  @PrimaryGeneratedColumn({ type: "bigint", name: "blog_id" })
  blogId!: string;

  @Column("character varying", { name: "title", length: 60 })
  title!: string;

  @Column("text", { name: "content" })
  content!: string;

  @Column("text", { name: "images" })
  images!: string;
    static find: any;
    static findOne: any;
}
