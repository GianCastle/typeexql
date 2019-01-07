import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Post} from "../entities/Post";

/**
 * Loads all posts from the database.
 */
export async function postGetAllAction(request: Request, response: Response) {

    const postRepository = getManager().getRepository(Post);
    const posts = await postRepository.find();

    response.send(posts);
}