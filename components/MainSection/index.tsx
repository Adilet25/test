import React from 'react'
import style from './style.module.scss'
import photoAuthor from './assets/photoAuthor.png'
import Button from '@mui/material/Button/Button'
import Image from 'next/image'
import instagramSvg from './assets/instagram.svg'
import githubSvg from './assets/github.svg'
import linkedinSvg from './assets/linkedin.svg'
import twitterSvg from './assets/twitter.svg'
import telegramSvg from './assets/telegram.svg'
import {ContactsList} from '../data'

type Props = {}

export const linksSocial = [
    {
        id: 1,
        title: 'Linkedin',
        url: ContactsList.linkedin,
        icon: linkedinSvg,
        color: '#0A66C2'
    },
    {
        id: 2,
        title: 'Instagram',
        url: ContactsList.instagram,
        icon: instagramSvg,
        color: '#D82D7E #FA8F21',
    },
    {
        id: 3,
        title: 'Github',
        url: ContactsList.github,
        icon: githubSvg,
        color: '#737373',
    },
    {
        id: 4,
        title: 'Twitter',
        url: ContactsList.twitter,
        icon: twitterSvg,
        color: '#1D9BF0',
    },
    {
        id: 5,
        title: 'Telegram',
        url: ContactsList.telegram,
        icon: telegramSvg,
        color: '#2AABEE',
    },
]

function MainSection({ }: Props) {
    return (
        <>
            <div className={`${style.cssSelector} flex flex-col justify-between col-span-12 md:col-span-7 rounded-3xl cssSelector p-8  min-h-[400px]`}>
                <div>
                    <h1 className='text-4xl font-bold text'>
                        Hello, I’m Bekbolot, a Front-end
                        Developer With 1.5 years of
                        experience
                    </h1>
                    <p className='mt-[50px] text-lg'>
                    I am currently looking for an opportunity to work remotely in an English speaking environment that will help me advance my career path.
                    </p>
                </div>
                <div className='flex items-center max-sm:flex-col gap-2 mt-5'>
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
            <div className='col-span-12 md:col-span-5 rounded-3xl bg-black bg-center overflow-hidden max-md:order-first max-md:h-[500px]'>
                <Image
                    alt='Author'
                    src={photoAuthor}
                    objectFit='contain'
                />
            </div>
        </>
    )
}

export default MainSection