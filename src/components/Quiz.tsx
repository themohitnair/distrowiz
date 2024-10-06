import Question from "./Question"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Points from "./Points"

const Quiz: React.FC = () => {
  const questions = [
    {
      question: "What's your main motivation for exploring Linux?",
      options: [
        "Curiosity and learning",
        "Privacy and security",
        "Software development",
        "Gaming",
        "Reviving old hardware",
      ],
      contextLink: {
        text: "Linux on old hardware",
        url: "https://medium.com/@journalehsan/your-system-fliywhy-linux-suits-modest-hardware-but-isnt-a-miracle-worker-01a5b8e591ee",
      },
    },
    {
      question: "How comfortable are you with the command line?",
      options: [
        "Excited to learn",
        "A bit nervous but willing",
        "Prefer graphical tools",
        "No idea what it is",
      ],
      contextLink: {
        text: "Introduction to command line",
        url: "https://www.freecodecamp.org/news/command-line-for-beginners/",
      },
    },
    {
      question: "What's your priority for system updates?",
      options: [
        "Latest features ASAP",
        "Stability over new features",
        "Balanced approach",
        "Don't want to think about updates",
      ],
      contextLink: {
        text: "Stable vs rolling updates",
        url: "https://unix.stackexchange.com/questions/634710/what-does-it-mean-for-a-linux-distribution-to-be-stable-and-how-much-does-it-mat",
      },
    },
    {
      question: "Do you plan to use your system for programming?",
      options: [
        "Yes, it's my main focus",
        "Occasionally for side projects",
        "No, but maybe in the future",
        "Not at all",
      ],
    },
    {
      question: "What kind of applications do you need most?",
      options: [
        "Office tools and productivity",
        "Creative software (graphics, audio, video)",
        "Browsing and communication",
        "Games",
        "Development tools",
      ],
    },
    {
      question: "How important is hardware compatibility?",
      options: [
        "Crucial - everything should work out-of-the-box",
        "Some tweaks are fine",
        "I'm willing to spend time on compatibility",
        "I'm buying Linux-compatible hardware",
      ],
    },
    {
      question: "How do you feel about community support?",
      options: [
        "I love community engagement",
        "Official support is preferred",
        "Okay with both",
        "I'd rather figure things out alone",
      ],
      contextLink: {
        text: "Linux community support",
        url: "https://www.reddit.com/r/linux/comments/1fn63sr/updated_chart_of_distro_subreddits_by_member/",
      },
    },
    {
      question: "What level of system customization do you expect?",
      options: [
        "I want complete control",
        "Basic customization is fine",
        "Prefer polished default experience",
        "Not sure yet",
      ],
    },
    {
      question: "How tech-savvy are you?",
      options: [
        "I'm a tech expert",
        "I'm comfortable with technology",
        "I can handle basics",
        "I need help with tech",
      ],
    },
    {
      question: "How do you prefer to install software?",
      options: [
        "Graphical app store",
        "Command line",
        "No strong preference",
        "Avoid installing extra software",
      ],
      contextLink: {
        text: "Package managers explained",
        url: "https://itsfoss.com/package-manager/",
      },
    },
    {
      question: "How important is low resource usage?",
      options: [
        "Top priority - needs to be lightweight",
        "Important, but not critical",
        "My hardware is powerful, so less concerned",
        "Not a concern at all",
      ],
      contextLink: {
        text: "What makes Linux lightweight?",
        url: "https://www.reddit.com/r/linux/comments/112ptg/what_is_it_exactly_that_makes_linux_so_lightweight/",
      },
    },
    {
      question: "What's your take on privacy?",
      options: [
        "Privacy is top priority",
        "Good privacy features are important",
        "Not too worried about privacy",
        "Don't know much about privacy features",
      ],
      contextLink: {
        text: "Privacy in Linux",
        url: "https://www.makeuseof.com/privacy-benefits-of-using-linux/",
      },
    },
    {
      question: "Do you plan to game on Linux?",
      options: [
        "Yes, I'm a serious gamer",
        "Occasionally",
        "No, I game elsewhere",
        "I'm not into gaming",
      ],
      contextLink: {
        text: "Gaming on Linux guide",
        url: "https://itsfoss.com/linux-gaming-guide/",
      },
    },
    {
      question: "How do you feel about troubleshooting issues?",
      options: [
        "Enjoy the challenge",
        "Can handle it with good resources",
        "Prefer to avoid it",
        "Makes me anxious",
      ],
    },
    {
      question: "What's your preference for updates?",
      options: [
        "Rolling updates (constant new features)",
        "Stable releases",
        "No preference",
        "What's a release cycle?",
      ],
      contextLink: {
        text: "Rolling release cycle",
        url: "https://itsfoss.com/rolling-release/",
      },
    },
    {
      question: "How important is open-source philosophy to you?",
      options: [
        "Extremely important - want fully open-source",
        "Appreciate it but can use proprietary too",
        "No strong opinion",
        "Not familiar with open-source philosophy",
      ],
      contextLink: {
        text: "Open-source explained",
        url: "https://opensource.com/resources/what-open-source",
      },
    },
    {
      question: "How comfortable are you with technical documentation?",
      options: [
        "Love reading detailed docs",
        "I can follow clear guides",
        "Prefer video tutorials",
        "Avoid reading docs",
      ],
    },
    {
      question: "How much time are you willing to invest learning Linux?",
      options: [
        "As much as needed",
        "A few hours a week",
        "Prefer minimal learning",
        "Just want it to work out-of-the-box",
      ],
      contextLink: {
        text: "Linux learning journey",
        url: "https://linuxjourney.com/",
      },
    },
    {
      question: "How easy do you want the installation process to be?",
      options: [
        "Very easy and quick",
        "I can manage with good tutorials",
        "Prefer a challenging install",
        "Hadn't considered this",
      ],
    },
  ]

  const navigate = useNavigate()
  const [answers, setAnswers] = useState<string[][]>(
    new Array(questions.length).fill([])
  )

  const handleOptionSelect = (questionIndex: number, selectedOption: string) => {
    const newAnswers = [...answers]
    const currentAnswers = newAnswers[questionIndex]

    if (currentAnswers.includes(selectedOption)) {
      newAnswers[questionIndex] = currentAnswers.filter(
        (option) => option !== selectedOption
      )
    } else {
      newAnswers[questionIndex] = [...currentAnswers, selectedOption]
    }

    setAnswers(newAnswers)
  }

  const handleSubmit = () => {
    if (answers.some((answer) => answer.length === 0)) {
      alert("Please answer all questions before submitting.")
      return
    }

    const scores = calculateScores(answers)
    const highestScore = Math.max(...Object.values(scores))
    const topDistros = Object.entries(scores)
      .filter(([_, score]) => score === highestScore)
      .map(([distro, _]) => distro)

    navigate("/results", { state: { topDistros } })
  }

  return (
    <div className="quiz">
      <Points/>
      {questions.map((q, index) => (
        <Question
          key={index}
          question={q.question}
          options={q.options}
          selectedOptions={answers[index]}
          onSelect={(option: string) => handleOptionSelect(index, option)}
          contextLink={q.contextLink}
        />
      ))}
      <div className="submit w-full mt-10 flex justify-center items-center">
        <button
          onClick={handleSubmit}
          className="w-full md:w-3/4 rounded-sm border text-center border-sm px-5 py-2 hover:bg-white hover:text-black mb-20"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

function calculateScores(answers: string[][]): Record<string, number> {
  const distros = [
    "Arch", "Ubuntu", "Fedora", "Kali", "Mint", "Debian", "PopOS", "Manjaro", 
    "NixOS", "Gentoo", "ElementaryOS", "CentOS", "Endeavour", "Zorin", "Suse", "Void"
  ]

  const scores: Record<string, number> = Object.fromEntries(distros.map(distro => [distro, 0]))

  type ScoringRule = {
    [key: string]: string[]
  }
    
  const scoringRules: ScoringRule[] = [
    // Question 1: Main motivation
    {
      "Curiosity and learning": ["Arch", "Gentoo", "NixOS"],
      "Privacy and security": ["Kali", "Fedora", "Debian"],
      "Software development": ["Ubuntu", "Fedora", "PopOS"],
      "Gaming": ["Manjaro", "PopOS", "Endeavour"],
      "Reviving old hardware": ["Void", "Debian", "Arch"]
    },
    // Question 2: Command line comfort
    {
      "Excited to learn": ["Arch", "Gentoo", "Void"],
      "A bit nervous but willing": ["Ubuntu", "Fedora", "Manjaro"],
      "Prefer graphical tools": ["Mint", "ElementaryOS", "Zorin"],
      "No idea what it is": ["Ubuntu", "Mint", "PopOS"]
    },
    // Question 3: System updates priority
    {
      "Latest features ASAP": ["Arch", "Manjaro", "Fedora"],
      "Stability over new features": ["Debian", "CentOS", "Ubuntu"],
      "Balanced approach": ["Ubuntu", "PopOS", "Fedora"],
      "Don't want to think about updates": ["Mint", "ElementaryOS", "Zorin"]
    },
    // Question 4: Programming plans
    {
      "Yes, it's my main focus": ["Ubuntu", "Fedora", "Arch"],
      "Occasionally for side projects": ["PopOS", "Manjaro", "Mint"],
      "No, but maybe in the future": ["Ubuntu", "Fedora", "Mint"],
      "Not at all": ["ElementaryOS", "Zorin", "Mint"]
    },
    // Question 5: Application needs
    {
      "Office tools and productivity": ["Ubuntu", "Mint", "Fedora"],
      "Creative software (graphics, audio, video)": ["Ubuntu", "Fedora", "PopOS"],
      "Browsing and communication": ["Mint", "ElementaryOS", "Zorin"],
      "Games": ["PopOS", "Manjaro", "Endeavour"],
      "Development tools": ["Arch", "Fedora", "Ubuntu"]
    },
    // Question 6: Hardware compatibility importance
    {
      "Crucial - everything should work out-of-the-box": ["Ubuntu", "Mint", "PopOS"],
      "Some tweaks are fine": ["Fedora", "Manjaro", "Endeavour"],
      "I'm willing to spend time on compatibility": ["Arch", "Gentoo", "Void"],
      "I'm buying Linux-compatible hardware": ["Arch", "NixOS", "Gentoo"]
    },
    // Question 7: Community support preference
    {
      "I love community engagement": ["Arch", "Ubuntu", "Fedora"],
      "Official support is preferred": ["Ubuntu", "Suse", "Fedora"],
      "Okay with both": ["Debian", "Fedora", "Manjaro"],
      "I'd rather figure things out alone": ["Gentoo", "Arch", "Void"]
    },
    // Question 8: System customization expectation
    {
      "I want complete control": ["Arch", "Gentoo", "NixOS"],
      "Basic customization is fine": ["Manjaro", "PopOS", "Fedora"],
      "Prefer polished default experience": ["ElementaryOS", "Zorin", "Mint"],
      "Not sure yet": ["Ubuntu", "Mint", "Fedora"]
    },
    // Question 9: Tech-savviness
    {
      "I'm a tech expert": ["Arch", "Gentoo", "NixOS"],
      "I'm comfortable with technology": ["Fedora", "Manjaro", "PopOS"],
      "I can handle basics": ["Ubuntu", "Mint", "ElementaryOS"],
      "I need help with tech": ["Mint", "Zorin", "ElementaryOS"]
    },
    // Question 10: Software installation preference
    {
      "Graphical app store": ["Ubuntu", "PopOS", "ElementaryOS"],
      "Command line": ["Arch", "Fedora", "Debian"],
      "No strong preference": ["Manjaro", "Mint", "Endeavour"],
      "Avoid installing extra software": ["Debian", "CentOS", "Void"]
    },
    // Question 11: Resource usage importance
    {
      "Top priority - needs to be lightweight": ["Void", "Arch", "Debian"],
      "Important, but not critical": ["Manjaro", "Fedora", "Mint"],
      "My hardware is powerful, so less concerned": ["Ubuntu", "PopOS", "Fedora"],
      "Not a concern at all": ["Ubuntu", "Fedora", "Manjaro"]
    },
    // Question 12: Privacy importance
    {
      "Privacy is top priority": ["Kali", "Fedora", "Debian"],
      "Good privacy features are important": ["Ubuntu", "Fedora", "Debian"],
      "Not too worried about privacy": ["Mint", "PopOS", "ElementaryOS"],
      "Don't know much about privacy features": ["Ubuntu", "Mint", "PopOS"]
    },
    // Question 13: Gaming plans
    {
      "Yes, I'm a serious gamer": ["PopOS", "Manjaro", "Endeavour"],
      "Occasionally": ["Ubuntu", "Mint", "Fedora"],
      "No, I game elsewhere": ["Debian", "CentOS", "Void"],
      "I'm not into gaming": ["Arch", "Gentoo", "NixOS"]
    },
    // Question 14: Troubleshooting attitude
    {
      "Enjoy the challenge": ["Arch", "Gentoo", "Void"],
      "Can handle it with good resources": ["Fedora", "Manjaro", "PopOS"],
      "Prefer to avoid it": ["Ubuntu", "Mint", "ElementaryOS"],
      "Makes me anxious": ["Mint", "Zorin", "ElementaryOS"]
    },
    // Question 15: Update preference
    {
      "Rolling updates (constant new features)": ["Arch", "Manjaro", "Void"],
      "Stable releases": ["Debian", "Ubuntu", "CentOS"],
      "No preference": ["Fedora", "PopOS", "Suse"],
      "What's a release cycle?": ["Ubuntu", "Mint", "PopOS"]
    },
    // Question 16: Open-source philosophy importance
    {
      "Extremely important - want fully open-source": ["Debian", "Fedora", "Arch"],
      "Appreciate it but can use proprietary too": ["Ubuntu", "Manjaro", "PopOS"],
      "No strong opinion": ["Mint", "Zorin", "ElementaryOS"],
      "Not familiar with open-source philosophy": ["Ubuntu", "Mint", "PopOS"]
    },
    // Question 17: Technical documentation comfort
    {
      "Love reading detailed docs": ["Arch", "Gentoo", "NixOS"],
      "I can follow clear guides": ["Fedora", "Ubuntu", "Debian"],
      "Prefer video tutorials": ["Ubuntu", "Mint", "Manjaro"],
      "Avoid reading docs": ["Mint", "Zorin", "ElementaryOS"]
    },
    // Question 18: Time investment willingness
    {
      "As much as needed": ["Arch", "Gentoo", "NixOS"],
      "A few hours a week": ["Fedora", "Manjaro", "PopOS"],
      "Prefer minimal learning": ["Ubuntu", "Mint", "ElementaryOS"],
      "Just want it to work out-of-the-box": ["Mint", "Zorin", "ElementaryOS"]
    },
    // Question 19: Installation process preference
    {
      "Very easy and quick": ["Ubuntu", "Mint", "PopOS"],
      "I can manage with good tutorials": ["Fedora", "Manjaro", "Endeavour"],
      "Prefer a challenging install": ["Arch", "Gentoo", "Void"],
      "Hadn't considered this": ["Ubuntu", "Mint", "ElementaryOS"]
    }
  ]

  answers.forEach((questionAnswers, index) => {
    const rule = scoringRules[index]
    questionAnswers.forEach(answer => {
      const distrosToScore = rule[answer] || []
      distrosToScore.forEach((distro: string) => {
        if (scores.hasOwnProperty(distro)) {
          scores[distro] += 1
        }
      })
    })
  })

  const maxScore = Math.max(...Object.values(scores))
  Object.keys(scores).forEach((distro: string) => { 
    scores[distro] = scores[distro] / maxScore
  })
  console.log(scores)
  return scores 
}

export default Quiz