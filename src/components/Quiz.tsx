import Question from "./Question";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Quiz: React.FC = () => {
    const questions = [
        {
          question: "What is your primary reason for switching to Linux?",
          options: ["Learning", "Development", "Gaming", "Privacy/Security"]
        },
        {
          question: "How comfortable are you with using a command line?",
          options: ["Very comfortable", "Somewhat comfortable", "Not comfortable", "I have never used one"]
        },
        {
          question: "What type of user interface do you prefer?",
          options: ["Simple and clean", "Feature-rich and customizable", "Similar to Windows", "Similar to macOS"]
        },
        {
          question: "How often do you plan to update your system?",
          options: ["Daily", "Weekly", "Monthly", "I prefer stability over new features"]
        },
        {
          question: "Do you plan to run software for development?",
          options: ["Yes, I need many tools", "Yes, but only a few", "No, just casual use", "Not sure yet"]
        },
        {
          question: "What type of software do you mainly use?",
          options: ["Office applications", "Creative software (graphics, video)", "Programming tools", "Gaming"]
        },
        {
          question: "Do you require support for a specific hardware device?",
          options: ["Yes, a printer or scanner", "Yes, gaming hardware", "No, I have standard hardware", "Not sure"]
        },
        {
          question: "How much do you value community support?",
          options: ["Very important", "Somewhat important", "Not important", "I prefer official support"]
        },
        {
          question: "How do you feel about system stability?",
          options: ["I prefer the latest features", "Stability is more important", "I want a balance of both", "I'm not sure"]
        },
        {
          question: "Are you interested in customizing your OS?",
          options: ["Yes, I want full control", "Yes, but only basic tweaks", "No, I want it to work out of the box", "Not sure"]
        },
        {
          question: "What is your experience level with technology?",
          options: ["Beginner", "Intermediate", "Advanced", "Expert"]
        },
        {
          question: "Would you like your distribution to come with a lot of pre-installed software?",
          options: ["Yes, I want everything ready", "No, I prefer to choose myself", "A mix of both", "Not sure"]
        },
        {
          question: "Do you need access to a wide range of software repositories?",
          options: ["Yes, I need many options", "Somewhat, but I can manage", "No, I prefer simplicity", "Not sure"]
        },
        {
          question: "How do you feel about privacy and security features?",
          options: ["Very important", "Somewhat important", "Not important", "I don't know much about it"]
        },
        {
          question: "Are you planning to use your Linux system for gaming?",
          options: ["Yes, I play frequently", "Sometimes", "No, not at all", "Not sure"]
        },
        {
          question: "How important is package management to you?",
          options: ["I prefer traditional package managers", "I like newer technologies like Flatpak/Snap", "I want to compile from source", "I'm not sure"]
        },
        {
          question: "Do you prefer a rolling release or fixed release cycle?",
          options: ["Rolling release", "Fixed release", "I don't know the difference", "No preference"]
        },
        {
          question: "How important is it for your OS to be fully open-source?",
          options: ["Very important", "Somewhat important", "Not important", "I don't know"]
        },
    ];

    const navigate = useNavigate();
    const [answers, setAnswers] = useState<(string | null)[]>(new Array(questions.length).fill(null));

    const handleOptionSelect = (questionIndex: number, selectedOption: string) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = selectedOption;
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        if (answers.some(answer => answer === null)) {
            alert('Answer all questions before submitting.');
            return;
        }

        const scores = calculateScores(answers);
        const highestScore = Math.max(...Object.values(scores));
        const topDistros = Object.entries(scores)
            .filter(([_, score]) => score === highestScore)
            .map(([distro, _]) => distro);

        console.log(scores)

        navigate('/results', { state: { topDistros } });
    };

    return (
        <div className="quiz">
            {questions.map((q, index) => (
                <Question 
                    key={index} 
                    question={q.question} 
                    options={q.options}
                    selectedOption={answers[index]}
                    onSelect={(option: string) => handleOptionSelect(index, option)}
                />
            ))}
            <div className="submit w-full mt-10 flex justify-center items-center">
                <button onClick={handleSubmit} className="w-3/4 rounded-sm border text-center border-sm px-5 py-2 hover:bg-white hover:text-black mb-20">
                    Submit
                </button>
            </div>
        </div>
    );
};

function calculateScores(answers: (string | null)[]): Record<string, number> {
    const distros = ["Arch", "Ubuntu", "Fedora", "Kali", "Mint", "Debian", "PopOS", "Manjaro", "NixOS", "Gentoo", "ElementaryOS", "CentOS", "Endeavour", "Zorin", "Suse"];
    
    const scores: Record<string, number> = distros.reduce((acc, distro) => {
        acc[distro] = 0;
        return acc;
    }, {} as Record<string, number>);

    answers.forEach((answer, index) => {
        if (answer === null) return;

        switch (index) {
            case 0:
                if (answer === "Learning") scores.Ubuntu += 2, scores.Mint += 2;
                if (answer === "Development") scores.Fedora += 2, scores.PopOS += 2;
                if (answer === "Gaming") scores.Manjaro += 2, scores.PopOS += 2;
                if (answer === "Privacy/Security") scores.Kali += 2, scores.Debian += 2;
                break;
            case 1: 
                if (answer === "Very comfortable") scores.Arch += 2, scores.Gentoo += 2;
                if (answer === "Not comfortable" || answer === "I have never used one") scores.Ubuntu += 2, scores.Mint += 2;
                break;
            case 2:
                if (answer === "Simple and clean") scores.ElementaryOS += 2;
                if (answer === "Feature-rich and customizable") scores.Manjaro += 2;
                if (answer === "Similar to Windows") scores.Zorin += 2, scores.Mint += 2;
                if (answer === "Similar to macOS") scores.ElementaryOS += 2;
                break;
            case 3:
                if (answer === "Daily" || answer === "Weekly") scores.Arch += 2, scores.Fedora += 2;
                if (answer === "Monthly" || answer === "I prefer stability over new features") scores.Ubuntu += 2, scores.Debian += 2;
                break;
            case 4: 
                if (answer === "Yes, I need many tools") scores.Fedora += 2, scores.Ubuntu += 2;
                break;
            case 5: 
                if (answer === "Office applications") scores.Ubuntu += 2, scores.Mint += 2;
                if (answer === "Creative software (graphics, video)") scores.Ubuntu += 2, scores.Fedora += 2;
                if (answer === "Programming tools") scores.Fedora += 2, scores.PopOS += 2;
                if (answer === "Gaming") scores.Manjaro += 2, scores.PopOS += 2;
                break;
            case 6:
                if (answer === "Yes, a printer or scanner") scores.Ubuntu += 2, scores.Mint += 2;
                if (answer === "Yes, gaming hardware") scores.Manjaro += 2, scores.PopOS += 2;
                break;
            case 7:
                if (answer === "Very important") scores.Ubuntu += 2, scores.Arch += 2;
                if (answer === "I prefer official support") scores.Ubuntu += 2, scores.Fedora += 2;
                break;
            case 8: 
                if (answer === "I prefer the latest features") scores.Arch += 2, scores.Fedora += 2;
                if (answer === "Stability is more important") scores.Debian += 2, scores.Ubuntu += 2;
                break;
            case 9: 
                if (answer === "Yes, I want full control") scores.Arch += 2, scores.Gentoo += 2;
                if (answer === "No, I want it to work out of the box") scores.Ubuntu += 2, scores.Mint += 2;
                break;
            case 10:
                if (answer === "Beginner") scores.Ubuntu += 2, scores.Mint += 2;
                if (answer === "Expert") scores.Arch += 2, scores.Gentoo += 2;
                break;
            case 11:
                if (answer === "Yes, I want everything ready") scores.Ubuntu += 2, scores.Mint += 2;
                if (answer === "No, I prefer to choose myself") scores.Arch += 2, scores.Gentoo += 2;
                break;
            case 12:
                if (answer === "Yes, I need many options") scores.Ubuntu += 2, scores.Fedora += 2;
                if (answer === "No, I prefer simplicity") scores.ElementaryOS += 2;
                break;
            case 13:
                if (answer === "Very important") scores.Kali += 2, scores.Debian += 2;
                break;
            case 14: 
                if (answer === "Yes, I play frequently") scores.Manjaro += 2, scores.PopOS += 2;
                break;
            case 15: 
                if (answer === "I prefer traditional package managers") scores.Debian += 2, scores.Ubuntu += 2;
                if (answer === "I like newer technologies like Flatpak/Snap") scores.Fedora += 2, scores.PopOS += 2;
                if (answer === "I want to compile from source") scores.Gentoo += 2;
                break;
            case 16:
                if (answer === "Rolling release") scores.Arch += 2, scores.Manjaro += 2;
                if (answer === "Fixed release") scores.Ubuntu += 2, scores.Debian += 2;
                break;
            case 17:
                if (answer === "Very important") scores.Debian += 2, scores.Fedora += 2;
                break;
        }
    });

    return scores;
}

export default Quiz