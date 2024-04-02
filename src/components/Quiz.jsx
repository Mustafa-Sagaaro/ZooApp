import { useState, useEffect } from 'react';
import '../styles/Quiz.css';

const QuizComponent = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([{
        question: "Welches Tier wird auch als Wüstenschiff bezeichnet?",
        choices: ["Kamel", "Esel", "Zebra"],
        answer: "Kamel"
    },
    {
        question: "Welches Tier ist das schnellste Landtier?",
        choices: ["Leopard", "Gepard", "Löwe"],
        answer: "Gepard"
    },
    {
        question: "Welches ist das größte lebende Tier?",
        choices: ["Walhai", "Afrikanischer Elefant", "Blauwal"],
        answer: "Afrikanischer Elefant"
    },
    {
        question: "Wie nennt man ein weibliches Schaf?",
        choices: ["Kuh", "Bulle", "Schaf"],
        answer: "Schaf"
    },
    {
        question: "Welches ist das einzige Tier, das sich selbst im Spiegel erkennen kann?",
        choices: ["Hund", "Delphin", "Schimpanse"],
        answer: "Schimpanse"
    },
    {
        question: "Wie nennt man das Baby eines Fuchses?",
        choices: ["Kätzchen", "Welpe", "Junges"],
        answer: "Junges"
    },
    {
        question: "Wie nennt man die größte Eidechsenart?",
        choices: ["Leguan", "Gecko", "Chamäleon"],
        answer: "Leguan"
    },
    {
        question: "Wie nennt man eine Gruppe von Affen?",
        choices: ["Schule", "Herde", "Troop"],
        answer: "Troop"
    },
    {
        question: "Welches ist das größte Raubtier der Welt?",
        choices: ["Löwe", "Braunbär", "Polarbär"],
        answer: "Polarbär"
    },
    {
        question: "Wie nennt man das Baby eines Krokodils?",
        choices: ["Krokodilbaby", "Krokodiljunges", "Krokodilküken"],
        answer: "Krokodilbaby"
    }]);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        setQuestions(shuffleQuestions(questions));
    }, []);

    const handleAnswer = (choice) => {
        if (choice === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResults(true);
        }
    };

    const restartQuiz = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setQuestions(shuffleQuestions(questions));
        setShowResults(false);
    };

    const shuffleQuestions = (questionsArray) => {
        questionsArray.forEach((question) => {
          question.choices = shuffleArray(question.choices);
        });
        return shuffleArray([...questionsArray]);
      };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };

    return (
        <div className="quiz-container">
            <h1>Tierquiz</h1>
            <h2>Beantworte 10 Fragen um dein Wissen zu testen.</h2>
            {!showResults ? (
                <>
                    <div className="question">{questions[currentQuestionIndex]?.question}</div>
                    <div className="choices">
                        {questions[currentQuestionIndex]?.choices.map((choice, index) => (
                            <button key={index} onClick={() => handleAnswer(choice)}>
                                {choice}
                            </button>
                        ))}
                    </div>
                </>
            ) : (
                <div className="results">
                    Du hast {score} von {questions.length} Fragen richtig beantwortet.
                    <button onClick={restartQuiz}>Quiz Neu Starten</button>
                </div>
            )}
        </div>
    );
};

export default QuizComponent;
