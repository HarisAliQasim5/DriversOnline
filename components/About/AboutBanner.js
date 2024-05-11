import React from 'react'
import styles from '../../styles/About.module.css';
const AboutBanner = () => {
  return (
    <div className='mx-auto font-serif'>
      <div className='pt-16'>

<section
    className={`hidden md:block  bg-cover  bg-fixed  bg-no-repeat ${styles.background} py-28`}>

      <div className='text-center gap-y-2 font-bold text-6xl mt-10'>
        <h1 className=' text-white'>Revolutionizing the Way </h1>
        <h1 className=' text-purple'>You Move</h1>
      </div>
      <p className='px-40 text-2xl text-white mt-20'>At Uber and Careem, we're driven by a passion for innovation and a commitment to transforming the transportation industry. Join us on this incredible journey.</p>

    <div class="relative mx-auto max-w-screen-xl px-4  pt-52 pb-40 sm:px-6 lg:flex   lg:items-center lg:px-8">
    </div>
</section>
<header className="relative md:pt-7 md:hidden">
    <img
        className="w-full h-auto"
        src="./images/aboutmain2.png"
        alt="Product Banner"
    />

</header>
</div>
    </div>
  )
}

export default AboutBanner
