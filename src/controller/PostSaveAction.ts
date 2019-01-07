import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Post} from "../entities/Post";

/**
 * Saves given post.
 */
export async function postSaveAction(request: Request, response: Response) {

    const postRepository = getManager().getRepository(Post);
    const newPost = postRepository.create(request.body);

    await postRepository.save(newPost);

    response.send(newPost);
}