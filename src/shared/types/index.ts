export namespace Adn {
  export type Diffusion = [] | ["simulcast" | "download" | "free"];

  export type Type = "serie" | "movie" | "oav" | "";

  export type Language = "vostfr" | "vf" | "";

  export type Quality = "hd" | "fhd" | "";

  export type Age = "0+" | "10+" | "12+" | "16+" | "";

  export type Genres =
    | []
    | [
        | "arts_martiaux"
        | "aventure||action"
        | "comedie"
        | "drame"
        | "ecchi||fan_service"
        | "fantastique||science-fiction"
        | "heroic_fantasy"
        | "historique"
        | "jeunesse"
        | "josei"
        | "mecha"
        | "musical"
        | "nostalgie"
        | "policier||thriller"
        | "psychologie"
        | "romance"
        | "scolaire"
        | "seinen"
        | "shojo"
        | "shonen"
        | "sport"
        | "violence"
      ];

  export type Order = "popular" | "alpha" | "new" | "";

  export interface BasicAnimeInfos {
    id: string;
    name: string;
    reference: string;
    playlist_alias: string;
    encours: boolean;
    metadata: boolean;
    image: string;
    link: string;
    ref: "adn";
  }

  export interface BasicEpisodeInfos {
    title: string;
    number: number | "bonus";
    name: string;
    image: string;
    image2x: string;
    link: string;
    date: string;
    h1: boolean;
    hour: string;
    download: boolean;
    ref: "adn";
  }

  export interface SerieFormattedInfos extends SerieInfosBase {
    episode_count: number;
    rating: number;
    rating_count: number;
    genres: string[];
    ref: "adn";
  }

  export interface SerieInfosAdn extends SerieInfosBase {
    episode_count: string;
    genres: string;
    rating: string;
    rating_count: string;
  }

  interface SerieInfosBase {
    id: string;
    title: string;
    type: string;
    free: string;
    original_title: string | null;
    reference: string;
    age: string;
    versions: string[];
    summary: string;
    image_url: string;
    image2x_url: string;
    url: string;
    url_path: string;
    copyright: string;
    hd: string;
    simulcast: string;
  }

  export interface EpisodeInfosAdn extends FullEpisodeInfosWithoutSerie {
    serie: SerieInfosAdn;
  }

  export interface FullEpisodeInfosWithoutSerie {
    id: string;
    name: string;
    reference: string;
    type: string;
    price: string;
    price_reference: string;
    number: string;
    order: string;
    image: string;
    image_2x: string;
    summary: string;
    release_date: string;
    duration: string;
    stoptime: string;
    watch_date: string | null;
    url: string;
    url_path: string;
    embedded_url: string;
  }
}
