import React from 'react';
import md5 from 'md5';

const GravatarImage = ({ email, size = 100 }) => {

    const emailHash = md5(email.trim().toLowerCase());

    const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}?s=${size}`;

    return (
        <img
            src={gravatarUrl}
            alt="User Avatar"
            style={{ width: size, height: size, borderRadius: '50%' }}
        />
    );
};

export default GravatarImage;
