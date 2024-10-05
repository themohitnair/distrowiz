import React from 'react';

interface QuestionProps {
    question: string;
    options: string[];
    selectedOption: string | null;
    onSelect: (option: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, selectedOption, onSelect }) => {
    return (
        <div className="question border border-white px-3 py-5 mt-10 w-full md:w-4/5 lg:w-3/4 m-auto rounded-sm">
            <div className="text-2xl">
                {question}
            </div>
            <ul className="pt-5">
                {options.map((option, index) => (
                    <li 
                        key={index} 
                        className={`option border-white text-lg md:text-xl rounded-sm border mt-3 px-3 py-2 hover:bg-white hover:text-black cursor-pointer ${selectedOption === option ? 'bg-white text-black' : ''}`}
                        onClick={() => onSelect(option)}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Question;