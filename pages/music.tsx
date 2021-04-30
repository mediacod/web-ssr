import React from 'react';
import MainLayout from "../layout/MainLayout";
import SectionLayout from "../layout/SectionLayout";
import Sections from "../components/sections/Sections";

const Music = () => {
    return (
        <MainLayout>
            <SectionLayout>
                <Sections />
            </SectionLayout>
        </MainLayout>
    );
};

export default Music;
