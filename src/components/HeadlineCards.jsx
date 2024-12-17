import React from 'react'

function HeadlineCards() {
  return (
    <div className='max-w-[1640px] m-auto p-4 py-12 grid md: grid-cols-3 gap-6'>
        {/*Card */}
        <div className='rounded-xl relative'>
            {/* Over lay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-s-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>Son's Out, BOGO's Out</p>
               <p className='px-2'>Through 8/26</p>
               <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
                <img 
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded'
                 src='https://media.istockphoto.com/id/1397193477/photo/club-sandwich-made-with-bacon-ham-turkey-cheese-lettuce-and-tomato.jpg?b=1&s=612x612&w=0&k=20&c=YE2sz0DXGn5SF3ofOIJKaG0f-W_e7PlSU-vru5izg9k=' alt='/' 
                />
        </div>
        {/*Card */}
        <div className='rounded-xl relative'>
            {/* Over lay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-s-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>New Resrurant</p>
               <p className='px-2'>Add Daily</p>
               <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
                <img 
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded'
                 src='https://images.pexels.com/photos/3023476/pexels-photo-3023476.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' 
                />
        </div>
        {/*Card */}
        <div className='rounded-xl relative'>
            {/* Over lay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-s-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>We Deliver  Desserts</p>
               <p className='px-2'>Tasty Treats</p>
               <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
                <img 
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded'
                 src='https://images.pexels.com/photos/375467/pexels-photo-375467.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' 
                />
        </div>
    </div>
  )
}

export default HeadlineCards