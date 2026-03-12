import { MongoDoc, MediaTypeDoc, CollectionRef } from ".";

export interface MediaItemDoc extends MongoDoc {
  title: string;
  translatedTitle: string;
  slug: string;
  cover: string;
  releaseDate: Date;
  mediaTypeId: CollectionRef<MediaTypeDoc>;
}
