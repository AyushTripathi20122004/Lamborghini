import React from 'react'

const Page404 = () => {
  return (
    <div class="flex flex-col items-center h-screen w-full justify-center text-sm max-md:px-4">
        <h1 class="text-8xl md:text-9xl font-bold text-black">404</h1>
        <div class="h-1 w-16 rounded bg-black my-5 md:my-7"></div>
        <p class="text-2xl md:text-3xl font-bold text-gray-800">Page Not Found</p>
        <p class="text-xl md:text-base mt-4 text-gray-500 max-w-md text-center">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
    </div>
  )             
}

export default Page404
