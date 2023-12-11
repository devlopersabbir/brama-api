import { Request, Response } from "express";
import { Post } from "../entity";

class PostController {
  /**
   * =======
   * index === for query
   * method => GET
   * /api/api/posts
   * access -> CLIENT
   * =======
   */
  public static async index(_: Request, res: Response) {
    try {
      const posts = Post.find();
      if (!posts) return res.status(400).json({ message: "No post found!" });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong!" });
    }
  }
  /**
   * =======
   * store === for insert data on database
   * method => post
   * /api/data/create
   * access -> ADMIN
   * =======
   */
  public static async store(req: Request, res: Response) {
    console.log(req.body);
    try {
      console.log("store");
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
