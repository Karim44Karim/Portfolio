// Projects.jsx
const projects = [
  { title: 'Portfolio Template', tech: 'React, Tailwind, SPA', link: 'https://react-assignment2-tailwindd.vercel.app/' },
  { title: 'Games Explorer', tech: 'React, Bootstrap', link: 'https://karim44karim.github.io/Assignment6-JavaScript-GamesDataBase-OOP-API/' },
  { title: 'Weather App', tech: 'Javascript, API, Bootstrap', link: 'https://karim44karim.github.io/Javascript-Assignment5-WeatherApp/' },
  { title: 'Smart Login System', tech: 'Javascript, Bootstrap', link: 'https://karim44karim.github.io/Javascript-Assignment4/' },
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center py-16">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {projects.map((proj, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold">{proj.title}</h3>
            <p className="text-sm text-gray-500">{proj.tech}</p>
            <a href={proj.link} className="text-blue-500 hover:underline">View</a>
          </div>
        ))}
      </div>
    </div>
  );
}
