import React, { useMemo } from 'react';
import Text from './Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
    faWhatsapp,
    faFacebookMessenger,
} from '@fortawesome/free-brands-svg-icons';

const ContactCard = ({
    envelop = false,
    whatsapp = false,
    messenger = false,
    name,
    message,
}) => {
    const medium = useMemo(() => {
        if (envelop) {
            return 'mailto:shihabsararchamok@gmail.com';
        } else if (messenger) {
            return 'https://m.me/Shihab.sarar.1201';
        } else if (whatsapp) {
            return 'https://wa.me/1788667080';
        }
    }, [messenger, whatsapp, envelop]);
    return (
        <div className='flex flex-col justify-space bg-slate-900/40 rounded-2xl h-1/3 w-full p-5 backdrop-blur-sm'>
            {envelop && (
                <FontAwesomeIcon
                    icon={faEnvelope}
                    bounce
                    size='2xl'
                    style={{ color: '#FFFFFF' }}
                />
            )}
            {whatsapp && (
                <FontAwesomeIcon
                    icon={faWhatsapp}
                    bounce
                    size='2xl'
                    style={{ color: '#FFFFFF' }}
                />
            )}
            {messenger && (
                <FontAwesomeIcon
                    icon={faFacebookMessenger}
                    bounce
                    size='2xl'
                    style={{ color: '#FFFFFF' }}
                />
            )}
            <h1 className='text-2xl text-white font-semibold text-center'>
                {name}
            </h1>
            <a
                className='group relative flex justify-center items-center cursor-pointer'
                href={medium}
                target='_blank'
                rel='noreferrer'
            >
                <Text
                    text={message}
                    textSize='text-2xl'
                    textCenter={true}
                    textColor='text-slate-400'
                />
                <div className='h-full absolute right-5 top-0 flex justify-center items-center group-hover:translate-x-3 transition-all duration-500 ease-in-out'>
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        size='lg'
                        style={{ color: '#FFFFFF' }}
                    />
                </div>
            </a>
        </div>
    );
};

export default ContactCard;
