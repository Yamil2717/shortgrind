import React from 'react';
import './Homesection.css';
import BgWowSlider from '../../img/972e76587eabe4962dd2e982aa5a7339.jpg';
import BgDyDSlider from '../../img/OaNyBm7.jpg';
import BgCESlider from '../../img/wp3342238.jpg';
import BgDtDSlider from '../../img/wp2082893.jpg';


const Homesection = () => {
    const ObjectFeik = [
        {
            title: 'We open the recruiting program to a friend',
            url: 'https://shortgrind.net/forum/index.php?board=11.0',
            date: 'May 28, 2020.',
            backgroundUrl: 'https://shortgrind.net/src/img/M94XIJ2YW7KN1557355375382.jpg',
        },
        {
            title: 'We have enabled mirror migration!',
            url: 'https://shortgrind.net/forum/index.php?board=12.0',
            date: 'May 27, 2020.',
            backgroundUrl: 'https://shortgrind.net/src/img/6WM064SC14BI1578677962639.jpg',
        },
        {
            title: 'Server improvements!',
            url: 'https://shortgrind.net/forum/index.php?board=8.0',
            date: 'May 3, 2020.',
            backgroundUrl: 'https://shortgrind.net/src/img/M94XIJ2YW7KN1557355375382.jpg',
        },
        {
            title: 'We have officially opened the server, join us!',
            url: 'https://shortgrind.net/how-to-connect.php',
            date: 'April 26, 2020.',
            backgroundUrl: 'https://shortgrind.net/src/img/K1EZ8MCBITBG1548266225944.jpg',
        }
    ];

    const Slider = () => {
        let BgMain = document.querySelector('.bg-main');
        setTimeout(() => {
            BgMain.style.opacity = '0.5';
            setTimeout(() => {
                BgMain.style.opacity = '0';
                BgMain.style.backgroundImage = `url('${BgWowSlider}')`; 
                setTimeout(() => {
                    BgMain.style.opacity = '0.5';
                    setTimeout(() => {
                        BgMain.style.opacity = '1';
                        setTimeout(Slider2, 7000);
                    }, 150);
                }, 150);
            }, 150)
        }, 150);
    }

    setTimeout(Slider, 0);

    const Slider2 = () => {
        setTimeout(() => {
            let BgMain = document.querySelector('.bg-main');
            BgMain.style.opacity = '0.5';
            setTimeout(() => {
                BgMain.style.opacity = '0';
                BgMain.style.backgroundImage = `url('${BgDyDSlider}')`;
                setTimeout(() => {
                    BgMain.style.opacity = '0.5';
                    setTimeout(() => {
                        BgMain.style.opacity = '1';
                        setTimeout(Slider3, 7000);
                    }, 150);
                }, 150);
            }, 150)
        }, 150);
    }

    const Slider3 = () => {
        setTimeout(() => {
            let BgMain = document.querySelector('.bg-main');
            BgMain.style.opacity = '0.5';
            setTimeout(() => {
                BgMain.style.opacity = '0';
                BgMain.style.backgroundImage = `url('${BgCESlider}')`;
                setTimeout(() => {
                    BgMain.style.opacity = '0.5';
                    setTimeout(() => {
                        BgMain.style.opacity = '1';
                        setTimeout(Slider4, 7000);
                    }, 150);
                }, 150);
            }, 150)
        }, 150);
    }

    const Slider4 = () => {
        setTimeout(() => {
            let BgMain = document.querySelector('.bg-main');
            BgMain.style.opacity = '0.5';
            setTimeout(() => {
                BgMain.style.opacity = '0';
                BgMain.style.backgroundImage = `url('${BgDtDSlider}')`;
                setTimeout(() => {
                    BgMain.style.opacity = '0.5';
                    setTimeout(() => {
                        BgMain.style.opacity = '1';
                        setTimeout(Slider, 7000);
                    }, 150);
                }, 150);
            }, 150)
        }, 150);
    }

    return (
        <React.Fragment>
            <main className='main'>
                <div className='bg-main'></div>
                <div className='information'>
                    <h1 className='information-title'>Short Grind</h1>
                    <p className='information-text'>
                        Hey folks, welcome to our website and community.
                        <br />
                        Here is where you will find multiple places with tons
                        <br />
                        of info about the various games covered by Short Grind.
                    </p>
                    <a className='information-button' href='/us'>Learn More About Us</a>
                </div>
                <h1 className='news-title'>Latest news & updates<a href='/news/'>View all news</a></h1>
                <section className='news'>
                    {ObjectFeik.map( (item, index) => {
                        return (
                            <div key={index} className='new-div'>
                                <a className='new-link' href={item.url}>
                                    <div className='new-details'>
                                        <time className='new-date'>{item.date}</time>
                                        <h2 className='new-title'>{item.title}</h2>
                                    </div>
                                    <div className='new-bg' style={{backgroundImage: `url(${item.backgroundUrl})`}}></div>
                                </a>
                            </div>
                        );
                    })}
                </section>
		    </main>
            <section className='panel-info'>
                <div className='panel text-right'>
                    <div className='panel-text'>
                        <span className='panel-subtitle'>World of Warcraft</span>
                        <h1 className='panel-title'>Wrath of the Lich King</h1>
                        <p className='panel-info-description'>World of Warcraft: Wrath of the Lich King is the second expansion set for the massively multiplayer online role-playing game World of Warcraft, Our custom server has Blizz-like Scripting for Quests, Rainds, Dungeons, Battle Grounds, Arenas and much more! But allows for 2xp Talent points and custom scripts of adjusting raid and dungeon difficulty to the size of the group so you and a couple friends can experience all of the games content no matter how many of you there are.</p>
                        <a className='btn-download' href='/how-to-connect/world-of-warcraft/connect'>Download</a>
                        <a className='btn-connect' href='/how-to-connect/world-of-warcraft/connect'>How to connect</a>
                    </div>
                </div>
                <div className='panel-bg bg-panel-wow'></div>
            </section>
            <section className='panel-info'>
                <div className='panel text-left'>
                    <div className='panel-text'>
                        <span className='panel-subtitle'>Game</span>
                        <h1 className='panel-title'>Dungeons & Dragons</h1>
                        <p className='panel-info-description'>Get one of the three Celebration Collection packs and commemorate 30 years of Blizzard with in-game loot like the bear-y impressive Snowstorm mount or the otherworldly Moon-Touched Netherwhelp pet. Head over to the Shop for details.</p>
                        <a className='btn-connect' href='/how-to-connect/dungeons-and-dragons/connect'>How to connect</a>
                    </div>
                </div>
                <div className='panel-bg bg-panel-dyd'></div>
            </section>
            <section className='panel-info'>
                <div className='panel text-right'>
                    <div className='panel-text'>
                        <span className='panel-subtitle'>Survival Game</span>
                        <h1 className='panel-title'>Conan Exiles</h1>
                        <p className='panel-info-description'>An online multiplayer survival game, now with mounts and mounted combat, set in the lands of Conan the Barbarian. Survive in a vast open world sandbox, build a home and kingdom, dominate your enemies in single or multiplayer.</p>
                        <a className='btn-connect' href='/how-to-connect/conan-exiles/connect'>How to connect</a>
                    </div>
                </div>
                <div className='panel-bg bg-panel-ce'></div>
            </section>
            <section className='panel-info'>
                <div className='panel text-left'>
                    <div className='panel-text'>
                        <span className='panel-subtitle'>Survival Game</span>
                        <h1 className='panel-title'>7 Day to Die</h1>
                        <p className='panel-info-description'>This is an open-world game that is a unique combination of first person shooter, survival horror, tower defense, and role-playing games. Play the definitive zombie survival sandbox RPG that came first. SGG horde awaits!</p>
                        <a className='btn-connect' href='/how-to-connect/7-day-to-die/connect'>How to connect</a>
                    </div>
                </div>
                <div className='panel-bg bg-panel-dtd'></div>
            </section>
        </React.Fragment>
    );
}

export default Homesection;