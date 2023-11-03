'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import nrt from '../../../static/naruto.png'
import ssk from '../../../static/sasuke.jpg'

export default function Carrossel(){

  const SplideDemo = () => {
    const splide = new Splide({
      // Opções do Splide
    })};
    
  return(
    <div>
      <Splide className=''       
      options={ {
        type: 'loop',
        rewind: true,
        gap   : '1rem',
      }}
      >
        <SplideSlide> <Image src={ nrt } className=''/> </SplideSlide>
        <SplideSlide> <Image src={ ssk } className=''/> </SplideSlide>
        <SplideSlide>  <Image src={ nrt } className=''/></SplideSlide>
      </Splide>
    </div>
  )
    
}
