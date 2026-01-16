import { Hero } from "./componentes/Hero";
import { Services } from "./componentes/services";
import { Container } from "./componentes/Container";

function App() {
  return (
    <main className="min-h-screen font-sans selection:bg-rafa-rose selection:text-white">
      <Hero />
      <Services />
      <Container />

      {/* Footer Simples */}
      <footer className="py-10 bg-rafa-pink text-center text-pink-900/60 text-xs tracking-widest">
        <p>© 2026 RAFAELA BOTELHO STUDIO | Todos os Direitos Reservados </p>
      </footer>
    </main>
  );
}

export default App;
