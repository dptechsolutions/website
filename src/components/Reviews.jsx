import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const data = [
    {
        "name": "Karl Hilll",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/753.jpg",
        "review": "review 1",
        "stars": "stars 1",
        "id": "1"
    },
    {
        "name": "Melissa Cremin",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/980.jpg",
        "review": "review 2",
        "stars": "stars 2",
        "id": "2"
    },
    {
        "name": "Stephen Huel",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/5.jpg",
        "review": "review 3",
        "stars": "stars 3",
        "id": "3"
    },
    {
        "name": "Barry Considine",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1128.jpg",
        "review": "review 4",
        "stars": "stars 4",
        "id": "4"
    },
    {
        "name": "Gerard Mitchell",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/876.jpg",
        "review": "review 5",
        "stars": "stars 5",
        "id": "5"
    },
    {
        "name": "Miss Eddie Bode",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/346.jpg",
        "review": "review 6",
        "stars": "stars 6",
        "id": "6"
    }
]

function Reviews() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
  return (
    // <div className='w-3/4 m-auto '>
        //  <div className='mt-20'>
    <div
        name="reviews"
        className=" h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
           Reviews
          </p>
        </div>
        <Slider {...settings} >
        {data.map((d)=>(
            <div className='bg-black h-[450px] text-white round-xl '>
                <div className='h-56 rounded-t-xl bg-gradient-to-b from-cyan-500 to-blue-500 flex justify-center items-center'>
                    <img src = {d.avatar} alt="" className='h-44 w-44 rounded-full'/>
                </div>

                <div className='flex flex-col justify-center items-center gap-4'>
                    <p className='text-xl font-semibold'>{d.name}</p>
                    <p>{d.review}</p>
                    <button className='bg-gradient-to-b from-cyan-500 to-blue-500  text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
                </div>
            </div>

        ))}
        </Slider>
    </div>
 </div>
  )
}

export default Reviews



// text-white  px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300