import Image from 'next/image'
import React, { useState } from 'react'
import logoSvg from './assets/logo.svg'
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
type Props = {}

function Header({ }: Props) {
    const [isDrawerOpened, setIsDrawerOpened] = React.useState(false)

    function closeDrawer() {
        setIsDrawerOpened(false)
    }

    function openDrawer() {
        setIsDrawerOpened(true)
    }

    const linksList = [
        {
            id: 1,
            tittle: 'Home',
            href: '#home'
        },
        {
            id: 2,
            tittle: 'Projects',
            href: '#projects'
        },
        {
            id: 3,
            tittle: 'Contact',
            href: '#contact'
        },
    ]

    return (
        <>
            <div className='flex justify-between items-center py-4'>
                <div className="h-6 relative">
                    <Image
                        src={logoSvg}
                        alt="Logo"
                        height={28}
                    />
                </div>
                <div className='flex gap-10 max-sm:hidden'>
                    {linksList && linksList.map((item) =>
                        <a href={item.href} key={item.id}>
                            <Button variant="text" sx={{ textTransform: 'capitalize', fontWeight: 'medium', color: 'black' }}><p className={`text-sm font-medium text-black${item.id !== 1 && '/50'}`}>{item.tittle}</p></Button>
                        </a>
                    )}
                </div>
                {/* <IconButton aria-label="delete" size="large">
                <MenuIcon />
            </IconButton> */}
                <div className='min-[640px]:hidden'>
                    <Button variant="text" sx={{ color: 'black' }} size='small' onClick={openDrawer}><MenuIcon fontSize='large' /></Button>
                </div>
            </div>
            <Drawer
                variant="temporary"
                anchor="right"
                open={isDrawerOpened}
                onClose={closeDrawer}
            >
                <div className='w-screen  p-8'>
                    <div className='flex justify-between items-center'>
                        <div className="h-10 relative">
                            <Image
                                src={logoSvg}
                                alt="Logo"
                                height={42}
                            />
                        </div>
                        <CloseIcon sx={{ fontSize: "40px" }} onClick={closeDrawer} />
                    </div>
                    <div className='grid gap-3 mt-10'>
                        {linksList && linksList.map((item) =>
                            <a key={item.id} href={item.href} className={`text-[32px] font-medium text-black${item.id !== 1 && '/50'}`} onClick={closeDrawer}>{item.tittle}</a>
                        )}
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default Header