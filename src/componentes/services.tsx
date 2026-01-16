import React from "react";
// Importações mantidas conforme seu arquivo
import ImgSobrancelha1 from "../assets/fotos/sobrancelha.png";
import ImgDepilacao from "../assets/fotos/depil.jpg";
import ImgCabelo from "../assets/fotos/escova.jpg";
import iconD from "../assets/icons/Group1.svg";
import iconH from "../assets/icons/Group2.svg";
import iconDD from "../assets/icons/Group.svg";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  icon: string;
}

const servicesData: ServiceItem[] = [
  {
    title: "Design de Sobrancelha",
    description:
      "Design personalizado e micropigmentação para um olhar marcante.",
    image: ImgSobrancelha1,
    icon: iconD,
  },
  {
    title: "Depilação",
    description: "Técnicas delicadas para uma pele lisa, macia e bem cuidada.",
    image: ImgDepilacao,
    icon: iconH,
  },
  {
    title: "Cabelos",
    description:
      "Alisamentos, tratamentos e cortes que expressam sua personalidade.",
    image: ImgCabelo,
    icon: iconDD,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="bg-rafa-pink px-6 pb-20">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-serif text-center text-rafa-rose py-12">
          Nossos Serviços
        </h2>

        {/* Container principal com gap para espaçar o início dos cards */}
        <div className="relative flex flex-col gap-12">
          {servicesData.map((service, index) => (
            <div
              key={index}
              // sticky + top-24: faz o card "travar" no topo enquanto o próximo sobe
              className="sticky top-24 w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-pink-100 flex flex-col"
              // O marginTop progressivo cria a profundidade de empilhamento
              style={{ marginTop: `${index * 20}px` }}
            >
              {/* Área da Imagem - h-72 é o tamanho ideal para mobile */}
              <div className="h-72 w-full overflow-hidden relative">
                <img
                  src={service.image}
                  className="w-full h-full object-cover"
                  alt={service.title}
                />

                {/* Badge do Ícone */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-20 p-2">
                  <img
                    src={service.icon}
                    alt="ícone"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Área de Texto - padding generoso para sofisticação */}
              <div className="p-8 text-center bg-white z-10">
                <h3 className="text-2xl font-serif text-pink-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="h-1 w-16 bg-rafa-rose mx-auto rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
