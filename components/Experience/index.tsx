import React from 'react'

type Props = {}

function Experience({ }: Props) {


    const experienceList = [
        {
            id: 1,
            tittle: 'Init.kg',
            jobTitle: 'Student',
            description: "I've studied in school Init.kg in Bishkek (Kyrgyzstan). The lessons were intense every day for 3 hours a day",
            since: '2020 Sept',
            until: '2020 Nov',
            countMonth: '3'
        },
        {
            id: 2,
            tittle: 'Atek Digital studio',
            jobTitle: 'Internship Frontend developer',
            description: 'Studied in a company with poor knowledge, made landing pages and learned how to make up sites with adaptation and Cross-browser compatibility and oh, during this time, I pumped very well',
            since: '2020 Dec',
            until: '2021 April',
            countMonth: '5'
        },
        {
            id: 3,
            tittle: 'Atek Digital studio',
            jobTitle: 'Junior Frontend developer',
            description: 'I gained a lot of experience and did projects for React as online stores and learned how to work in Backend developer, and also helped in other projects',
            since: '2021 April',
            until: '2021 June',
            countMonth: '3'
        },
        {
            id: 4,
            tittle: 'Freelance',
            jobTitle: 'Junior Frontend developer',
            description: 'Me and my friend the Junior Python developer took on the Dordoi Online Store project, When we took the project and no one knew how to make a prototype of the site and I had to take it and so I learned how to make prototypes on Fimga and gained good experience in web design and on React and working with backend',
            since: '2021 June',
            until: '2021 Aug',
            countMonth: '2'
        },
        {
            id: 5,
            tittle: 'Freelance',
            jobTitle: 'Strong Junior Frontend Developer',
            description: 'After a year break, I started programming, and took various orders within Kyrgyzstan, multi-page sites, small sites with Backend',
            since: '2022 June',
            until: '',
            countMonth: ''
        },
    ]

    return (
        <div className='col-span-12 lg:col-span-8 bg-[#90afff] rounded-3xl p-8 '>
            <h2 className='font-semibold text-3xl'>Experience</h2>
            <div className='mt-10 grid grid-cols-1 gap-10'>
                {experienceList.map((item) => (
                    <div className='' key={item.id}>
                        <p className='col-span-1 font-medium text-xs text-black/60'>{item.since} - {item.until} {item.countMonth && `-  ${item.countMonth} month`}</p>
                        <h2 className=' text-2  text-2xl font-semibold'>{item.tittle}</h2>
                        <p className=' text-lg font-medium'>{item.jobTitle}</p>
                        <p className='text-black/80'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience