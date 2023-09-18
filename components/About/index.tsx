import React from 'react'

type Props = {}

function About({ }: Props) {

    const aboutMe = [
        {
            id:1,
            tittle: 'First name',
            secondTittle: 'Bekbolot'
        },
        {
            id:2,
            tittle: 'Last name',
            secondTittle: 'Zhantaev'
        },
        {
            id:3,
            tittle: 'Birthday',
            secondTittle: '8 march 2004'
        },
        {
            id:4,
            tittle: 'Country',
            secondTittle: 'Kyrgyzstan'
        },
        {
            id:5,
            tittle: 'Phone Number',
            secondTittle: '+996 (706) 915 494'
        },
        {
            id:6,
            tittle: 'Email',
            secondTittle: 'bzantaev@gmail.com'
        },
        {
            id:7,
            tittle: 'Russian',
            secondTittle: 'Native'
        },
        {
            id:8,
            tittle: 'Kyrgyz',
            secondTittle: 'Native'
        },
        {
            id:9,
            tittle: 'English',
            secondTittle: 'Intermediate'
        },
    ]

    return (
        <div className=' bg-[#313135] rounded-3xl p-8 text-white'>
            <h2 className='font-semibold text-3xl'>About me</h2>
            <div className='grid grid-cols-1 mt-4 gap-2'>
                {aboutMe.map((item) => (
                    <div className='' key={item.id}>
                        <p className='text-white/80'>{item.tittle}: <span className='font-semibold text-white'>{item.secondTittle}</span></p>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default About