export type Post = {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readTime: string
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'How to Build Better Habits',
    excerpt: 'Small changes can help us create better routines and reach our goals.',
    content:
      'Building better habits does not require changing everything at once. Start with one small action, repeat it regularly, and track your progress. Over time, small steps can lead to meaningful results.',
    category: 'Lifestyle',
    date: 'October 10, 2026',
    readTime: '3 min read',
  },
  {
    id: 2,
    title: 'My Guide to Student Productivity',
    excerpt: 'Simple ways to organize your studies and make time for yourself.',
    content:
      'Student life can be busy, but planning makes it easier. Write down your priorities, divide large tasks into smaller steps, and take short breaks. Remember that rest is also part of being productive.',
    category: 'Study',
    date: 'October 12, 2026',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'Learning Something New Every Day',
    excerpt: 'Why curiosity and consistent learning matter in everyday life.',
    content:
      'Learning can happen outside the classroom, too. Read an article, practice a language, or try a new skill. You do not need to know everything immediately. Staying curious and practicing regularly can help you grow.',
    category: 'Personal Growth',
    date: 'October 15, 2026',
    readTime: '3 min read',
  },
  {
    id: 4,
    title: 'Finding Inspiration in Everyday Life',
    excerpt: 'Creative ideas can come from ordinary moments around us.',
    content:
      'Inspiration is not always a big event. Sometimes it comes from a conversation, a walk, music, or a new place. Pay attention to the world around you and write down ideas when they appear.',
    category: 'Creativity',
    date: 'October 18, 2026',
    readTime: '2 min read',
  },
  {
    id: 5,
    title: 'Setting Goals That Feel Realistic',
    excerpt: 'Make your goals clear, achievable, and easier to follow.',
    content:
      'A realistic goal gives you direction without making you feel overwhelmed. Decide what you want to achieve, choose a small first step, and set a deadline. Review your progress and adjust your plan when necessary.',
    category: 'Personal Growth',
    date: 'October 20, 2026',
    readTime: '4 min read',
  },
]
