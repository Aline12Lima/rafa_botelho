import React from "react";
import VideoHero from "../assets/videos/depil.mp4";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-12 w-full flex flex-col items-center px-6 text-center overflow-hidden">
      {/* 1. BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0">
        <video
          src={VideoHero}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-pink-950/40" />
      </div>

      {/* 2. CONTEÚDO */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <span className="text-rafa-pink text-xs tracking-[0.2em] uppercase mb-2 animate-fade-in">
          Bem-vinda ao
        </span>

        <h1 className="text-5xl md:text-7xl font-serif !text-rafa-rose mt-2 mb-6 drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)] animate-slide-up">
          Rafaela Botelho <br />
          <span className="italic font-light">Studio</span>
        </h1>
        <p className="text-white/90 bg-white/10 border border-white/10 max-w-sm mx-auto mb-10 p-4  leading-relaxed drop-shadow-md animate-slide-up delay-200 text-sm">
          Especialista em Sobrancelhas, <br /> Depilação e Cabelos. <br />
          Onde sua autoestima é a nossa prioridade.
        </p>

        {/* CONTAINER DOS BOTÕES - Flex Col para alinhar um abaixo do outro */}
        <div className="flex flex-col gap-4 items-center w-full animate-fade-in delay-500">
          <a
            href="https://wa.me/5577999281702"
            className="w-72 bg-rafa-rose text-white py-4 rounded-full font-semibold shadow-2xl hover:bg-pink-700 transition-all transform hover:scale-105 active:scale-95 flex justify-center items-center"
          >
            AGENDAR HORÁRIO
          </a>

          <a
            href="#servicos"
            className="w-72 bg-rafa-rose text-white py-4 rounded-full font-semibold shadow-2xl hover:bg-pink-700 transition-all transform hover:scale-105 active:scale-95 flex justify-center items-center"
          >
            NOSSOS SERVIÇOS
          </a>

          <a
            href="#endereco"
            className="w-72 bg-rafa-rose text-white py-4 rounded-full font-semibold shadow-2xl hover:bg-pink-700 transition-all transform hover:scale-105 active:scale-95 flex justify-center items-center"
          >
            ENDEREÇO
          </a>
        </div>
      </div>
    </section>
  );
};
