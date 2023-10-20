// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'Data Science'],
  },
  {
    title: 'PyTorch',
    competency: 4,
    category: ['Machine Learning', 'Python', 'Data Science'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 4,
    category: ['Data Science', 'Python', 'Machine Learning'],
  },
  {
    title: 'Numpy',
    competency: 4,
    category: ['Data Science', 'Machine Learning', 'Python'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },

  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python', 'Machine Learning'],
  },
  {
    title: 'Spark',
    competency: 2,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'PyQT',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Cloud', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 1,
    category: ['Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 3,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Flask',
    competency: 2,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Google Cloud Platform',
    competency: 3,
    category: ['Tools', 'Cloud'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python', 'Machine Learning'],
  },
  {
    title: 'Typescript',
    competency: 1,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'PowerBI',
    competency: 2,
    category: ['Data Science', 'BI'],
  },
  {
    title: 'Azure',
    competency: 3,
    category: ['Data Engineering', 'Data Science', 'Machine Learning', 'Cloud'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
