import React, { useEffect } from 'react';

const Text = ({ text, textSize }) => {
    //TODO: have to work for multiple components
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    useEffect(() =>{
        let interval = null;
        const hackerText = document.querySelector('.hackerText');
        hackerText.onmouseover = (event) =>{
            let iteration = 0;
            clearInterval(interval);
            interval = setInterval(() =>{
                event.target.innerText = event.target.innerText
                .split('')
                .map((letter, index) =>{
                    if(index < iteration){
                        return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join('');
                if(iteration >= event.target.dataset.value.length){
                    clearInterval(interval);
                }
                iteration += 1 / 3;
            }, 30);
        }
    },[]);
    return (
        <h1 data-value={ text } className={`hackerText ${ textSize } font-bold text-white`}>
            { text }
        </h1>
    );
};

export default Text;