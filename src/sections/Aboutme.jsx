import React, { useState } from 'react'
import Button from '../components/Button.jsx';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants/index.js';
import { bigShoe1 } from '../assets/images/index.js';
import ShoeCard from '../components/ShoeCard.jsx';

const Aboutme = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section id='home' className='w-full flex xl:flex-row justify-center min-h-screen gap-10 max-container'>
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-lg:padding-x pt-28  ">
      <h1 className='mt-10 font-palanquin text-8xl max-sm: text-[72px] max-sm:leading-[82] font-bold '>
        <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>Hi , I'm </span> 
        <br />
      <span className='text-coral-red inline-block mt-3'>Ahmed </span> ghoul.</h1>
      <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>A frontend Developer with +2 years experience in htmk , css and react .</p>

      <Button label="See My Projects" iconUrl ={arrowRight} />
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>{statistics.map((stat,index)=>(
          <div key={index}>
            <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
            <p className='leading-7 font-montserrat text-slate-gray '> {stat.label}</p>
          </div>
        ))}</div>
        </div>

        <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
          <img 
          src={bigShoeImg} 
          alt="shoe collection" 
          width={610} 
          height={500} 
          className='object-contain relative z-10' />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard 
              imgUrl={shoe} 
              changeBigShorImg={(shoe)=>{setBigShoeImg(shoe)}} 
              bigShoeImg={bigShoeImg}/>
            </div>
          ))}

        </div>
        </div>
    </section>
  )
}

export default Aboutme