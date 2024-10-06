import Question from "./Question";
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
    const [answers, setAnswers] = useState<string[][]>(new Array(questions.length).fill([]));

    const handleOptionSelect = (questionIndex: number, selectedOption: string) => {
        const newAnswers = [...answers];
        const currentAnswers = newAnswers[questionIndex];
        
        if (currentAnswers.includes(selectedOption)) {
            newAnswers[questionIndex] = currentAnswers.filter(option => option !== selectedOption);
        } else {
            newAnswers[questionIndex] = [...currentAnswers, selectedOption];
        }
        
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        if (answers.some(answer => answer.length === 0)) {
            alert('Please answer all questions before submitting.');
            return;
        }

        const scores = calculateScores(answers);
        const highestScore = Math.max(...Object.values(scores));
        const topDistros = Object.entries(scores)
            .filter(([_, score]) => score === highestScore)
            .map(([distro, _]) => distro);

        console.log(scores);

        navigate('/results', { state: { topDistros } });
    };

    return (
        <div className="quiz">
            {questions.map((q, index) => (
                <Question key={index} question={q.question} options={q.options} selectedOptions={answers[index]} onSelect={(option: string) => handleOptionSelect(index, option)}/>
            ))}
            <div className="submit w-full mt-10 flex justify-center items-center">
                <button onClick={handleSubmit} className="w-full md:w-3/4 rounded-sm border text-center border-sm px-5 py-2 hover:bg-white hover:text-black mb-20">
                    Submit
                </button>
            </div>
        </div>
    );
};

function calculateScores(answers: string[][]): Record<string, number> {
  const distros = ["Arch", "Ubuntu", "Fedora", "Kali", "Mint", "Debian", "PopOS", "Manjaro", "NixOS", "Gentoo", "ElementaryOS", "CentOS", "Endeavour", "Zorin", "Suse"];
    
  const scores: Record<string, number> = distros.reduce((acc, distro) => {
      acc[distro] = 0;
      return acc;
  }, {} as Record<string, number>);

  answers.forEach((answerSet, index) => {
      const scoreIncrement = 2 / answerSet.length;

      answerSet.forEach((answer) => {
          switch (index) {
              case 0:
                  if (answer === "Learning") scores.Ubuntu += scoreIncrement, scores.Mint += scoreIncrement;
                  if (answer === "Development") scores.Fedora += scoreIncrement, scores.PopOS += scoreIncrement;
                  if (answer === "Gaming") scores.Manjaro += scoreIncrement, scores.PopOS += scoreIncrement;
                  if (answer === "Privacy/Security") scores.Kali += scoreIncrement, scores.Debian += scoreIncrement;
                  break;
              case 1: 
                  if (answer === "Very comfortable") scores.Arch += scoreIncrement, scores.Gentoo += scoreIncrement;
                  if (answer === "Not comfortable" || answer === "I have never used one") scores.Ubuntu += scoreIncrement, scores.Mint += scoreIncrement;
                  break;
              case 2:
                  if (answer === "Simple and clean") scores.ElementaryOS += scoreIncrement;
                  if (answer === "Feature-rich and customizable") scores.Manjaro += scoreIncrement;
                  if (answer === "Similar to Windows") scores.Zorin += scoreIncrement, scores.Mint += scoreIncrement;
                  if (answer === "Similar to macOS") scores.ElementaryOS += scoreIncrement;
                  break;
              case 3:
                  if (answer === "Daily" || answer === "Weekly") scores.Arch += scoreIncrement, scores.Fedora += scoreIncrement;
                  if (answer === "Monthly" || answer === "I prefer stability over new features") scores.Ubuntu += scoreIncrement, scores.Debian += scoreIncrement;
                  break;
              case 4: 
                  if (answer === "Yes, I need many tools") scores.Fedora += scoreIncrement, scores.Ubuntu += scoreIncrement;
                  break;
              case 5: 
                  if (answer === "Office applications") scores.Ubuntu += scoreIncrement, scores.Mint += scoreIncrement;
                  if (answer === "Creative software (graphics, video)") scores.Ubuntu += scoreIncrement, scores.Fedora += scoreIncrement;
                  if (answer === "Programming tools") scores.Fedora += scoreIncrement, scores.PopOS += scoreIncrement;
                  if (answer === "Gaming") scores.Manjaro += scoreIncrement, scores.PopOS += scoreIncrement;
                  break;
              case 6:
                  if (answer === "Yes, a printer or scanner") scores.Ubuntu += scoreIncrement, scores.Mint += scoreIncrement;
                  if (answer === "Yes, gaming hardware") scores.Manjaro += scoreIncrement, scores.PopOS += scoreIncrement;
                  break;
              case 7:
                  if (answer === "Very important") scores.Ubuntu += scoreIncrement, scores.Arch += scoreIncrement;
                  if (answer === "I prefer official support") scores.Ubuntu += scoreIncrement, scores.Fedora += scoreIncrement;
                  break;
              case 8: 
                  if (answer === "I prefer the latest features") scores.Arch += scoreIncrement, scores.Fedora += scoreIncrement;
                  if (answer === "Stability is more important") scores.Debian += scoreIncrement, scores.Ubuntu += scoreIncrement;
                  break;
              case 9: 
                  if (answer === "Yes, I want full control") scores.Arch += scoreIncrement, scores.Gentoo += scoreIncrement;
                  if (answer === "No, I want it to work out of the box") scores.Ubuntu += scoreIncrement, scores.Mint += scoreIncrement;
                  break;
              case 10:
                  if (answer === "Beginner") scores.Ubuntu += scoreIncrement, scores.Mint += scoreIncrement;
                  if (answer === "Expert") scores.Arch += scoreIncrement, scores.Gentoo += scoreIncrement;
                  break;
              case 11:
                  if (answer === "Yes, I want everything ready") scores.Ubuntu += scoreIncrement, scores.Mint += scoreIncrement;
                  if (answer === "No, I prefer to choose myself") scores.Arch += scoreIncrement, scores.Gentoo += scoreIncrement;
                  break;
              case 12:
                  if (answer === "Yes, I need many options") scores.Ubuntu += scoreIncrement, scores.Fedora += scoreIncrement;
                  if (answer === "No, I prefer simplicity") scores.ElementaryOS += scoreIncrement;
                  break;
              case 13:
                  if (answer === "Very important") scores.Kali += scoreIncrement, scores.Debian += scoreIncrement;
                  break;
              case 14: 
                  if (answer === "Yes, I play frequently") scores.Manjaro += scoreIncrement, scores.PopOS += scoreIncrement;
                  break;
              case 15: 
                  if (answer === "I prefer traditional package managers") scores.Debian += scoreIncrement, scores.Ubuntu += scoreIncrement;
                  if (answer === "I like newer technologies like Flatpak/Snap") scores.Fedora += scoreIncrement, scores.PopOS += scoreIncrement;
                  if (answer === "I want to compile from source") scores.Gentoo += scoreIncrement;
                  break;
              case 16:
                  if (answer === "Rolling release") scores.Arch += scoreIncrement, scores.Manjaro += scoreIncrement;
                  if (answer === "Fixed release") scores.Ubuntu += scoreIncrement, scores.Debian += scoreIncrement;
                  break;
              case 17:
                  if (answer === "Very important") scores.Debian += scoreIncrement, scores.Fedora += scoreIncrement;
                  break;
          }
      });
  });

  return scores;
}

export default Quiz