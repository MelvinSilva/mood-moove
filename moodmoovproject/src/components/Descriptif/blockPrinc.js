import React from 'react';

const BlockPrinc = () => {
    return (
        <div>
            <div className='div__btnReturn'><button className='principal__btnReturn'>RETOUR</button></div>
            <div className='principal'>
                <div className='image'></div>
                <p className='principal__text'></p>
                <p className='principal__price'>prix</p>
            </div>
        </div>
    );
};

export default BlockPrinc;