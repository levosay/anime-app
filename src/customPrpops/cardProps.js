import {
  arrayOf, bool, number, shape, string
} from 'prop-types'

export const cardProps = {
  item: shape({
    attributes: shape({
      abbreviatedTitles: arrayOf(string),
      ageRating: string,
      ageRatingGuide: string,
      averageRating: string,
      canonicalTitle: string,
      coverImage: shape({
        large: string,
        original: string,
        small: string,
        tiny: string
      }),
      coverImageTopOffset: number,
      createdAt: string,
      description: string,
      endDate: string,
      episodeCount: number,
      episodeLength: number,
      favoritesCount: number,
      nsfw: bool,
      popularityRank: number,
      posterImage: shape({
        large: string,
        original: string,
        small: string,
        tiny: string
      }),
      ratingRank: number,
      showType: string,
      slug: string,
      startDate: string,
      status: string,
      subtype: string,
      synopsis: string,
      titles: shape({
        en: string,
        en_jp: string,
        ja_jp: string
      }),
      totalLength: number,
      updatedAt: string,
      userCount: number,
      youtubeVideoId: string
    }),
    id: string,
    links: shape({
      self: string
    }),
    type: string
  })
}
