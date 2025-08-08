import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const questions = [
  {
    question: "Who is known as the 'Superstar' of Tamil cinema?",
    options: ["Rajinikanth", "Kamal Haasan", "Ajith Kumar"],
    answer: "Rajinikanth",
  },
  {
    question: "Which was the first Telugu film to gross over ₹100 crores worldwide?",
    options: ["Magadheera", "Baahubali: The Beginning", "Pokiri"],
    answer: "Baahubali: The Beginning",
  },
  {
    question: "Who directed the Malayalam movie 'Drishyam'?",
    options: ["Jeethu Joseph", "Lal Jose", "Priyadarshan"],
    answer: "Jeethu Joseph",
  },
  {
    question: "Which Kannada film became the highest-grossing Kannada movie of all time?",
    options: ["KGF Chapter 1", "Kantara", "Mufti"],
    answer: "KGF Chapter 1",
  },
  {
    question: "In which year was 'Baahubali 2: The Conclusion' released?",
    options: ["2015", "2017", "2019"],
    answer: "2017",
  },
  {
    question: "Who is called 'Ulaganayagan' in Tamil cinema?",
    options: ["Rajinikanth", "Vijay", "Kamal Haasan"],
    answer: "Kamal Haasan",
  },
  {
    question: "Which Malayalam actor is popularly known as 'Lalettan'?",
    options: ["Mammootty", "Mohanlal", "Dulquer Salmaan"],
    answer: "Mohanlal",
  },
  {
    question: "Which Tamil movie gave actor Suriya his breakthrough role?",
    options: ["Nandha", "Ghajini", "Kaakha Kaakha"],
    answer: "Nandha",
  },
  {
    question: "Who directed the Telugu blockbuster 'RRR'?",
    options: ["S. S. Rajamouli", "Trivikram Srinivas", "Sukumar"],
    answer: "S. S. Rajamouli",
  },
  {
    question: "Which Tamil film features the song 'Why This Kolaveri Di'?",
    options: ["3", "Maari", "VIP"],
    answer: "3",
  },
  {
    question: "Which Kannada star is nicknamed 'Rocking Star'?",
    options: ["Yash", "Puneeth Rajkumar", "Darshan"],
    answer: "Yash",
  },


];

const Quiz = ({ setScore, user }) => {


  const [questionIdx, setQuestionIdx] = useState(0)

  const navigator = useNavigate()
  useEffect(() => {
    if (!user) {
      navigator("/")
    }
  }, [user])

  const handleAnswer = (selectedAns) => {
    const isCorrect = selectedAns === questions[questionIdx].answer
    if (isCorrect) {
      setScore(prevScore => prevScore + 1)
    }
    if (questionIdx < questions.length - 1) {
      setQuestionIdx((prevIdx) => prevIdx + 1)
    } else {
      navigator("/result")

    }
  }

  return (
    <div className='items-center text-center bg-blue-500 p-28'>
      <h1 className='text-5xl text-red-700 font-extrabold'>Quiz Page...!</h1>
      <h2 className='text-3xl mt-10 font-bold mb-5 text-red-700'>{questionIdx + 1}.{questions[questionIdx].question}</h2>
      <div className='flex flex-col gap-6'>
        {questions[questionIdx].options.map((option, idx) => (
          <button key={idx} onClick={() => handleAnswer(option)} className="text-lg p-4 bg-white border-2 border-blue-500 rounded-lg shadow hover:bg-blue-100">{option}</button>
        ))}
        <br />

        <a href="./home">
          <button className=' bg-blue-400 rounded-lg px-6 py-2 text-lg font-medium'>Back to Home</button>
        </a>
      </div>

    </div>
  )
}

export default Quiz