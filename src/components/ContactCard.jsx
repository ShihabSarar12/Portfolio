import React from 'react';
import Text from './Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
                    style={{ color: '#ffffff' }}
                />
            )}
            {messenger && (
                <FontAwesomeIcon
                    icon={faFacebookMessenger}
                    bounce
                    size='2xl'
                    style={{ color: '#ffffff' }}
                />
            )}
            <h1 className='text-2xl text-white font-semibold text-center'>
                {name}
            </h1>
            <Text
                text={message}
                textSize='text-2xl'
                textCenter={true}
                textColor='text-slate-100'
            />
        </div>
    );
};

export default ContactCard;
