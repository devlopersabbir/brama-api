import { Entity, Column } from "typeorm";
import BaseModel from "./BaseModel";

@Entity("post")
export class Post extends BaseModel {
  @Column({ nullable: true })
  title: string;

  @Column({ unique: true, type: "text" })
  slugs: string;

  @Column({ type: "text" })
  description: string;

  @Column({ nullable: true })
  image: string;
}
