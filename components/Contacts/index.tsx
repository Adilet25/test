import React from 'react'
import Image from 'next/image'
import { ContactsList } from '../data'
import { linksSocial } from '../MainSection/index'

type Props = {}

function Contacts({ }: Props) {
    return (
        <div className={`bg-[#9d79ff] flex flex-col justify-between col-span-12 rounded-3xl cssSelector p-8  min-h-[200px]`}>
            <div>
                <h1 className='text-4xl font-bold text'>
                    Want to work together?
                </h1>
                <p className='mt-[30px] text-lg'>
                    Feel free to reach out for collaborations or just a friendly Hello <br />
                    {ContactsList.email}
                </p>
            </div>
            <div className='flex items-center max-sm:flex-col gap-2 mt-20'>
                <a href={`mailto:${ContactsList.email}`} className='h-12 w-[300px] flex justify-center items-center max-sm:w-full rounded-full bg-black text-white hover:scale-105 transition-all'>Contact me</a>
                <div className='flex gap-2 max-sm:justify-between w-full'>
                    {linksSocial.map((link) =>
                        <a key={link.id} href={link.url} className={`flex justify-center items-center  bg-black h-12 w-12 rounded-full bg-[${link.color}]`}>
                            <Image
                                alt='Author'
                                src={link.icon}
                                objectFit='contain'
                            />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Contacts