export interface MediaSection {
  id: string;
  title: string;
  mediaItems: MediaItem[];
}

export interface MediaItem {
  id: string;
  title: string;
  cover: string;
  synopsis: string;
  slug: string;
  
}
