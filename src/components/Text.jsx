import React, { useEffect, useRef } from 'react';

const Text = ({
    text,
    textSize,
    textCenter = false,
    textColor = 'text-white',
}) => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const hackerText = useRef();
    useEffect(() => {
        let interval = null;
        hackerText.current.onmouseover = (event) => {
            let iteration = 0;
            console.log(event.target.dataset);

            clearInterval(interval);
            interval = setInterval(() => {
                event.target.innerText = event.target.innerText
                    .split('')
                    .map((letter, index) => {
                        if (index < iteration) {
                            return event.target.dataset.value[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join('');
                if (iteration >= event.target.dataset.value.length) {
                    clearInterval(interval);
                }
                iteration += 1 / 3;
            }, 30);
        };
    }, []);
    return (
        <h1
            ref={hackerText}
            data-value={text}
            className={`hackerText ${textSize} font-bold ${textColor} ${
                textCenter ? 'text-center' : ''
            }`}
        >
            {text}
        </h1>
    );
};

export default Text;
