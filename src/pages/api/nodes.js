// pages/api/nodes.js

export default function handler(req, res) {
  const data = {
    nodes: [
      {
        id: 1,
        about: {
          name: 'Karun Kaushik',
          email: 'selin@getdelve.com',
          image:'/assets/men-1.png',
          title: 'Co-founder & CEO',
          role: 'Administrator',
          description: 'Responsible for overseeing the company’s day-to-day operations, ensuring operational excellence, and maintaining compliance with industry regulations.',
          progress: 70
        },
        management: [],
        todo:[]
      },
      {
        id: 2,
        about: {
          name: 'John Deo',
          email: 'john@getdelve.com',
          image:'/assets/men-2.png',
          title: 'Co-founder & COO',
          role: 'Member',
          description: 'Visionary leader responsible for driving strategic initiatives and business growth.',
          progress:50
        },
        management: [],
        todo:[]
      },
      {
        id: 3,
        about: {
          name: 'Vikram Rana',
          email: 'vikram@getdelve.com',
          image:'/assets/men-3.png',
          title: 'Engineer',
          role: 'Member',
          description: 'Building core platform features and ensuring product scalability.',
          progress:80
        },
        management: [],
        todo:[]
      },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '1', target: '3' },
    ],
  };

  res.status(200).json(data);
}
