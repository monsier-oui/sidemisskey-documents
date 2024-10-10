import { JSDOM } from 'jsdom'
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

export interface Heading {
  text: string
  id: string
  depth?: number
}

// 見出しを抽出
export const getHeadings = (body: string): Heading[] => {
  return Array.from(
    JSDOM.fragment(body).querySelectorAll<HTMLHeadingElement>('h2,h3,h4')
  ).map((node) => ({
    text: node.textContent || '',
    id: node.id,
    depth: Number(node.nodeName.substring(1)),
  }))
}
