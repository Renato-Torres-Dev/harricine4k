'use client'

import { TbBrandWhatsapp } from "react-icons/tb"

export const WhatsButton = () => {
  return (
    <button
      type="button"
      className="!fixed w-[60px] h-[60px] bottom-5 end-5 rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-800 hover:shadow-lg focus:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-500 active:shadow-lg"
      id="whatsapp"
    >
      <a href="https://wa.me/5581994119761?text=Gostaria%20de%20adquirir%20um%20plano" target="_blank">
        <span className="[&>svg]:w-4">
          <i className="mt-[16px]"><TbBrandWhatsapp size={36}/></i>
        </span>
      </a>
    </button>
  )
}