import React from "react";
import { MapPin, Navigation } from "lucide-react";

export const Container: React.FC = () => {
  // Link direto para abrir no GPS do celular do cliente
  const googleMapsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=-13.4070,-44.1945";

  return (
    <section id="endereco" className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-rafa-pink rounded-3xl p-8 md:p-12 shadow-xl border border-pink-100 flex flex-col md:flex-row items-center gap-10">
          {/* Lado Esquerdo: Informações */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-serif text-rafa-rose mb-6">
              Onde Estamos
            </h2>

            <div className="flex items-start justify-center md:justify-start gap-3 mb-4">
              <MapPin className="text-rafa-rose shrink-0" size={24} />
              <address className="not-italic text-gray-700 leading-relaxed">
                Rua Três de Agosto
                <br />
                Centro, São Félix do Coribe
                <br />
                Bahia - Brasil
              </address>
            </div>

            <p className="text-sm text-gray-500 mb-8 italic">
              Atendimento com hora marcada para sua total exclusividade.
            </p>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-rafa-rose text-white px-10 py-4 rounded-full font-semibold hover:bg-pink-700 transition-all shadow-lg transform active:scale-95"
            >
              <Navigation size={20} />
              COMO CHEGAR
            </a>
          </div>

          {/* Lado Direito: Mapa Interativo */}
          <div className="w-full md:w-1/2 h-64 bg-pink-100 rounded-2xl overflow-hidden shadow-inner border-2 border-white">
            <iframe
              title="Mapa Localização"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d8907.946479814616!2d-44.19801403297343!3d-13.411689830996975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDI0JzI1LjIiUyA0NMKwMTEnNDAuNCJX!5e1!3m2!1spt-BR!2sbr!4v1768521571115!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container;
