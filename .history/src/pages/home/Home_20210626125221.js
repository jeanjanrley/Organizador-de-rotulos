import React from 'react';
import Aside from '../../components/aside/index'

import './styles.scss'


export default function Home(){
    return(
        <div className="Page Home">
            <Aside/>
            <main>
                <h1>Exim</h1>
            </main>
        </div>
    )
}