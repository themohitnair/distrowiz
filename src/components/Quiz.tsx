import Question from "./Question";
import { Link } from "react-router-dom";

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
            options: ["I prefer the latest features", "Stability is more important", "I want a balance of both", "I’m not sure"]
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
            options: ["Very important", "Somewhat important", "Not important", "I don’t know much about it"]
        },
        {
            question: "Are you planning to use your Linux system for gaming?",
            options: ["Yes, I play frequently", "Sometimes", "No, not at all", "Not sure"]
        },
        {
            question: "How often do you encounter technical issues with your current OS?",
            options: ["Very often", "Occasionally", "Rarely", "Never"]
        },
        {
            question: "Do you want to learn more about the technical side of Linux?",
            options: ["Yes, I want to learn everything", "Maybe a little", "Not really", "Not interested"]
        },
        {
            question: "Would you prefer a distribution that has a long-term support cycle?",
            options: ["Yes, I want updates for years", "No, I prefer the latest versions", "I’m not sure", "Doesn't matter"]
        },
    ];

    return (
        <div className="quiz">
            {questions.map((q, index) => (
                <Question key={index} question={q.question} options={q.options} />
            ))}
            <div className="submit w-full mt-10 flex justify-center items-center">
                <Link to="/results" className="w-3/4 rounded-sm border text-center border-sm px-5 py-2 hover:bg-white hover:text-black mb-20">
                    Submit
                </Link>
            </div>
        </div>
    );
}

export default Quiz