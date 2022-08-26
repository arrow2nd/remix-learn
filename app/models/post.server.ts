import { prisma } from '~/db.server'

import type { Post } from '@prisma/client'
export type { Post } from '@prisma/client'

/**
 * 全ての投稿を取得
 * @returns 投稿一覧
 */
export async function getPosts() {
  return prisma.post.findMany()
}

/**
 * slugから投稿を取得
 * @returns 投稿
 */
export async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } })
}

export async function createPost(
  post: Pick<Post, 'slug' | 'title' | 'markdown'>
) {
  return prisma.post.create({ data: post })
}
