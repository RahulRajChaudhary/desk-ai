
import { auth } from '@/lib/auth'
import Home from '@/modules/home/home-view'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import React from 'react'

const page = async() => {
  const session  = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
   redirect('/sign-in')
  }

  return (
    <Home/>
  )
}

export default page