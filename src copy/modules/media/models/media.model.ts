import { Schema, models, model } from "mongoose";

const MediaSchema = new Schema(
  {
    title: { type: String, required: true },
    translatedTitle: { type: String },
    releaseDate: { type: Date },
    slug: { type: String, required: true, index: true },

    category: {
      type: String,
      required: true,
      enum: [
        "jogos-eletronicos",
        "jogos-de-tabuleiro",
        "animes",
        "series",
        "desenhos",
        "filmes-animacao",
        "filmes-live-action",
        "hqs",
        "livros",
        "musicas",
      ],
    },

    cover: { type: String, required: true },
    trailer: { type: String },

    language: { type: String },
    synopsis: { type: String },

    themes: [{ type: String }],
    franchisesId: [{ type: String }],

    acquired: { type: Boolean, default: false },
    completed: { type: Boolean, default: false },

    details: {
      type: Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
  },
);

export const MediaModel = models.Media || model("Media", MediaSchema, "medias");
