import { CategoryKey } from "@/modules/category/types";
import { findMedia } from "../repositories/media.repository";

export async function getMediasByCategory(category:CategoryKey):Promise<Media[]> {
    return await findMedia({});
}