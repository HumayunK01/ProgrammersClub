export interface Event {
  id: string;
  title: string;
  type: string;
  date: string;
  description: string;
  thumbnailImage: string;
  posterImage: string;
  tags: string[];
  startDate: string;
  registrationEnd?: string;
  registrationEndTime?: string;
  entryFees: string;
  venue: {
    name: string;
    note: string;
  };
  incharges: Array<{
    name: string;
  }>;
  registrationLink?: {
    url: string;
    isOpen: boolean;
  };
  teamSize: string;
  certification: {
    provided: boolean;
    type?: string;
  };
  galleryImages?: string[];
  sponsors?: {
    name: string
    logo: string
    website?: string
  }[]
  officialWebsite?: string;
}

export const eventsData: Event[] = [
  // Err_404 6.0
  {
    id: "err_404_6_0",
    title: "Err_404 6.0",
    type: "Hackathon",
    date: "February 15-16, 2025",
    description: `
ERR_404 6.0 is a hybrid 36-hour National Hackathon dedicated to fostering innovation and collaboration among students. This prestigious event challenges participants to develop creative and practical solutions for pressing societal issues, aligning with national initiatives of innovation.

🎯 **Hackathon Objectives:**
📌 Innovation & Impact:
• Develop technology-driven solutions for global challenges
• Align with international initiatives and sustainable development goals
• Bridge theoretical knowledge with practical applications

📌 Institutional Excellence:
• Continue the college's legacy of technological innovation
• Strengthen reputation as an innovation hub
• Enhance institutional visibility internationally

📌 Community & Collaboration:
• Foster strong local and global community connections
• Engage alumni for mentorship and networking
• Create meaningful sponsor relationships

🎯 **Key Features:**

⭕ Learning Environment:
• Hands-on problem-solving experience
• Real-world challenge applications
• Cutting-edge technology exploration

⭕ Professional Development:
• Industry mentor guidance
• Networking opportunities
• Skill enhancement workshops

⭕ Global Platform:
• International participation
• Cross-cultural collaboration
• Worldwide visibility

This edition focuses on addressing pressing global challenges while providing participants with a dynamic platform to showcase their technical expertise and innovative thinking.`,
    thumbnailImage: "/assets/events/err_404_6.png",
    posterImage: "/assets/poster/codefeastposter.png",
    tags: ["Upcoming", "Hackathon"],
    startDate: "Sat, Feb 15, 2025",
    registrationEnd: "Jan 26, 2025, 10:00 PM",
    registrationEndTime: "2025-01-26T22:00:00",
    entryFees: "Free",
    venue: {
      name: "Alma Latifi, Computer Department Labs, Hybrid",
      note: "M. H. Saboo Siddik College"
    },
    incharges: [
      { name: "Dr. Mohammed Ahmed Shaikh" },
      { name: "Er. Ahlam Ansari" }
    ],
    registrationLink: {
      url: "https://err-11.devfolio.co/overview",
      isOpen: true
    },
    teamSize: "4 - 5 Members",
    certification: {
      provided: true,
      type: "Participation + Merit Certificates"
    },
    sponsors: [
      {
        name: "Devfolio",
        logo: "/assets/sponsors/devfolio.png",
        website: "https://devfolio.co"
      },
      {
        name: "Polygon",
        logo: "/assets/sponsors/polygon.png",
        website: "https://polygon.technology"
      },
      {
        name: "ETH India",
        logo: "/assets/sponsors/ethindia.png",
        website: "https://ethindia2024.devfolio.co/"
      },
      {
        name: "Aptos",
        logo: "/assets/sponsors/aptos.png",
        website: "https://aptosfoundation.org/"
      },
      {
        name: 'Meta Craftlab',
        logo: '/assets/sponsors/craftlab.png',
        website: 'https://craftlab.ai/'
      },
      {
        name: "Interview Buddy",
        logo: "/assets/sponsors/interviewbuddy.png",
        website: "https://interviewbuddy.net/"
      },
      {
        name: 'Beeceptor',
        logo: '/assets/sponsors/beeceptor.png',
        website: 'https://beeceptor.com/'
      },
      {
        name: 'Learn With Travelling',
        logo: '/assets/sponsors/lwt.png',
        website: 'https://www.instagram.com/learningwhiletravelling/'
      },
      {
        name: 'Tech Bairn',
        logo: '/assets/sponsors/techbairn.png',
        website: 'https://www.techbairn.com/'
      },
      {
        name: "Mojoco",
        logo: "/assets/sponsors/mojoco.png",
        website: ""
      },
      {
        name: 'Aixplain',
        logo: '/assets/sponsors/aixplain.png',
        website: 'https://aixplain.com/'
      },
      {
        name: 'NetCredential',
        logo: '/assets/sponsors/netcredential.png',
        website: 'https://netcredential.com/'
      },
      {
        name: 'MentorX',
        logo: '/assets/sponsors/mentorx.png',
        website: 'https://thementorx.com/'
      },
      {
        name: 'Hover Robotix',
        logo: '/assets/sponsors/hoverrobotix.png',
        website: 'https://hoverrobotix.com/'
      }
    ],
    officialWebsite: "https://err-404-6.vercel.app"
  },
  // CodeFeast
  {
    id: "codefeast-3-2024",
    title: "CodeFeast 3.0",
    type: "All",
    date: "September 27, 2024",
    description: `
The goal of CodeFeast 3.0 is to provide students with a platform to apply their knowledge of Data Structures and Algorithms (DSA) learned in the recent workshop. This coding competition will test participants' problem-solving capabilities, promote the importance of competitive programming, and enhance their coding proficiency in a real-time environment.

🎯 **Contest Objectives:**

📌 Enhance Problem-Solving Skills:
• Strengthen participants' ability to approach and solve complex coding problems efficiently.

📌 Real-Time Coding Experience:
• Provide hands-on, competitive coding experience under time constraints to simulate real-world challenges.

📌 Competitive Programming Mastery:
• Equip participants with key strategies and techniques necessary for excelling in competitive programming environments.

📌 Boost Career Readiness:
• Prepare students for technical interviews and future career opportunities by emphasizing problem-solving, algorithmic thinking, and optimization.

🎯 **Contest Outcomes:**

⭕ CO1: Enhanced Problem-Solving Skills
• Participants will improve their ability to tackle complex coding challenges effectively.

⭕ CO2: Mastery of Competitive Programming Techniques
• Participants will acquire essential strategies and techniques for success in competitive programming.

⭕ CO3: Increased Career Preparedness
• Participants will enhance their readiness for technical interviews and future career opportunities in technology.

⏰ Duration: 75 minutes
📝 Problems: 5 challenging questions`,
    thumbnailImage: "/assets/events/event2.png",
    posterImage: "/assets/poster/codefeastposter.png",
    tags: ["Contest", "Coding"],
    startDate: "Fri, Sept 27, 2024",
    registrationEnd: "September 25, 2024",
    registrationEndTime: "2024-09-25T22:00:00",
    entryFees: "Free",
    venue: {
      name: "Computer Center (CC) Lab",
      note: "M. H. Saboo Siddik College"
    },
    incharges: [
      { name: "Dr. Mohammed Ahmed Shaikh" },
      { name: "Er. Ahlam Ansari" }
    ],
    registrationLink: {
      url: "https://forms.gle/codefeast",
      isOpen: false
    },
    teamSize: "Individual",
    certification: {
      provided: true,
      type: "Participation + Merit Certificates"
    }
  },
  // DSA Workshop
  {
    id: "dsa-workshop-2024",
    title: "DSA Workshop",
    type: "Workshop",
    date: "September 23-25, 2024",
    description: `
The workshop aims to deepen participants' expertise in Data Structures and Algorithms, equipping students with essential skills for solving complex problems, ace technical interviews, and excelling in competitive programming. Through focused sessions and interactive problem-solving, the workshop will bridge the gap between theory and practical application, preparing students for success in both academic and professional settings.

🎯 **Workshop Objectives:**

📌 Enhance Core Competencies:
• Strengthen participants' foundational understanding of Data Structures and Algorithms.

📌 Hands-On Experience:
• Provide practical, hands-on learning through real-world algorithmic problem-solving.

📌 Competitive Programming Preparation:
• Equip participants with essential skills for competitive programming by focusing on puzzles and key algorithmic concepts.

📌 Career Readiness and Interview Preparation:
• Prepare students for technical interviews and career opportunities by reinforcing the importance of Data Structures and Algorithms in the software development process.

🎯 **Workshop Outcomes:**

⭕ WO1: Mastery of Core Concepts
• Participants will develop a solid understanding of Data Structures and Algorithms, enhancing their ability to solve complex computational problems.

⭕ WO2: Practical Problem-Solving
• Participants will apply theoretical knowledge to practical challenges, refining their problem-solving techniques and coding skills.

⭕ WO3: Collaboration and Peer Learning
• Participants will engage in collaborative learning, sharing insights and approaches with peers, which will enhance their teamwork and communication skills.`,
    thumbnailImage: "/assets/events/event1.png",
    posterImage: "/assets/events/event1.png",
    tags: ["DSA", "Workshop", "Tech"],
    startDate: "Mon, Sept 23, 2024",
    registrationEnd: "September 23, 2024",
    registrationEndTime: "2024-09-23T22:00:00",
    entryFees: "₹100",
    venue: {
      name: "Seminar Hall",
      note: "M. H. Saboo Siddik College"
    },
    incharges: [
      { name: "Dr. Mohammed Ahmed Shaikh" },
      { name: "Er. Ahlam Ansari" }
    ],
    registrationLink: {
      url: "https://forms.gle/dsa-workshop",
      isOpen: false
    },
    teamSize: "Individual",
    certification: {
      provided: true,
      type: "Participation + Merit Certificates"
    }
  },
  // Women's Day
  {
    id: "womensday-2024",
    title: "Women's Day",
    type: "All",
    date: "March 11, 2024",
    description: `
The Women's Day Celebration Games Gala aims to create an inclusive and empowering environment that celebrates women's achievements while fostering teamwork, cooperation, and joy through interactive games and activities.

🎯 **Event Objectives:**

📌 Celebrate Women's Achievements:
• Honor and recognize the contributions of female staff, faculty, and students.
• Create a platform for women to connect and celebrate together.

📌 Foster Community Building:
• Strengthen bonds between female members across different departments.
• Create an inclusive atmosphere for networking and interaction.

📌 Promote Active Engagement:
• Organize interactive games and activities for all participants.
• Encourage participation and healthy competition.

📌 Create Memorable Experiences:
• Provide a fun-filled environment with various engaging activities.
• Recognize participants through prizes and appreciation.

🎯 **Event Activities:**

⭕ Interactive Games:
• Tug of War
• Musical Chairs
• Balloon Race
• Lemon and Spoon Race

⭕ Special Features:
• Beautifully decorated venue
• Personalized invitations to female faculty and staff
• Special recognition for female teachers
• Prize distribution ceremony

⭕ Collaborative Organization:
• Joint initiative by Computer Society of India, MHSSCE Chapter
• Supported by Programmers' Club MHSSCE

🎁 Prizes Include:
• Beautiful Keychains
• Flowers for winners`,
    thumbnailImage: "/assets/events/womensday.png",
    posterImage: "/assets/poster/womensdayposter.png",
    tags: ["Ceremony", "Celebration"],
    startDate: "Mon, Mar 11, 2024",
    entryFees: "Free",
    venue: {
      name: "Alma Latifi",
      note: "M. H. Saboo Siddik College"
    },
    incharges: [
      { name: "Er. Ahlam Ansari" }
    ],
    registrationLink: {
      url: "https://forms.gle/womensday",
      isOpen: false
    },
    teamSize: "Individual",
    certification: {
      provided: true,
      type: "Merit Certificates"
    }
  },
  // Valorant
  {
    id: "valorant-tournament-2024",
    title: "Valorant Tournament",
    type: "All",
    date: "March 9, 2024",
    description: `
The Computer Society of India and Programmers' Club, in collaboration with Abrosia Fest, organized an exciting Valorant Tournament, bringing together skilled gamers to compete in this popular first-person shooter game.

🎯 **Tournament Highlights:**

📌 Event Format:
• Two-day competitive tournament
• Online gameplay environment
• Team-based competition
• Professional tournament structure

🎯 **Tournament Structure:**

⭕ Competition Format:
• Multiple elimination rounds
• Strategic team gameplay
• Skill-based matchmaking
• Professional tournament rules

⭕ Game Elements:
• Tactical team coordination
• Strategic map control
• Resource management
• Real-time decision making

🎯 **Event Features:**

📌 Tournament Aspects:
• Live match streaming
• Professional commentary
• Real-time scoreboard
• Team performance tracking

📌 Prize Pool:
• First Prize: ₹3,000
• Recognition for top teams
• Merit certificates
• Tournament achievements`,
    thumbnailImage: "/assets/events/valorant.png",
    posterImage: "/assets/poster/valorantposter.png",
    tags: ["Gaming", "Tournament"],
    startDate: "Sat, Mar 9, 2024",
    registrationEnd: "Thu, Mar 7, 2024",
    entryFees: "₹100",
    venue: {
      name: "Online Mode",
      note: "Valorant"
    },
    incharges: [
      { name: "Er. Ahlam Ansari" }
    ],
    registrationLink: {
      url: "https://forms.gle/valorant",
      isOpen: false
    },
    teamSize: "5 Players",
    certification: {
      provided: true,
      type: "Merit Certificates + Prize Money"
    }
  },
  // Halloween Hunt
  {
    id: "halloween-hunt-2024",
    title: "Halloween Hunt",
    type: "All",
    date: "March 6, 2024",
    description: `
As part of the annual college fest SACE, the Computer Society of India (CSI) and Programmer's Club (PC) hosted an enthralling and innovative event titled "Halloween Hunt". This event, themed around the spooky and mystical elements of Halloween, offered a unique twist on the traditional treasure hunt.

🎯 **Event Highlights:**

📌 Event Format:
• Teams solved series of challenges and puzzles
• Halloween-themed decorations across campus
• Interactive clue-based progression system
• Interdepartmental participation encouraged


🎯 **Event Structure:**

⭕ Challenge Components:
• Sequential clue progression
• Location-based tasks
• Physical challenges
• Riddle solving
• Cipher puzzles

⭕ Hunt Mechanics:
• Teams received starting clues
• Multiple checkpoint challenges
• Progressive difficulty levels
• Final complex cipher challenge

🎯 **Event Features:**

📌 Special Elements:
• Halloween-themed ambiance
• Campus-wide exploration
• Interactive checkpoints
• Team strategy requirements

📌 Competition Aspects:
• Interdepartmental interaction
• Friendly competitive environment
• Time-based completion
• Strategic thinking challenges`,
    thumbnailImage: "/assets/events/treasurehunt.png",
    posterImage: "/assets/poster/treasurehunt.png",
    tags: ["Cultural", "Puzzle"],
    startDate: "Wed, Mar 6, 2024",
    registrationEnd: "Mon, Mar 4, 2024",
    entryFees: "₹200",
    venue: {
      name: "College Premises",
      note: "M. H. Saboo Siddik College"
    },
    incharges: [
      { name: "Dr. Mohammed Ahmed Shaikh" },
      { name: "Er. Ahlam Ansari" }
    ],
    registrationLink: {
      url: "https://docs.google.com/forms/d/e/1FAIpQLSd9Fj1VWHTcjaMdsNedVEaUjNZ23nU5hOa3y8PNe5f_2gADAQ/viewform",
      isOpen: false
    },
    teamSize: "4 - 5 Members",
    certification: {
      provided: true,
      type: "Merit Certificates"
    }
  },
  // Three 90 Challenge
  {
    id: "three-90-challenge-2024",
    title: "Three 90 Challenge",
    type: "All",
    date: "January 26, 2024",
    description: `
GeeksforGeeks has launched Three 90 Campaign to address the challenge of students losing motivation in coding after initial weeks. The campaign offers an exciting incentive: complete 90% of your chosen course in 90 days to receive a 90% refund.

🎯 **Event Workflow:**

📌 Registration Process:
• Scan QR code to access the Oath Page
• Fill in required details for registration
• Choose your preferred challenge

📌 Challenge Options:
• Users must select and complete one of two challenges
• Successful completion rewards include keychains, stickers, pens & GFG Goodies

🎯 **Available Challenges:**

⭕ Challenge 1: Pic Of The Kiosk On LinkedIn
• Click a photo of the kiosk
• Post on LinkedIn using specific hashtags:

#commitwithgfg #gfgthree90 #studentcommunity

• Posts must be at least 1 hour old for verification

⭕ Challenge 2: Coding Rapidfire
• 5 coding questions per participant
• 60-second time limit
• Quick thinking and coding skills test

🎁 Rewards:
• GFG Keychains
• Stickers
• Pens
• Additional GFG Goodies`,
    thumbnailImage: "/assets/events/event5.png",
    posterImage: "/assets/poster/three90challenge.png",
    tags: ["Challenge", "Coding"],
    startDate: "Thur, Jan 24, 2024",
    registrationEnd: "Wed, Jan 23, 2024",
    entryFees: "Free",
    venue: {
      name: "College Ground",
      note: "M. H. Saboo Siddik College"
    },
    incharges: [
      { name: "Dr. Mohammed Ahmed Shaikh" },
      { name: "Er. Ahlam Ansari" }
    ],
    registrationLink: {
      url: "https://forms.gle/three90challenge",
      isOpen: false
    },
    teamSize: "Individual",
    certification: {
      provided: true,
      type: "Participation Certificates"
    }
  },
  // Err_404 5.0
  {
    id: "err-404-5",
    title: "Err_404 5.0",
    type: "Hackathon",
    date: "March 18-19, 2023",
    description: `
ERR_404 is a 2-days National level Hackathon organized by the Computer Department of Anjuman-I-Islam M.H. Saboo Siddik College of Engineering, embodying the motto "Error no More, Innovation Forever."

🎯 **Event Highlights:**

📌 Participant Opportunities:
• Showcase mind-boggling technical skills
• Compile and execute innovative ideas
• Build working prototypes in a competitive environment
• Network with industry professionals

📌 Skill Development Focus:
• Teamwork and leadership
• Attention to detail
• Compatibility and adaptability
• Brainstorming and problem-solving

🎯 **Event Details:**

⭕ Prize Pool:
• Total worth: $4,560 in prizes
• Multiple sponsor prizes including Polygon, Replit, Solana, Verbwire, and Filecoin

⭕ Prestigious Sponsors:
• Title Sponsor: Sogolytics
• Platinum: Devfolio, Polygon
• Gold: DigitalOcean, Replit, Solana, Verbwire, Filecoin
• And many more industry leaders

⭕ Participation Guidelines:
• Team Size: 4-5 members
• Registration: Free
• Mode: Offline
• Open to all college students

🎁 Additional Perks:
• Certificates
• Refreshments
• Networking opportunities
• Learning resources
• Mentorship support`,
    thumbnailImage: "/assets/events/event4.png",
    posterImage: "/assets/poster/err5poster.png",
    tags: ["Hackathon", "Coding"],
    startDate: "Sat, Mar 18, 2023",
    registrationEnd: "March 14, 2023",
    entryFees: "Free",
    venue: {
      name: "Alma Latifi Hall",
      note: "M. H. Saboo Siddik College"
    },
    incharges: [
      { name: "Dr. Mohammed Ahmed Shaikh" },
      { name: "Er. Ahlam Ansari" }
    ],
    registrationLink: {
      url: "https://err404-5.devfolio.co/",
      isOpen: false
    },
    teamSize: "4 - 5 Members",
    certification: {
      provided: true,
      type: "Participation + Merit Certificates"
    },
    sponsors: [
      {
        name: "Sogolytics",
        logo: "/assets/sponsors/sogolytics.png",
        website: "https://www.sogolytics.com"
      },
      {
        name: "Devfolio",
        logo: "/assets/sponsors/devfolio.png",
        website: "https://devfolio.co"
      },
      {
        name: "Polygon",
        logo: "/assets/sponsors/polygon.png",
        website: "https://polygon.technology"
      },
      {
        name: "Hell Energy Drink",
        logo: "/assets/sponsors/hell.png",
        website: "https://www.hellenergy.com/in/"
      },
      {
        name: "Replit",
        logo: "/assets/sponsors/replit.png",
        website: "https://replit.com"
      },
      {
        name: "Solana",
        logo: "/assets/sponsors/solana.png",
        website: "https://solana.com"
      },
      {
        name: "Filecoin",
        logo: "/assets/sponsors/filecoin.png",
        website: "https://filecoin.com"
      },
      {
        name: "Digital Ocean",
        logo: "/assets/sponsors/digitalocean.png",
        website: "https://digitalocean.com"
      },
      {
        name: "Bitkraft",
        logo: "/assets/sponsors/bitkraft.png",
        website: "https://bitkraft.io"
      },
      {
        name: "HoverRobotix",
        logo: "/assets/sponsors/hoverrobotix.png",
        website: "https://hoverrobotix.com"
      },
      {
        name: "MentorX",
        logo: "/assets/sponsors/mentorx.png",
        website: "https://thementorx.com/"
      },
      {
        name: "Give My Certificate",
        logo: "/assets/sponsors/givemycertificate.png",
        website: "https://givemycertificate.com/"
      },
      {
        name: "Verbwire",
        logo: "/assets/sponsors/verbwire.png",
        website: "https://verbwire.com/"
      }
    ],
    officialWebsite: ""
  },
  // Quiz Mania
  {
    id: "quizmania-2023",
    title: "Quiz Mania",
    type: "All",
    date: "September 17, 2023",
    description: `
A quiz competition for students of F.E, S.E., T.E. and B.E. organized by Programmers' Club and Computer Society Of India, bringing together participants from all branches.

🎯 **Event Objectives:**

📌 Knowledge Assessment:
• Test students' logical reasoning, verbal ability, and mathematical aptitude
• Simulate placement test environment
• Enhance competitive spirit among participants

📌 Skill Development:
• Improve problem-solving capabilities
• Develop quick thinking abilities
• Strengthen aptitude fundamentals

🎯 **Event Structure:**

⭕ Level 1: Initial Round
• Basic logical, verbal reasoning, Math, aptitude questions
• Powerups and Freeze time provided
• Participants: 17 students
• Duration: 20 minutes

⭕ Level 2: Advanced Round
• Questions leveled up in difficulty
• Top 7 participants from Level 1
• Competitive elimination format

🎯 **Event Features:**

📌 Question Categories:
• Logical Reasoning
• Verbal Ability
• Mathematical Aptitude
• General Knowledge

📌 Special Elements:
• Power-ups for assistance
• Freeze time options
• Real-time scoring system

This activity provides students with valuable experience similar to placement aptitude tests, helping them prepare for their future career opportunities.`,
    thumbnailImage: "/assets/events/quizmania.png",
    posterImage: "/assets/poster/quizmaniaposter.png",
    tags: ["Contest", "Quiz"],
    startDate: "Tue, Sept 17, 2023",
    registrationEnd: "September 15, 2023",
    entryFees: "Free",
    venue: {
      name: "Computer Center (CC) Lab",
      note: "M. H. Saboo Siddik College"
    },
    incharges: [
      { name: "Dr. Mohammed Ahmed Shaikh" },
      { name: "Er. Ahlam Ansari" }
    ],
    registrationLink: {
      url: "https://forms.gle/codefeast",
      isOpen: false
    },
    teamSize: "Individual",
    certification: {
      provided: true,
      type: "Participation + Merit Certificates"
    }
  },
  // Err 404 4.0
  {
    id: "err-404-4",
    title: "Err_404 4.0",
    type: "Hackathon",
    date: "March 20-21, 2021",
    description: 
    `ERR_404 is a 2-days National Level Hackathon organized by the Computer Department of Anjuman-I-Islam M.H. Saboo Siddik College of Engineering, dedicated to the motto "Error no More, Innovation Forever."

🎯 **Event Highlights:**

📌 Participant Opportunities:
• Showcase exceptional technical skills
• Innovate and bring ideas to life
• Build functional prototypes in a highly competitive environment
• Engage with top industry professionals

📌 Skill Development Focus:
• Enhance teamwork and leadership abilities
• Foster attention to detail
• Improve adaptability and problem-solving techniques
• Boost brainstorming and ideation skills

🎯 **Event Details:**

⭕ **Prize Pool:** 
• Total Worth: ₹2,00,000 in cash prizes
• Additional rewards from multiple sponsor companies, including software credits and goodies

⭕ **Prestigious Sponsors:** 
• Title Sponsor: Sogolytics
• Platinum Sponsors: Devfolio, Polygon
• Gold Sponsors: DigitalOcean, Replit, Solana, Verbwire, Filecoin
• And more leading industry partners

⭕ **Participation Guidelines:** 
• Team Size: 4-5 members
• Registration: Free
• Mode: Virtual
• Open to all college students

🎁 **Additional Perks:** 
• Certificates of Participation
• Refreshments for all participants
• Networking opportunities with industry experts
• Learning resources and mentorship support`,
    thumbnailImage: "/assets/events/err_404_4.png",
    posterImage: "/assets/poster/err_404_4.png",
    tags: ["Hackathon", "Coding"],
    startDate: "Sat, March 20, 2021",
    registrationEnd: "March 18, 2021",
    entryFees: "Free",
    venue: {
      name: "Alma Latifi",
      note: "M. H. Saboo Siddik College"
    },
    incharges: [
      { name: "Dr. Mohammed Ahmed Shaikh" },
      { name: "Er. Ahlam Ansari" }
    ],
    registrationLink: {
      url: "https://err-404-6.vercel.app/",
      isOpen: false
    },
    teamSize: "4 - 5 Members",
    certification: {
      provided: true,
      type: "Participation + Merit Certificates"
    },
    sponsors: [
      {
        name: "Sogolytics",
        logo: "/assets/sponsors/sogo.png",
        website: "https://www.sogolytics.com/"
      },
      {
        name: "Pinc Insurance",
        logo: "/assets/sponsors/pinc.png",
        website: "https://www.pincinsurance.com/"
      },
      {
        name: "Koshex",
        logo: "/assets/sponsors/koshex.png",
        website: "https://www.koshex.com/"
      }
    ],
    officialWebsite: ""
  },
  // Err_404 3.0
  {
    id: "err-404-3",
    title: "Err_404 3.0",
    type: "Hackathon",
    date: "February 29 - March 1, 2020",
    description: 
    `The much-anticipated Err_404 3.0 Hackathon marked a milestone in technical innovation by hosting a thrilling 48-hour coding marathon. This state-level event brought together bright minds from across Maharashtra, providing participants with an opportunity to brainstorm, innovate, and develop impactful solutions to pressing problems. With continuous guidance from expert mentors and a highly competitive yet collaborative environment, the hackathon set the stage for technological brilliance.

🎯 **Event Highlights:**

📌 **Participant Opportunities:**
Showcase advanced technical skills.
Develop innovative solutions to real-world problems.
Build and present working prototypes in a competitive environment.
Collaborate and network with peers and industry leaders.

📌 **Skill Development Focus:**
Enhanced problem-solving and ideation.
Team coordination and leadership.
Adapting to challenging scenarios.
Effective presentation and communication.

⭕ **Prize Pool:**
Total Worth: ₹2,00,000 in cash prizes.
Additional rewards from sponsors, including software credits and goodies.

⭕ **Title Sponsor:**
Sogosurvey

⭕ **Gold Sponsors:**
Mobicule, Aiolos Solutions

⭕ **Supporters:**
Neebal Technologies, Programmer's Club, CSI-MHSS Chapter

⭕ **Knowledge Partners:**
Difference-engine.ai, Ubisoft

⭕ **Participation Guidelines:**
Team Size: 4-5 members
Registration: Free
Mode: Offline
Open to undergraduate students across Maharashtra.

🎁 **Additional Perks:**
Certificates for participation and merit.
Refreshments and accommodation for participants.
Access to mentorship sessions by industry professionals.
Networking opportunities with experts.

⭕ **Domains:**
Machine Learning
Blockchain
IoT-enabled Solutions
Big Data
Computer Vision
Social Impact Solutions

⭕ **Judging Criteria:**
Practical application and real-world relevance.
Technical innovation and coding proficiency.
Domain-specific creativity.
Presentation skills and teamwork.`,
    thumbnailImage: "/assets/events/err_404_3.png",
    posterImage: "/assets/poster/err_404_3.png",
    tags: ["Hackathon", "Coding"],
    startDate: "Sat, February 29, 2020",
    registrationEnd: "Feb 27, 2020",
    entryFees: "Free",
    venue: {
      name: "Alma Latifi",
      note: "M. H. Saboo Siddik College"
    },
    incharges: [
      { name: "Dr. Mohammed Ahmed Shaikh" },
      { name: "Er. Ahlam Ansari" }
    ],
    registrationLink: {
      url: "https://err-404-6.vercel.app/",
      isOpen: false
    },
    teamSize: "4 - 5 Members",
    certification: {
      provided: true,
      type: "Participation + Merit Certificates"
    },
    sponsors: [
      {
        name: "Oh Campus",
        logo: "/assets/sponsors/ohcampus.png",
        website: "https://ohcampus.in/"
      },
      {
        name: "Sogosurvey",
        logo: "/assets/sponsors/sogo.png",
        website: "https://www.sogolytics.com/"
      },
      {
        name: "No Escape",
        logo: "/assets/sponsors/noescape.png",
        website: "https://noescape.in/"
      },
      {
        name: "Lokmat",
        logo: "/assets/sponsors/lokmat.png",
        website: "https://lokmat.com/"
      },
      {
        name: "IIDE",
        logo: "/assets/sponsors/iide.png",
        website: "https://iide.in/"
      },
      {
        name: "Hell Energy Drink",
        logo: "/assets/sponsors/hell.png",
        website: "https://www.hellenergy.com/in/"
      },
      {
        name: "Digital Ocean",
        logo: "/assets/sponsors/digitalocean.png",
        website: "https://digitalocean.com/"
      },
      {
        name: "CrowdSource",
        logo: "/assets/sponsors/crowdsource.png",
        website: "https://www.crowdsource.in/"
      },
      {
        name: "Acxiom",
        logo: "/assets/sponsors/acxiom.png",
        website: "https://acxiom.com/"
      },
      {
        name: "Creative Tim",
        logo: "/assets/sponsors/creativetim.png",
        website: "https://www.creative-tim.com/"
      },
      {
        name: "Bugsee",
        logo: "/assets/sponsors/bugsee.png",
        website: "https://bugsee.com/"
      },
      {
        name: "Ahtesaab",
        logo: "/assets/sponsors/ahtesaab.png",
        website: "https://ahtesaab.com/"
      }
    ],
    officialWebsite: ""
  },
  // Codentine
  {
    id: "codentine-2023",
    title: "Codentine",
    type: "All",
    date: "April 13, 2020",
    description: `
A competitive programming competition organized in association with "Code Chef", designed during quarantine to bring together talented programmers to compete and learn in an engaging way. The event focused on enhancing problem-solving skills through progressively challenging problems in live contests.

🎯 **Competition Structure:**

📌 Level 1 (April 13, 2020):
• Basic to Moderate difficulty
• Initial qualifying round
• Top 40 participants advance
• Time-bound problem solving

📌 Level 2 (April 16, 2020):
• Moderate to Difficult challenges
• Advanced competition phase
• Top 15 qualifiers selected
• Increased complexity

📌 Level 3 (April 19, 2020):
• Highest difficulty level
• Final championship round
• Elite programming challenges
• Ultimate skill test

🎯 **Event Features:**

⭕ Competition Format:
• Live programming contests
• Progressive difficulty levels
• Real-time submissions
• Automated evaluation

⭕ Learning Aspects:
• Analytical thinking development
• Problem-solving enhancement
• Algorithmic optimization
• Code efficiency focus

🎯 **Key Benefits:**

📌 Skill Development:
• Competitive programming practice
• Time management skills
• Logical reasoning
• Code optimization techniques

📌 Platform Features:
• CodeChef integration
• Real-time leaderboard
• Automated testing
• Instant feedback system

This event successfully combined competitive programming with learning, providing participants a platform to enhance their coding skills during the quarantine period.`,
    thumbnailImage: "/assets/events/codentine.png",
    posterImage: "/assets/poster/codentineposter.png",
    tags: ["Coding", "Competition"],
    startDate: "Mon, Apr 13, 2020",
    registrationEnd: "Apr 11, 2020",
    entryFees: "Free",
    venue: {
      name: "Online Mode",
      note: "CodeChef Platform"
    },
    incharges: [
      { name: "Er. Ahlam Ansari" },
      { name: "Dr. Zainab Pirani" }
    ],
    registrationLink: {
      url: "https://forms.gle/codentine",
      isOpen: false
    },
    teamSize: "Individual",
    certification: {
      provided: true,
      type: "Merit Certificates"
    }
  },
  // Err_404 2.0
  {
    id: "err-404-2",
    title: "Err_404 2.0",
    type: "Hackathon",
    date: "Match 16-17, 2019",
    description: 
    `ERR_404 2.0 Hack Not Found built on the success of its predecessor, delivering an engaging 24-hour hackathon hosted by the M.H. Saboo Siddik College of Engineering (MHSSCOE) on March 16-17, 2019. This event provided a vibrant platform for collaboration, innovation, and technical problem-solving among 208 participants, representing 56 teams from across Maharashtra.

🎯 **Key Highlights:**

📌 Focus Areas: • Foster innovation aligned with "Digital India" initiatives
• Address pressing real-world challenges through domains like Machine Learning, Blockchain, IoT, and more
• Promote female developers through a special "Female Cup" award
📌 Event Details: • Date: March 16-17, 2019
• Participants: 208, from 56 selected teams
• Venue: MHSSCOE campus
📌 Prizes & Recognition: • Top 3 teams awarded for their exceptional solutions
• Special recognition for the best female hacker team

🎯 **Judging & Evaluation:**
⭕ Judges Panel: Renowned industry professionals like **Mr. Zaid Lakdawala (Sogosurvey)**, **Dr. Rayomand Vatcha (UNC)**, and **Mr. Irshad Shaikh (Neebal Technologies)**.
⭕ Mentors: Experts from organizations like Ubisoft, Zycus, and Difference-engine.ai provided continuous guidance during the event.

⭐ **Evaluation Parameters:**
Real-world application
Domain relevance
Technical execution
Presentation quality

🎯 **Achievements:**

🏆 **Winning Teams:**
**CSP22 (MHSSCOE)** - First Place
**ImagiNation (Vidyavardhini College of Engineering)** - Runner-up
**InoApk.ai (SIES Graduate School of Technology)** - 2nd Runner-up
🌟 Special Recognition: • Best Female Hacker Team: House Stack (Fr. Conceicao Rodrigues College of Engineering)

🎯 **Social Media Impact:**
🌐 Extensive engagement via hashtags like #err404hacknotfound and #hackathon2019 on Instagram, Twitter, and Facebook.
📈 Metrics:
• Instagram: 324 followers, 33 posts
• Twitter: 181 tweets, 160 page likes
• Facebook: 100+ followers, 119 page likes

🎯 **Participant Feedback:**
The feedback highlighted an overwhelmingly positive experience, with participants praising the event's organization and mentoring support. Minor suggestions included enhancing technical infrastructure and logistics.

🎯 **Conclusion:**
ERR_404 2.0 successfully built a thriving ecosystem for aspiring developers, with a vision to scale future editions into even larger, more impactful events. By fostering a culture of creativity and technological advancement, MHSSCOE continues to contribute to the development of India's tech-savvy youth.`,
    thumbnailImage: "/assets/events/err_404_2.png",
    posterImage: "/assets/poster/err_404_2.png",
    tags: ["Hackathon", "Coding"],
    startDate: "Sat, March 16, 2019",
    registrationEnd: "March 14, 2019",
    entryFees: "Free",
    venue: {
      name: "Alma Latifi",
      note: "M. H. Saboo Siddik College"
    },
    incharges: [
      { name: " Er. Shabana Tadvi" },
      { name: "Dr. Zainab Pirani" }
    ],
    registrationLink: {
      url: "https://err-404-6.vercel.app/",
      isOpen: false
    },
    teamSize: "4 - 5 Members",
    certification: {
      provided: true,
      type: "Participation + Merit Certificates"
    },
    sponsors: [
      {
        name: "Sogolytics",
        logo : "/assets/sponsors/sogo.png",
        website: "https://www.sogolytics.com/"
      },
      {
        name: "Mobicule",
        logo : "/assets/sponsors/mobicule.png",
        website: "https://www.mobicule.com/"
      },
      {
        name: "Intel",
        logo: "/assets/sponsors/intel.png",
        website: "https://www.intel.com/content/www/us/en/homepage.html"
      },
      {
        name: "Internshala",
        logo: "/assets/sponsors/internshala.png",
        website: "https://internshala.com/"
      },
      {
        name: "Neebal Technologies",
        logo: "/assets/sponsors/neebal.png",
        website: "https://neebal.com/"
      },
      {
        name: "Ubisoft",
        logo: "/assets/sponsors/ubisoft.png",
        website: "https://ubisoft.com/"
      },
      {
        name: "Aiolos",
        logo: "/assets/sponsors/aiolos.png",
        website: "https://aiolos.cloud/"
      },
    ],
    officialWebsite: ""
  },
  // Workshop on Git
  {
    id: "workshop-git-2023",
    title: "Workshop on Git",
    type: "Workshop",
    date: "March 7, 2018",
    description: `
A hands-on workshop focused on Git version control system, organized by the Programmer's Club in association with CSI. The workshop covered essential Git commands, collaborative development workflows, and best practices for modern software development.

🎯 **Workshop Content:**

📌 Basic Git Operations:
• Repository (Clone, Pull, Push)
• Commit (Add, Commit, Status)
• Branch (Create, Switch, Merge)
• Remote (Origin, Upstream)

📌 Advanced Operations:
• Merge conflict resolution
• Branch management
• Pull request workflow
• Code review process

🎯 **Workshop Schedule:**

⭕ Morning Session (9:00 AM - 12:00 PM):
• Git installation and setup
• Basic commands introduction
• Local repository management
• Hands-on exercises

⭕ Afternoon Session (1:00 PM - 4:00 PM):
• Advanced Git concepts
• GitHub platform usage
• Team collaboration scenarios
• Real-world problem solving

🎯 **Learning Outcomes:**

📌 Technical Skills:
• Version control mastery
• Collaborative development
• Project management
• Workflow optimization

📌 Practical Benefits:
• Industry-standard practices
• Team collaboration skills
• Portfolio development
• Project contribution readiness

This workshop equipped participants with essential version control skills, preparing them for real-world software development and team collaboration.`,
    thumbnailImage: "/assets/events/git.png",
    posterImage: "/assets/poster/gitposter.png",
    tags: ["Workshop", "Development"],
    startDate: "Wed, Mar 7, 2018",
    registrationEnd: "Mar 5, 2018",
    entryFees: "Free",
    venue: {
      name: "Seminar Hall",
      note: "M. H. Saboo Siddik College"
    },
    incharges: [
      { name: "Er. Ahlam Ansari" }
    ],
    registrationLink: {
      url: "https://forms.gle/codentine",
      isOpen: false
    },
    teamSize: "Individual",
    certification: {
      provided: true,
      type: "Participation Certificates"
    }
  },
  // Err_404 1.0
  {
    id: "err-404",
    title: "Err_404 1.0",
    type: "Hackathon",
    date: "October 7-8, 2017",
    description: 
    `Err_404: Hack Not Found is a dynamic 24-hour State Level Hackathon organized by the M.H. Saboo Siddik College of Engineering, held on October 7th and 8th, 2017. This event, in collaboration with the Computer Society of India and the Programmer's Club, embodies the spirit of innovation and encourages participants to bring their tech ideas to life.

🎯 **Event Highlights:**
📌 Participant Opportunities: • Compete in a challenging, time-constrained environment • Work on cutting-edge technology solutions in Machine Learning, IoT, Big Data, Blockchain, and more • Collaborate with peers to innovate and create impactful solutions • Present ideas to industry-leading judges and mentors
📌 Skill Development Focus: • Creativity and ideation • Technical execution and problem-solving • Collaboration and teamwork • Presentation and communication

🎯 **Event Details:**
⭕ Prize Pool: • Total worth: ₹1.2 Lakhs • Multiple prizes for winners, including special recognition for the best female developer team
⭕ Prestigious Judges & Mentors: • Industry experts such as **Mr. Tabish Sangrar (CIO, Wellness Forever)**, **Dr. Rayomand Vatcha (Robotics, UNC)**, and others, providing guidance and evaluations during the even
⭕ Participation Guidelines: • Team Size: 3-5 members • Registration: Free • Mode: Offline • Open to students across various colleges

🎁 **Additional Perks:**
• Certificates for all participants 
• Networking opportunities with industry professionals and fellow developers 
• Refreshments and meals provided throughout the event 
• Mentorship support from industry veterans and faculty members

Err_404 served as a platform for students to showcase their skills, build innovative solutions, and network with experts, while also addressing key real-world issues. The event saw participation from over 100 teams, with top-performing teams recognized and awarded for their impressive work.`,
    thumbnailImage: "/assets/events/err_404_1.png",
    posterImage: "/assets/poster/err_404_1.png",
    tags: ["Hackathon", "Coding"],
    startDate: "Sat, Oct 7, 2017",
    registrationEnd: "Oct 6, 2017 11:59 PM",
    entryFees: "Free",
    venue: {
      name: "Alma Latifi",
      note: "M. H. Saboo Siddik College"
    },
    incharges: [
      { name: " Er. Shabana Tadvi" },
      { name: "Dr. Zainab Pirani" }
    ],
    registrationLink: {
      url: "https://err-404-6.vercel.app/",
      isOpen: false
    },
    teamSize: "4 - 5 Members",
    certification: {
      provided: true,
      type: "Participation + Merit Certificates"
    },
    sponsors: [
      {
        name: "Tata Consultancy Services",
        logo : "/assets/sponsors/tcs.png",
        website: "https://www.tcs.com/"
      },
      {
        name: "Intel",
        logo: "/assets/sponsors/intel.png",
        website: "https://www.intel.com/content/www/us/en/homepage.html"
      },
      {
        name: "Internshala",
        logo: "/assets/sponsors/internshala.png",
        website: "https://internshala.com/"
      },
      {
        name: "Frapp",
        logo: "/assets/sponsors/frapp.png",
        website: "https://frapp.com/"
      },
      {
        name: "O'ceans",
        logo: "/assets/sponsors/o'cean.png",
        website: "https://oceanbeverages.in/"
      },
      {
        name: "McDonald's",
        logo: "/assets/sponsors/mcdonald.png",
        website: "https://www.mcdonalds.com/us/en-us.html"
      },
      {
        name: "GDG Mumbai",
        logo: "/assets/sponsors/gdgmumbai.png",
        website: "https://gdg.community.dev/gdg-cloud-mumbai/"
      },
      {
        name: "GBG Mumbai",
        logo: "/assets/sponsors/gbgmumbai.png",
        website: "https://x.com/gbgmumbai"
      },
      {
        name: "Chunkies",
        logo: "/assets/sponsors/chunkies.png",
        website: "https://www.zomato.com/mumbai/chunkies-burgers-fried-chicken-bandra-talao-bandra-west"
      },
      {
        name: "Balaji",
        logo: "/assets/sponsors/balaji.png",
        website: "https://www.balajiwafers.com/"
      },
      {
        name: "Wellness Forever",
        logo: "/assets/sponsors/wellnessforever.png",
        website: "https://www.wellnessforever.com/"
      },
    ],
    officialWebsite: ""
  },
  // Java Workshop
  {
    id: "java-workshop-2023",
    title: "Java Workshop",
    type: "Workshop",
    date: "September 11, 2017",
    description: `
A comprehensive 2-day workshop focused on Object-Oriented Programming concepts in Java, organized by the Programmer's Club in association with CSI. This workshop provided hands-on experience with core OOP principles and their practical implementation.

🎯 **Workshop Content:**

📌 Core OOP Concepts:
• Encapsulation fundamentals
• Inheritance implementation
• Polymorphism techniques
• Abstraction principles
• Object creation and management

📌 Programming Practice:
• Hands-on coding exercises
• Real-world examples
• Best practices implementation
• Code optimization techniques

🎯 **Workshop Schedule:**

⭕ Day 1 (9:00 AM - 4:00 PM):
• Java basics and environment setup
• Class and object fundamentals
• Encapsulation and data hiding
• Inheritance and its types

⭕ Day 2 (9:00 AM - 4:00 PM):
• Polymorphism implementation
• Abstract classes and interfaces
• Advanced OOP concepts
• Practical project work

🎯 **Learning Outcomes:**

📌 Technical Skills:
• Strong OOP foundation
• Java programming proficiency
• Problem-solving abilities
• Code organization skills

📌 Practical Benefits:
• Industry-standard practices
• Clean code principles
• Project development skills
• Software design patterns

This workshop equipped participants with essential Object-Oriented Programming concepts and practical Java development skills, preparing them for real-world software development.`,
    thumbnailImage: "/assets/events/java.png",
    posterImage: "/assets/poster/javaposter.png",
    tags: ["Workshop", "Development"],
    startDate: "Mon, Sept 11, 2017",
    registrationEnd: "Sept 9, 2017",
    entryFees: "₹50",
    venue: {
      name: "Seminar Hall",
      note: "M. H. Saboo Siddik College"
    },
    incharges: [
      { name: "Er. Ahlam Ansari" }
    ],
    registrationLink: {
      url: "https://forms.gle/codentine",
      isOpen: false
    },
    teamSize: "Individual",
    certification: {
      provided: true,
      type: "Participation Certificates"
    }
  },
  // Triwizard Tournament
  {
    id: "triwizard-tournament-2023",
    title: "Triwizard Tournament",
    type: "All",
    date: "August 28, 2017",
    description: `
A magical coding competition open to all colleges, designed to challenge participants with enchanting problem-solving tasks. This tournament brought together aspiring programmers to test their skills across various difficulty levels, from novice spells to advanced wizardry.

🎯 **Tournament Structure:**

📌 Challenge Format:
• 6 unique magical challenges
• Easy to Moderate difficulty levels
• Open to all college students
• Real-time submission system

📌 Problem Categories:
• The Deadly Squares
• The Hot-Hot Pie
• Trial by Puzzle
• Queens Landing
• The Battle of Hogwarts
• Goblin Salaries

🎯 **Competition Features:**

⭕ Difficulty Progression:
• Beginner-friendly challenges
• Progressive complexity
• Strategic problem-solving
• Time-bound submissions

🎯 **Event Highlights:**

📌 Learning Focus:
• Competitive programming exposure
• Algorithm optimization
• Problem-solving skills
• Code efficiency

📌 Rewards:
⭕Top 3 winners receive goodies
• Merit certificates
• Recognition across colleges
• Special mentions

This magical tournament successfully introduced S.E. students to competitive programming while creating an engaging and challenging environment for all participants.`,
    thumbnailImage: "/assets/events/triwizard.png",
    posterImage: "/assets/poster/triwizardposter.png",
    tags: ["Workshop", "Development"],
    startDate: "Mon, Aug 28, 2017",
    registrationEnd: "Aug 26, 2017",
    entryFees: "Free",
    venue: {
      name: "CodeChef Platform",
      note: "Online Mode"
    },
    incharges: [
      { name: "Er. Ahlam Ansari" }
    ],
    registrationLink: {
      url: "https://forms.gle/codentine",
      isOpen: false
    },
    teamSize: "Individual",
    certification: {
      provided: true,
      type: "Participation Certificates"
    }
  }
]
