export interface Event {
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
}

export const eventsData: Event[] = [
  {
    title: "DSA Workshop",
    date: "September 23-25, 2024",
    description: "Mastery over key DSA concepts that are crucial for technical interviews and competitive programming.",
    image: "/assets/events/event1.png",
    tags: ["DSA", "Workshop", "Tech"]
  },
  {
    title: "CodeFeast 3.0",
    date: "September 27, 2024",
    description: "An intriguing coding competition for the enthusiastic engineers, 5 intense problems in just 75 minutes!",
    image: "/assets/events/event2.png",
    tags: ["Contest", "Coding"]
  },
  {
    title: "Felicitation Program",
    date: "August 5, 2024",
    description: "Celebrating the achievements of our outstanding club members and recognizing their dedication.",
    image: "/assets/events/event3.png",
    tags: ["Ceremony", "Celebration"]
  },
  {
    title: "Err_404 5.0",
    date: "March 18-19, 2024",
    description: "With a prize pool of 2,50,000, multiple goodies, for coders to showcase their talent.",
    image: "/assets/events/event4.png",
    tags: ["Hackathon", "Coding"]
  }
]
