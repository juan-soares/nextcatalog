export interface IEpisode {
  id: string;
  number: number;
  title: string;
  aquired: boolean;
  complete: boolean;
}

export interface ISeason {
  id: string;
  recordID: string;
  number: number;
  title: string;
  release: string;
  episodes: string[];
}

export interface ISeasonWithEpisodes {
  id: string;
  recordID: string;
  number: number;
  title: string;
  release: string;
  episodes: IEpisode[];
}
