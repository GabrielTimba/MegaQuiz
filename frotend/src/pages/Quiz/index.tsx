import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/footer';
import Button from '../../components/Button';

import './style.css'

const Quiz=()=>{
    return(
        <div id="quiz-page">
            <Header/>
            <main className="content">
                <h4>Questoes Respondidas: 2/9</h4>
                <div>
                    <h3>1.What does CSS stand for?</h3>
                    <ul>
                        <li><span>A</span> Computer Style Sheets</li>
                        <li><span>B</span> Computer Style Sheets</li>
                        <li><span>C</span> Computer Style Sheets</li>
                        <li><span>D</span> Computer Style Sheets</li>
                    </ul>
                </div>

                <div>
                    <h3>1.What does CSS stand for?</h3>
                    <ul>
                        <li><span>A</span> Computer Style Sheets</li>
                        <li><span>B</span> Computer Style Sheets</li>
                        <li><span>C</span> Computer Style Sheets</li>
                        <li><span>D</span> Computer Style Sheets</li>
                    </ul>
                </div>

                <div>
                    <h3>1.What does CSS stand for?</h3>
                    <ul>
                        <li><span>A</span> Computer Style Sheets</li>
                        <li><span>B</span> Computer Style Sheets</li>
                        <li><span>C</span> Computer Style Sheets</li>
                        <li><span>D</span> Computer Style Sheets</li>
                    </ul>
                </div>

                <div>
                    <h3>1.What does CSS stand for?</h3>
                    <ul>
                        <li><span>A</span> Computer Style Sheets</li>
                        <li><span>B</span> Computer Style Sheets</li>
                        <li><span>C</span> Computer Style Sheets</li>
                        <li><span>D</span> Computer Style Sheets</li>
                    </ul>
                </div>

                <div>
                    <h3>1.What does CSS stand for?</h3>
                    <ul>
                        <li><span>A</span> Computer Style Sheets</li>
                        <li><span>B</span> Computer Style Sheets</li>
                        <li><span>C</span> Computer Style Sheets</li>
                        <li><span>D</span> Computer Style Sheets</li>
                    </ul>
                </div>

                <section>
                    <Button text="Anterior"/>
                    <Button text="Proximo"/>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Quiz;