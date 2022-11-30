import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img className='  w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/e89c9679-2f5f-491d-924c-c58924a8ee4b/8ec27a1d-02ce-4489-b320-a95106906f5d/IN-en-20221121-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
    <div className='bg-black/60 fixed left-0 top-0 w-full h-[550px]'> </div>
    <div className='absolute top-[20%] p-4 md:p-8'>
      <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
    </div>
    </div>
    <SavedShows />
    </>
  )
}

export default Account