import Image from 'next/image'
import React from 'react'
import Cap from '/public/assets/images/Cap_1.png'
import Hulk from '/public/assets/images/Incredible_Hulk.png'
import Strange from '/public/assets/images/Strange.png'
import Iron_man from '/public/assets/images/Iron_Man.png'
import Spider_man from '/public/assets/images/Spider_Man.png'
import FF from '/public/assets/images/FF.png'
import Bat from '/public/assets/images/Batman.png'
import GL from '/public/assets/images/Green_Lantern.png'
import Joker from '/public/assets/images/Joker.png'
import Super from '/public/assets/images/Superman.png'
import Flash from '/public/assets/images/Flash.png'
import JLA from '/public/assets/images/JLA.png'
import Walking from '/public/assets/images/Walking.png'


const Home = () => {
  return (
    <>
      <section className="flex px-20 py-24">
        <div className="flex flex-col gap-16 justify-center items-center">
          <p className='flex items-center justify-center w-48 dialog-btn'>Marvel</p>
          <div className="flex flex-wrap gap-10 mt-7 w-full">
            <div className="grid grid-flow-col gap-8">
              <div className='flex justify-between product-card_img-container'>
                <Image
                  src={Cap}
                  alt=''
                  width={150}
                  height={150}
                  className='product-card-img rounded-lg'
                />
              </div>
              <div className='product-card_img-container'>
                <Image
                  src={Hulk}
                  alt=''
                  width={150}
                  height={150}
                  className='product-card-img rounded-lg'
                />
              </div>
              <div className='product-card_img-container'>
                <Image
                  src={Strange}
                  alt=''
                  width={150}
                  height={150}
                  className='product-card-img rounded-lg'
                />
              </div>
              <div className='product-card_img-container'>
                <Image
                  src={Iron_man}
                  alt=''
                  width={150}
                  height={150}
                  className='product-card-img rounded-lg'
                />
              </div>
              <div className='product-card_img-container'>
                <Image
                  src={Spider_man}
                  alt=''
                  width={150}
                  height={150}
                  className='product-card-img rounded-lg'
                />
              </div>
              <div className='product-card_img-container'>
                <Image
                  src={FF}
                  alt=''
                  width={150}
                  height={150}
                  className='product-card-img rounded-lg'
                />
              </div>
            </div>
          </div>
          <p className='flex items-center w-48 dialog-btn'>DC</p>
          <div className="flex flex-wrap gap-10 mt-7 w-full">
            <div className="grid grid-flow-row grid-cols-6 gap-8">
              <div className='flex justify-center product-card_img-container'>
                <Image
                  src={Bat}
                  alt=''
                  width={150}
                  height={150}
                  className='product-card-img rounded-lg'
                />
              </div>
              <div className='flex justify-center product-card_img-container'>
                <Image
                  src={Super}
                  alt=''
                  width={150}
                  height={150}
                  className='product-card-img rounded-lg'
                />
              </div>
              <div className='flex justify-center product-card_img-container'>
                <Image
                  src={Flash}
                  alt=''
                  width={150}
                  height={150}
                  className='product-card-img rounded-lg'
                />
              </div>
              <div className='flex justify-center product-card_img-container'>
                <Image
                  src={Joker}
                  alt=''
                  width={150}
                  height={150}
                  className='product-card-img rounded-lg'
                />
              </div>
              <div className='flex justify-center product-card_img-container'>
                <Image
                  src={JLA}
                  alt=''
                  width={150}
                  height={150}
                  className='product-card-img rounded-lg'
                />
              </div>
              <div className='flex justify-center product-card_img-container'>
                <Image
                  src={GL}
                  alt=''
                  width={150}
                  height={150}
                  className='product-card-img rounded-lg'
                />
              </div>
            </div>
          </div>
          <p className='flex items-center w-48 dialog-btn'>Indies</p>
          <div className="flex flex-wrap gap-10 mt-7 w-full">
            <div className="grid grid-flow-row grid-cols-6 gap-8">
              <div className='flex justify-center product-card_img-container'>
                <Image
                  src={Walking}
                  alt=''
                  width={150}
                  height={150}
                  className='product-card-img rounded-lg'
                />
              </div>
              <div className='flex justify-center product-card_img-container'>2</div>
              <div className='flex justify-center product-card_img-container'>3</div>
              <div className='flex justify-center product-card_img-container'>4</div>
              <div className='flex justify-center product-card_img-container'>5</div>
              <div className='flex justify-center product-card_img-container'>6</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home