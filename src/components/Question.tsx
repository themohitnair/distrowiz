interface QuestionProps {
    question: string;
    options: string[]
}

const Question: React.FC<QuestionProps> = ({ question, options }) => {
    return (
        <div className="question border border-white px-5 py-5 mt-10 w-4/5 m-auto rounded-sm text-2xl">
            <div>{question}</div>
            <ul className="pt-5">
                {options.map((option, index) => (
                    <li key={index} className="option border-white text-xl rounded-sm border mt-3 px-3 py-2 hover:bg-white hover:text-black">
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Question