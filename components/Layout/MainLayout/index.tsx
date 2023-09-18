import React, { ReactNode } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Head from 'next/head'
import logoSvg from '../../../public/logo.svg'

type Props = {
    children: ReactNode
}

function MainLayout({ children }: Props) {
    return (
        <>
            <Head>
                <title>Portfolio - Jantay</title>
                <link rel="icon" href="../../../public/favicon.ico" />
            </Head>
            <div className='max-w-[1200px] container mx-auto px-4'>
                <Header />
                <div>
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default MainLayout