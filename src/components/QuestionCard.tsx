import React from 'react';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = (props) => {
    const { question, answers, callback, userAnswer, questionNumber, totalQuestions } = props;
    return (
        <div>
            <p className="number">{questionNumber} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{ __html: question}}/>
            <div>
                {answers.map((answer, index) => (
                    <div>
                        <button disabled={userAnswer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer}}></span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard;