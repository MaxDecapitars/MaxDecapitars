import LocalesProvider from '@/context/LocalesContext';
import { SelectedPageProvider } from '@/context/SelectedPageContexts';
import { Theme } from '@/types/types';
import { useTheme } from '@/hooks/useTheme';
import Background from '@/components/Background';
import Header from '@/components/Header';
import Home from '@/components/Home';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <LocalesProvider>
      <SelectedPageProvider>
        <div className={`${theme === Theme.dark ? Theme.dark : ''}`}>
          <div className="relative min-h-screen overflow-hidden transition-colors dark:text-gray-50">
            <Header theme={theme} setTheme={setTheme} />
            <main className="mx-auto max-w-screen-laptop border-x-[1px] border-x-gray-50 px-5 transition-colors dark:border-x-gray-900 tablet:px-10">
              <Home />
              <About />
              <Projects />
              <Contact />
            </main>
            <Footer />
            <Background />
          </div>
        </div>
      </SelectedPageProvider>
    </LocalesProvider>
  );
}

export default App;
