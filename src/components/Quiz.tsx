import Question from "./Question";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Quiz: React.FC = () => {
  const questions = [
      {
          question: "What's your main motivation for exploring Linux?",
          options: ["Curiosity and learning", "Privacy and security", "Software development", "Gaming", "Breathing new life into old hardware"],
          contextLink: {
            text: "How does Linux breathe life into old hardware?",
            url: "https://medium.com/@journalehsan/your-system-fliywhy-linux-suits-modest-hardware-but-isnt-a-miracle-worker-01a5b8e591ee"
          }
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
          options: ["I like having the latest features ASAP", "I prefer stability over new features", "I'd like a balance of both", "I'd rather not think about updates"],
          contextLink: {
            text: "Stability in Linux Distributions",
            url: "https://unix.stackexchange.com/questions/634710/what-does-it-mean-for-a-linux-distribution-to-be-stable-and-how-much-does-it-mat"
          }
      },
      {
          question: "Do you plan to use your system for any kind of programming or development?",
          options: ["Yes, it's my main focus", "I dabble in coding occasionally", "No, but I might in the future", "Not at all"],
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
          options: ["I love being part of a community", "I prefer official support channels", "I'm okay with both", "I'd rather figure things out on my own"],
          contextLink: {
            text: "Subreddit sizes for major Linux distributions",
            url: "https://www.reddit.com/r/linux/comments/1fn63sr/updated_chart_of_distro_subreddits_by_member/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
          }
      },
      {
          question: "What's your stance on system customization?",
          options: ["I want to tweak every aspect", "Some basic customization is nice", "I prefer a polished default experience", "I'm not sure yet"],
      },
      {
          question: "How would you describe your overall tech-savviness?",
          options: ["I'm a tech guru", "I'm comfortable with technology", "I can handle the basics", "I often need help with tech"]
      },
      {
          question: "How do you prefer to install new software?",
          options: ["Through a graphical app store", "Using the command line", "I don't mind either way", "I'd like to avoid installing extra software if possible"],
          contextLink: {
            text: "What is a package manager?",
            url: "https://itsfoss.com/package-manager/"
          }
      },
      {
          question: "How much do you care about your system's resource usage?",
          options: ["I want the lightest system possible", "I care, but it's not my top priority", "I have powerful hardware, so I'm not too concerned", "I don't really think about it"],
          contextLink: {
            text: "What makes Linux so lightweight?",
            url: "https://www.reddit.com/r/linux/comments/112ptg/what_is_it_exactly_that_makes_linux_so_lightweight/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
          }

      },
      {
          question: "What's your take on privacy features?",
          options: ["Privacy is my top concern", "I appreciate good privacy features", "I'm not too worried about it", "I don't know much about privacy features"],
          contextLink: {
            text: "Privacy and Linux",
            url: "https://www.makeuseof.com/privacy-benefits-of-using-linux/"
          }
      },
      {
          question: "Do you plan to use your Linux system for gaming?",
          options: ["Yes, I'm a serious gamer", "Occasionally", "No, I game on other platforms", "I'm not into gaming"],
          contextLink: {
            text: "Gaming on Linux",
            url: "https://itsfoss.com/linux-gaming-guide/"
          }
      },
      {
          question: "How do you feel about troubleshooting and fixing issues?",
          options: ["I enjoy the challenge", "I can handle it if I have good resources", "I'd prefer to avoid it", "The thought makes me anxious"]
      },
      {
          question: "What's your preferred update cycle for the operating system?",
          options: ["I want constant updates (rolling release)", "I prefer less frequent, stable updates", "I don't have a preference", "What's a release cycle?"],
          contextLink: {
            text: "What is rolling release?",
            url: "https://itsfoss.com/rolling-release/"
          }
      },
      {
          question: "How important is the philosophy of open-source to you?",
          options: ["It's crucial - I want a fully open-source system", "I appreciate open-source but can use proprietary software", "I don't have a strong opinion on this", "I'm not familiar with open-source philosophy"],
          contextLink: {
            text: "What is open source?",
            url: "https://opensource.com/resources/what-open-source"
          }
      },
      {
          question: "What's your comfort level with reading documentation or guides?",
          options: ["I love diving into technical docs", "I can follow guides if they're clear", "I prefer video tutorials", "I'd rather not have to read documentation"],
      },
      {
          question: "How much time are you willing to invest in learning your new system?",
          options: ["As much as it takes - I love learning", "A few hours a week", "I'd prefer minimal learning time", "I want it to just work out of the box"],
          contextLink: {
            text: "Your Linux Journey",
            url: "https://linuxjourney.com/"
          }
      },
      {
          question: "What's your stance on contributing back to the community (e.g., bug reports, helping others)?",
          options: ["I'm excited to contribute", "I'll help if it's easy to do so", "I prefer to be a passive user", "I hadn't considered this before"],
          contextLink: {
            text: "How you can contribute to Linux",
            url: "https://www.linux.com/news/three-ways-beginners-contribute-linux-kernel/"
          }
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
                <Question key={index} question={q.question} options={q.options} selectedOptions={answers[index]} onSelect={(option: string) => handleOptionSelect(index, option)} contextLink={q.contextLink}/>
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
  const distros = [
    "Arch", "Ubuntu", "Fedora", "Kali", "Mint", "Debian", 
    "PopOS", "Manjaro", "NixOS", "Gentoo", "ElementaryOS", 
    "CentOS", "Endeavour", "Zorin", "Suse", "Void"
  ];

  const scores: Record<string, number> = Object.fromEntries(distros.map(distro => [distro, 0]));
  const maxScores: Record<string, number> = Object.fromEntries(distros.map(distro => [distro, 0]));

  const scoreMultiplier = (baseWeight: number, scalingFactor: number) => baseWeight * scalingFactor;

  answers.forEach((answerSet, questionIndex) => {
    answerSet.forEach(answer => {
      const addScore = (distro: string, weight: number) => {
        if (distros.includes(distro)) {
          scores[distro] += weight;
          maxScores[distro] += weight;
        }
      };

      switch (questionIndex) {
        case 0: // Motivation
          if (answer.includes("Curiosity")) addScore("Ubuntu", scoreMultiplier(1.5, 1.1)), addScore("Mint", 1.0);
          if (answer.includes("Privacy")) addScore("Debian", 1.8), addScore("Kali", 2.2);
          if (answer.includes("development")) addScore("Fedora", 1.8), addScore("Arch", scoreMultiplier(2.0, 1.3));
          if (answer.includes("Gaming")) addScore("PopOS", 2.0), addScore("Manjaro", 1.8);
          if (answer.includes("old hardware")) addScore("Void", 2.0), addScore("Debian", 1.6);
          break;
        case 1: // Command line comfort
          if (answer.includes("Excited")) addScore("Arch", 2.2), addScore("Gentoo", 2.5);
          if (answer.includes("nervous")) addScore("Ubuntu", 1.5), addScore("Mint", 1.8);
          if (answer.includes("avoid")) addScore("ElementaryOS", 1.8), addScore("Zorin", 1.6);
          break;
        case 2: // UI preferences
          if (answer.includes("Windows")) addScore("Zorin", 2.0), addScore("Mint", 1.8);
          if (answer.includes("macOS")) addScore("ElementaryOS", 2.2);
          if (answer.includes("Simple")) addScore("Mint", 1.6), addScore("Ubuntu", 1.5);
          if (answer.includes("customizable")) addScore("Arch", 2.0), addScore("Manjaro", 1.8);
          break;
        case 3: // Software updates
          if (answer.includes("latest features")) addScore("Arch", 2.3), addScore("Fedora", 1.9);
          if (answer.includes("stability")) addScore("Debian", 2.0), addScore("CentOS", 1.8);
          if (answer.includes("balance")) addScore("Ubuntu", 1.6), addScore("Manjaro", 1.7);
          break;
        case 4: // Programming
          if (answer.includes("main focus")) addScore("Fedora", 2.1), addScore("Arch", 2.3);
          if (answer.includes("dabble")) addScore("Ubuntu", 1.7), addScore("PopOS", 1.8);
          break;
        case 5: // Application usage
          if (answer.includes("Office")) addScore("Ubuntu", 1.6), addScore("Mint", 1.7);
          if (answer.includes("Creative")) addScore("Ubuntu", 1.8), addScore("Fedora", 1.5);
          if (answer.includes("Games")) addScore("PopOS", 2.1), addScore("Manjaro", 1.9);
          break;
        case 6: // Hardware compatibility
          if (answer.includes("Very important")) addScore("Ubuntu", 1.8), addScore("Mint", 1.6);
          if (answer.includes("minor tweaks")) addScore("Fedora", 1.6), addScore("PopOS", 1.8);
          break;
        case 7: // Community support
          if (answer.includes("love community")) addScore("Ubuntu", 1.9), addScore("Arch", 2.0);
          if (answer.includes("official support")) addScore("Suse", 1.8);
          break;
        case 8: // Customization
          if (answer.includes("tweak every aspect")) addScore("Arch", 2.5), addScore("Gentoo", 2.8);
          break;
        case 9: // Tech-savviness
          if (answer.includes("tech guru")) addScore("Arch", 2.5), addScore("Gentoo", 2.8);
          break;
        case 10: // Software installation
          if (answer.includes("graphical app store")) addScore("Ubuntu", 1.8), addScore("PopOS", 1.7);
          break;
        case 11: // Resource usage
          if (answer.includes("lightest system")) addScore("Void", 2.3), addScore("Arch", 1.8);
          break;
        case 12: // Privacy
          if (answer.includes("Privacy is top")) addScore("Kali", 2.6), addScore("Debian", 2.0);
          break;
        case 13: // Gaming
          if (answer.includes("serious gamer")) addScore("PopOS", 2.2), addScore("Manjaro", 2.0);
          break;
        case 14: // Troubleshooting
          if (answer.includes("enjoy challenge")) addScore("Arch", 2.5), addScore("Gentoo", 2.8);
          break;
        case 15: // Update cycle
          if (answer.includes("constant updates")) addScore("Arch", 2.3), addScore("Manjaro", 2.1);
          break;
        case 16: // Open-source philosophy
          if (answer.includes("crucial")) addScore("Debian", 2.2), addScore("Fedora", 2.0);
          break;
        case 17: // Reading documentation
          if (answer.includes("love diving")) addScore("Arch", 2.5), addScore("Gentoo", 2.8);
          break;
        case 18: // Time investment
          if (answer.includes("As much as it takes")) addScore("Arch", 2.5), addScore("Gentoo", 2.8);
          break;
        case 19: // Community contribution
          if (answer.includes("excited to contribute")) addScore("Fedora", 2.2), addScore("Debian", 2.0);
          break;
      }
    });
  });

  distros.forEach(distro => {
    if (maxScores[distro] > 0) {
      scores[distro] = (scores[distro] / maxScores[distro]) * 100;
    }
  });

  return scores;
}


export default Quiz