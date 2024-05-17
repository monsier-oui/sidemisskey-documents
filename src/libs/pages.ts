import * as cheerio from 'cheerio'
import type {
  MicroCMSQueries,
  MicroCMSDate,
  MicroCMSContentId,
} from 'microcms-js-sdk'

import { client } from '@/libs/client'

export type Page = {
  title: string
  emoji: string
  body: string
} & MicroCMSContentId &
  MicroCMSDate

// 投稿を全て取得
export const getAllPages = async (
  queries?: MicroCMSQueries
): Promise<Page[]> => {
  const response = await client.getAllContents({
    endpoint: 'documents',
    queries: {
      ...queries,
    },
  })

  return response
}

// 投稿を1つ取得
export const getPage = async (
  contentId: string,
  queries?: MicroCMSQueries
): Promise<Page> => {
  const response = await client.getListDetail({
    endpoint: 'documents',
    contentId,
    queries,
  })

  return response
}

// 見出しにリンクを追加
export const addHeadingLink = (body: string): string => {
  const $ = cheerio.load(body)
  $('h2,h3,h4').map((_, heading) => {
    return $(heading).append(
      `<a href="#${heading.attribs.id}" class="ml-1 opacity-50 hover:opacity-100 no-underline">#</a>`
    )
  })

  return $.html('body>*')
}
