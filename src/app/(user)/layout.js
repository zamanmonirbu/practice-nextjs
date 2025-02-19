import React from 'react';
import FooterPage from '../components/footer/page';

const UserLayout = ({chilren}) => {
    return (
        <div>
            <FooterPage/>
            {chilren}
        </div>
    );
};

export default UserLayout;