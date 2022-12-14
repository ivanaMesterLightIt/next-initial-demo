import React, { PropsWithChildren } from 'react';

type Props = {};

export const DarkLayout: React.FC<PropsWithChildren<Props>> = ({ children }) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: '5px',
            padding: '10px'
        }}>
            <h3>Dark Layout</h3>
            <div>
                { children }
            </div>
        </div>
    );
}