import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import { FollowingFeed, ForYouFeed } from '../feed/GetAllPost'
import { GettAllPosts } from '../challenges/GetPostsTags'

export const FeedsMainContent = () => {
  return (
    <section className='col-span-4'>
      <Tabs defaultValue="forYou">
        <TabsList className='w-full'>
          <TabsTrigger value='forYou' className='cursor-pointer'>For You</TabsTrigger>
          <TabsTrigger value='following' className='cursor-pointer'>Following</TabsTrigger>
          <TabsTrigger value='challenges' className='cursor-pointer'>Challenges</TabsTrigger>
        </TabsList>
        <TabsContent value='forYou'>
          <ForYouFeed />
        </TabsContent>
        <TabsContent value='following'>
          <FollowingFeed />
        </TabsContent>
        <TabsContent value='challenges'>
          <GettAllPosts />
        </TabsContent>
      </Tabs>
    </section>
  )
}
