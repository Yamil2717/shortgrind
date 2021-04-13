import React from 'react';
import Sections from '../../components/Sections/Sections';

const howtoconnect = () => {
    return (
        <React.Fragment>
            <main className='main-center'>
                <div className='div-center'>
                    <Sections
                        className={'section-how'}
                        value={'Wrath of the Lich King'}
                        href1={'/how-to-connect/world-of-warcraft/connect'}
                        href2={'/how-to-connect/world-of-warcraft/connect'}
                        bg={'bg-how-wow bg-how'}
                    />
                    <Sections 
                        className={'section-how'}
                        value={'Dungeons & Dragons'}
                        href2={'/how-to-connect/dungeons-and-dragons/connect'}
                        bg={'bg-how-dyd bg-how'}
                    />
                    <Sections 
                        className={'section-how'}
                        value={'Conan Exiles'}
                        href2={'/how-to-connect/conan-exiles/connect'}
                        bg={'bg-how-ce bg-how'}
                    />
                    <Sections 
                        className={'section-how'}
                        value={'7 Day to Die'}
                        href2={'/how-to-connect/7-day-to-die/connect'}
                        bg={'bg-how-dtd bg-how'}
                    />
                </div>
            </main>
        </React.Fragment>
    )
}

export default howtoconnect;