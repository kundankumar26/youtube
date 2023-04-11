import React from 'react'

const VideoCard = ({item}) => {
    const data = item.snippet;
    const stats = item.statistics;
  return (
    <div className='m-2 mb-8 rounded-2xl w-80 hover:shadow-lg'>
        <img className='rounded-2xl' alt='thumbnail' src={data.thumbnails.medium.url}/>
        <ul className='p-2'>
            <li className='font-bold text-lg line-clamp-2'>{ data.title }</li>
            <li className='font-medium mt-2'>{ data.channelTitle }</li>
            <li>{ stats.viewCount } views</li>
        </ul>
    </div>
  )
}

export default VideoCard