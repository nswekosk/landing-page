import React from 'react';
import { Main, Signup } from './components';
import { Section } from 'components/organisms';
export default () => {
    return (
        <div>
            <Section>
                <Main />
            </Section>
            <Section>
                <Signup />
            </Section>
        </div>
    );
};