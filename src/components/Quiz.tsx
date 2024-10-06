import Question from "./Question";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Quiz: React.FC = () => {
  const questions = [
      {
          question: "What's your main motivation for exploring Linux?",
          options: ["Curiosity and learning", "Privacy and security", "Software development", "Gaming", "Breathing new life into old hardware"],
      },
      {
          question: "How do you feel about using a command line interface?",
          options: ["Excited to learn", "A bit nervous but willing to try", "Prefer to avoid it if possible", "What's a command line?"],
          contextLink: {
            text: "What is a command line?",
            url: "https://www.freecodecamp.org/news/command-line-for-beginners/"
          }
      },
      {
          question: "What kind of user interface would make you feel most at home?",
          options: ["Similar to Windows", "Similar to macOS", "Simple and straightforward", "Highly customizable", "I'm open to trying something new"],
          contextLink: {
            text: "UNIX Customization Exhibit",
            url: "https://www.reddit.com/r/unixporn/"
          }
      },
      {
          question: "How do you feel about software updates?",
          options: ["I like having the latest features ASAP", "I prefer stability over new features", "I'd like a balance of both", "I'd rather not think about updates"]
      },
      {
          question: "Do you plan to use your system for any kind of programming or development?",
          options: ["Yes, it's my main focus", "I dabble in coding occasionally", "No, but I might in the future", "Not at all"]
      },
      {
          question: "What types of applications do you use most often?",
          options: ["Office and productivity tools", "Creative software (graphics, video, audio)", "Web browsing and communication", "Games", "Development tools"]
      },
      {
          question: "How important is it that your current hardware works out of the box?",
          options: ["Very important - I need everything to work immediately", "I can handle some minor tweaks", "I'm willing to spend time on hardware compatibility", "I'm planning to buy Linux-compatible hardware"]
      },
      {
          question: "How do you feel about community support and forums?",
          options: ["I love being part of a community", "I prefer official support channels", "I'm okay with both", "I'd rather figure things out on my own"]
      },
      {
          question: "What's your stance on system customization?",
          options: ["I want to tweak every aspect", "Some basic customization is nice", "I prefer a polished default experience", "I'm not sure yet"]
      },
      {
          question: "How would you describe your overall tech-savviness?",
          options: ["I'm a tech guru", "I'm comfortable with technology", "I can handle the basics", "I often need help with tech"]
      },
      {
          question: "How do you prefer to install new software?",
          options: ["Through a graphical app store", "Using the command line", "I don't mind either way", "I'd like to avoid installing extra software if possible"]
      },
      {
          question: "How much do you care about your system's resource usage?",
          options: ["I want the lightest system possible", "I care, but it's not my top priority", "I have powerful hardware, so I'm not too concerned", "I don't really think about it"]
      },
      {
          question: "What's your take on privacy features?",
          options: ["Privacy is my top concern", "I appreciate good privacy features", "I'm not too worried about it", "I don't know much about privacy features"]
      },
      {
          question: "Do you plan to use your Linux system for gaming?",
          options: ["Yes, I'm a serious gamer", "Occasionally", "No, I game on other platforms", "I'm not into gaming"]
      },
      {
          question: "How do you feel about troubleshooting and fixing issues?",
          options: ["I enjoy the challenge", "I can handle it if I have good resources", "I'd prefer to avoid it", "The thought makes me anxious"]
      },
      {
          question: "What's your preferred update cycle for the operating system?",
          options: ["I want constant updates (rolling release)", "I prefer less frequent, stable updates", "I don't have a preference", "What's a release cycle?"]
      },
      {
          question: "How important is the philosophy of open-source to you?",
          options: ["It's crucial - I want a fully open-source system", "I appreciate open-source but can use proprietary software", "I don't have a strong opinion on this", "I'm not familiar with open-source philosophy"]
      },
      {
          question: "What's your comfort level with reading documentation or guides?",
          options: ["I love diving into technical docs", "I can follow guides if they're clear", "I prefer video tutorials", "I'd rather not have to read documentation"]
      },
      {
          question: "How much time are you willing to invest in learning your new system?",
          options: ["As much as it takes - I love learning", "A few hours a week", "I'd prefer minimal learning time", "I want it to just work out of the box"]
      },
      {
          question: "What's your stance on contributing back to the community (e.g., bug reports, helping others)?",
          options: ["I'm excited to contribute", "I'll help if it's easy to do so", "I prefer to be a passive user", "I hadn't considered this before"]
      }
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