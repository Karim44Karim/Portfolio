// App.jsx
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll scroll-smooth bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <section className="snap-start"><Hero /></section>
      <section className="snap-start"><Projects /></section>
      <section className="snap-start"><Contact /></section>
    </div>
  );
}
export default App;
