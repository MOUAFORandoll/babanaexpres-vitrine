import React from 'react'
import ItemsContainer from './FooterComponents/ItemsContainer'
import SocialIcons from './FooterComponents/SocialIcons'

export default function Footer() {
  return (
    <footer className="text-white bg-teal-900">
    <div className="md:flex md:justify-between md:items-center sm:px-12 bg-[#ffffff19] py-7 px-5">
      <h1 className='mb-6 text-3xl font-semibold lg:text-4xl md:mb-0 lg:leading-normal md:w-2/5'>
        <span className="text-teal-400">Babana</span> Express
      </h1>
      <div>
        <form action='#' method='POST'>
        <input type="email" name="email" id="email" className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none" placeholder='babana.express@babana.cm' required />
        <button className='bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full' type='submit'>
          Abonnez vous
        </button>
        </form>
      </div>
    </div>
    <ItemsContainer />
    <div className="grid grid-cols-1 gap-10 pt-2 pb-8 text-sm text-center text-gray-400 sm:grid-cols-2 lg:grid-cols-3">
      <span>&copy; Babana Express. Tous les droits reservés.</span>
      <a href="/#">Termes et politique de confidentialité</a>
      <SocialIcons Icons={["Facebook", "Instagram", "LinkedIn"]} />
    </div>
  </footer>
  )
}
