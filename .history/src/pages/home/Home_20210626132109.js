import React from 'react';
import Aside from '../../components/aside/index'

import './styles.scss'


export default function Home(){
    return(
        <div className="Page">
            <Aside/>
            <main>

                <h1>Novo rotulo</h1>
                <div className="filterArea"></div>
                <Filters/>
                <Filters/>
                <Filters/>
                <Filters/>


            </main>
        </div>
    )
}