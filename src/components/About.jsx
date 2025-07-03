import { useEffect } from 'react';
import Art from './Art/Art';

const About = () => {
    //TODO: Education section
    //TODO: Extra curricular section
    //! - Art
    //! - CP
    useEffect(() => {
        const about = document.querySelector('#about');
        const blob = document.querySelector('#mouse_blob');
        about.addEventListener('mousemove', (event) => {
            blob.animate(
                {
                    left: `${event.clientX}px`,
                    top: `${event.clientY}px`,
                },
                { duration: 10000, fill: 'forwards' }
            );
        });
        return () => about.removeEventListener('mousemove', (event) => {});
    }, []);
    return (
        <div id='about'>
            <section className='bg-black p-5 w-screen h-screen'>
                <Art />
            </section>

            <section className='bg-black w-screen h-screen'>
                <div className='flex flex-col justify-center items-center h-full text-white font-semibold text-3xl gap-5'>
                    <h1 className='text-4xl'>About Me</h1>
                    <p className='text-xl max-w-2xl text-center'>
                        I am a passionate software developer with a keen
                        interest in web development and open-source
                        contributions. I love to create innovative solutions and
                        continuously learn new technologies.
                    </p>
                    <button className='w-44 text-xl p-4 bg-slate-700 border-2 border-slate-800 hover:bg-slate-600 rounded-full active:bg-slate-900'>
                        Contact Me
                    </button>
                </div>
            </section>
            <div
                id='mouse_blob'
                className='w-80 h-80 absolute top-1/2 left-1/2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 pointer-events-none blur-3xl'
            ></div>
        </div>
    );
};

export default About;
