import React from 'react'
import styles from '../styles/Home.module.css';

const ContactBanner = () => {
    return (
        <div className='pt-20'>

            <section
                className={`hidden md:block  bg-cover  bg-fixed  bg-no-repeat ${styles.background} py-28`}>



                <div className="relative mx-auto max-w-screen-xl px-4  pt-52 pb-40 sm:px-6 lg:flex   lg:items-center lg:px-8">

                </div>
            </section>
            <header className="relative md:pt-7 md:hidden">
                <img
                    className="w-full h-auto"
                    src="./images/contact.jpg"
                    alt="Product Banner"
                />

            </header>
        </div>
    )
}

export default ContactBanner