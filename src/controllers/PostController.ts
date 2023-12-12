import { Request, Response } from "express";
import { Post } from "../entity";
import slug from "slug";

class PostController {
  /**
   * =======
   * index === for query
   * method => GET
   * /api/api/v1/posts
   * access -> CLIENT
   * =======
   */
  public static async index(_: Request, res: Response) {
    try {
      const posts = await Post.find();
      if (!posts) return res.status(400).json({ message: "No post found!" });
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong!" });
    }
  }
  /**
   * =======
   * store === for insert data on database
   * method => post
   * /api/v1/posts
   * access -> ADMIN
   * =======
   */
  public static async store(req: Request, res: Response) {
    const { title, description, image } = req.body;
    const slugs = slug(title, "-");
    if (!slugs) return res.status(400).json({ message: "Fail to build slugs" });
    try {
      const post = Post.create({
        title,
        description,
        image,
        slugs,
      });
      await post.save();
      res.status(201).json({
        message: `Post created successfully`,
        post,
      });
    } catch (error) {
      res.status(500).json({ message: "Server fails!" });
    }
  }
  /**
   * =======
   * getallreport === get all report
   * method => get
   * /api/data/getall
   * access -> ADMIN
   * =======
   */
  public static async getAllReports(req: Request, res: Response) {
    try {
      console.log("get all post");
    } catch (error) {
      res.status(500).json({ message: "Something went wrong!" });
    }
  }

  /**
   * ======
   * update admin / user
   * method -> delete
   * /api/data/delete/:id
   * access -> admin
   * ======
   */
  public static async deleteData(req: Request, res: Response) {
    const { id } = req.params;

    try {
    } catch (error) {
      res.status(500).json({ message: "Server error 😕" });
    }
  }
  /**
   * ======
   * update admin
   * method -> view
   * /api/data/single/:id
   * access -> admin
   * ======
   */
  public static async getSingle(req: Request, res: Response) {
    const { id } = req.params;

    try {
    } catch (error) {
      res.status(500).json({ message: "Server error 😕" });
    }
  }
}

export default PostController;
