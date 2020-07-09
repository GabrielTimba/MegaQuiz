import React,{useState,useEffect,MouseEvent} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/footer';
import Button from '../../components/Button';
import ModalAppearance from '../../components/Modal';
import data from '../../data/data';

import './style.css';

interface Data {
    number:number
    question:string,
    answers:string[],
    correct:number
}

const Quiz:React.FC=()=>{
    const [questions,setQuestions]=useState<Data[]>([]);
    const [show,setShow]=useState(false);
    const toggle=()=>{setShow(!show)};

    const [currentPage,setCurrentPage]=useState(1);
    const [totalPage,setTotalPage]=useState(0);
    const [answeredQuestions,setAnsweredQuestions]=useState(0);
    const [score,setScore]=useState(0);
    const limit=5;
    
    useEffect(()=>{
        const test=data.slice((currentPage-1)*limit,currentPage*limit);
        setQuestions(test);
    },[currentPage]);

    useEffect(()=>{
        if(data.length % limit===0)
            setTotalPage(data.length/limit)
        else
            setTotalPage(parseInt((String)(data.length/limit))+1)
    },[]);

    function handleCheckAnswer(question:Data,answer:string,event:MouseEvent<HTMLLIElement>){
        event.currentTarget.classList.add('active');
        event.currentTarget.parentElement?.classList.add('block'); //block click event in the list of options
        const answerIndex=question.answers.indexOf(answer)+1;

        if(answerIndex===question.correct){
            setScore(score+1)
        }
        setAnsweredQuestions(answeredQuestions+1);
    }

    return(
        <div id="quiz-page">
            <Header/>
            <main className="content">
                <h4>Questoes Respondidas: {answeredQuestions}/{data.length}</h4>
                {
                    questions.map(item =>(
                        <div key={item.number}>
                            <h3>{item.question}</h3>
                            <ul>
                                <li onClick={(e)=>handleCheckAnswer(item,item.answers[0],e)} >
                                    <span>A </span> {item.answers[0]}
                                </li>
                                <li onClick={(e)=>handleCheckAnswer(item,item.answers[1],e)}>
                                    <span>B </span> {item.answers[1]}
                                </li>
                                <li onClick={(e)=>handleCheckAnswer(item,item.answers[2],e)}>
                                    <span>C </span> {item.answers[2]}
                                </li>
                                <li onClick={(e)=>handleCheckAnswer(item,item.answers[3],e)}>
                                    <span>D </span> {item.answers[3]}
                                </li>
                            </ul>
                        </div>
                    ))
                }

                <section>
                    {
                        currentPage===totalPage
                            ?
                                <Button text="Submeter" click={()=>{setShow(true)}}/>
                            :
                                <Button text="Proximo" click={()=>setCurrentPage(currentPage+1)}/>
                            
                    }   
                </section>
            </main>
            <Footer/>
            <ModalAppearance 
                show={show} 
                toggle={toggle}
                score={score}
                answered={answeredQuestions}
                total={data.length}
            />
        </div>
    )
}

export default Quiz;