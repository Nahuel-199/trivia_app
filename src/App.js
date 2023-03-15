import { useState } from "react";
import Trivia from "./componentes/Trivia";
import Start from "./componentes/Start";
import Timer from "./componentes/Timer";
import "./app.css";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question:
        "¿En que pelicula de Marvel aparece el hombre araña por primera vez?",
      answers: [
        {
          text: "Civil war",
          correct: false,
        },
        {
          text: "Iron Man",
          correct: true,
        },
        {
          text: "Avengers End Game",
          correct: false,
        },
        {
          text: "Hombre araña",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "¿En que pelicula aparece una niña llamada BOO?",
      answers: [
        {
          text: "Monster Inc",
          correct: true,
        },
        {
          text: "Toy Story",
          correct: false,
        },
        {
          text: "Nemo",
          correct: false,
        },
        {
          text: "Valiente",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "¿En que pelicula se pierde un pez?",
      answers: [
        {
          text: "Tiburon",
          correct: false,
        },
        {
          text: "Titanic",
          correct: false,
        },
        {
          text: "Los bañeros",
          correct: false,
        },
        {
          text: "Nemo",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "¿Quien es mas fuerte en Dragon Ball Z?",
      answers: [
        {
          text: "Vegeta",
          correct: false,
        },
        {
          text: "Piccoro",
          correct: false,
        },
        {
          text: "Gohan",
          correct: false,
        },
        {
          text: "Goku",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question:
        "¿Cual es la transformación de goku que tiene el pelo mas largo?",
      answers: [
        {
          text: "SSJ(F1)",
          correct: false,
        },
        {
          text: "SSJ(F2)",
          correct: false,
        },
        {
          text: "Ultra instinto",
          correct: false,
        },
        {
          text: "SSJ(F3)",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "¿En que anime se mata gente con una libreta?",
      answers: [
        {
          text: "One Piece",
          correct: false,
        },
        {
          text: "HunterxHunter",
          correct: false,
        },
        {
          text: "Death Note",
          correct: true,
        },
        {
          text: "Demon Slayer",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "¿Que personaje es verde en Dragon Ball?",
      answers: [
        {
          text: "Piccoro",
          correct: true,
        },
        {
          text: "Frezzer",
          correct: false,
        },
        {
          text: "Trunks",
          correct: false,
        },
        {
          text: "Radits",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "¿Cuantas esferas de dragon hay en Dragon Ball Z?",
      answers: [
        {
          text: "4",
          correct: false,
        },
        {
          text: "7",
          correct: true,
        },
        {
          text: "8",
          correct: false,
        },
        {
          text: "12",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "¿En que anime matan demonios?",
      answers: [
        {
          text: "Tokio Revengers",
          correct: false,
        },
        {
          text: "Digimon",
          correct: false,
        },
        {
          text: "Pokemon",
          correct: false,
        },
        {
          text: "Demon Slayer",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "¿De que color es pikachu?",
      answers: [
        {
          text: "Rojo",
          correct: false,
        },
        {
          text: "Naranja",
          correct: false,
        },
        {
          text: "Amarillo",
          correct: true,
        },
        {
          text: "Azul",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "¿En que pelicula las mascotas hablan?",
      answers: [
        {
          text: "ToyStory",
          correct: false,
        },
        {
          text: "Naruto",
          correct: false,
        },
        {
          text: "Mascotas",
          correct: true,
        },
        {
          text: "Cars",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question:
        "¿En que anime el personaje principal tiene el color de pelo amarillo?",
      answers: [
        {
          text: "Blech",
          correct: false,
        },
        {
          text: "One Piece",
          correct: false,
        },
        {
          text: "Pokemon",
          correct: false,
        },
        {
          text: "Naruto",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question:
        "¿En Naruto Shippuden a que personaje le dice Madara que es el mas fuerte?",
      answers: [
        {
          text: "Kakashi",
          correct: false,
        },
        {
          text: "Sakura",
          correct: false,
        },
        {
          text: "Guy",
          correct: true,
        },
        {
          text: "Naruto",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "¿Quien mata a Itachi Uchiha?",
      answers: [
        {
          text: "Naruto",
          correct: false,
        },
        {
          text: "Madara",
          correct: false,
        },
        {
          text: "Sasuke",
          correct: false,
        },
        {
          text: "Muere porque el quiere sino nadie lo mata",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "¿Como se llama la aldea donde vive Naruto?",
      answers: [
        {
          text: "Aldea de la hoja",
          correct: true,
        },
        {
          text: "Aldea de la niebla",
          correct: false,
        },
        {
          text: "Aldea del fuego",
          correct: false,
        },
        {
          text: "Aldea del viento",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = [
    { id: 1, amount: "$100" },
    { id: 2, amount: "$200" },
    { id: 3, amount: "$400" },
    { id: 4, amount: "$600" },
    { id: 5, amount: "$800" },
    { id: 6, amount: "$1000" },
    { id: 7, amount: "$1200" },
    { id: 8, amount: "$1400" },
    { id: 9, amount: "$1700" },
    { id: 10, amount: "$2000" },
    { id: 11, amount: "$2500" },
    { id: 12, amount: "$3000" },
    { id: 13, amount: "$3500" },
    { id: 14, amount: "$4000" },
    { id: 15, amount: "$5000" },
  ].reverse();

  const restar = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <>
                <button className="button_main" onClick={restar}>
                  Reiniciar
                </button>
                <h1 className="endText">Te ganaste: {earned}</h1>
              </>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m, index) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                  key={index}
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
