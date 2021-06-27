import React from 'react';
import Aside from '../../components/aside/index'

import './styles.scss'


export default function Home(){
    return(
        <div className="Page">
            <Aside/>
            <main>

                <h1>Novo rotulo</h1>
                <div className="filterArea">
                    <Filter/>
                    <Filter/>
                    <Filter/>
                    <Filter/>
                </div>

                <div className="contra-rotulo">
                    <Filter/>
                    <inputArea/>
                    <button type="button">
                </div>


            </main>
        </div>
    )
}