import { MongoDoc, MediaTypeDoc } from ".";

export interface MediaItemDoc extends MongoDoc {
  title: string;
  translatedTitle: string;
  slug: string;
  cover: string;
  releaseDate: Date;
  mediaTypeId: MediaTypeDoc["_id"];
}

export interface MediaItemDocPopulated extends Omit<
  MediaItemDoc,
  "mediaTypeId"
> {
  mediaType: MediaTypeDoc;
}
