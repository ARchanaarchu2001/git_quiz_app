import React, { useState } from 'react'
import Question from '../Quiz/Question'
import quizData from '../../StaticData/Data'

function Home() {
    const [ questions,setQuestions ] = useState(quizData)
  return (
    <main>
        <div className='container'>
            <h3> GIT  - GitHub<br/>Quiz App</h3>
            <section className='info'>{
                questions.map((question) => {
                    return (

               

                <Question  key= {question.id} {...question}/>

                )})
                    }
            </section>
        </div>
    </main>
   
  )
}

export default Home