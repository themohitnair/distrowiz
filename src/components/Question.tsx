import React from 'react';

interface QuestionProps {
    question: string;
    options: string[];
    selectedOptions: string[];
    onSelect: (option: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, selectedOptions, onSelect }) => {
    return (
        <div className="question border border-white px-3 py-5 mt-10 w-full md:w-4/5 lg:w-3/4 m-auto rounded-sm">
        <div className="text-2xl px-3">
            {question}
        </div>
        <ul className="pt-5">
            {options.map((option, index) => (
            <li key={index} className={`option border-white text-lg md:text-xl rounded-sm border mt-3 px-3 py-2 cursor-pointer transition-all duration-300 ${selectedOptions.includes(option) ? 'bg-white text-black' : ''} hover:scale-105 hover:shadow-lg`} onClick={() => onSelect(option)}>
                {option}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default Question;