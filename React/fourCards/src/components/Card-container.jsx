import Card from "./Card";
import IconSupervisor from "../assets/images/icon-supervisor.svg";
import IconTeamBuilder from "../assets/images/icon-team-builder.svg";
import IconKarma from "../assets/images/icon-Karma.svg";
import IconCalculator from "../assets/images/icon-calculator.svg";

const CardContainer = () => {
  const services = [
    {
      id: 1,
      title: "Supervisor",
      description:
        "Supervisa la actividad para identificar obstáculos en el proyecto",
      img: IconSupervisor,
      color: "bg-Cyan-500",
    },
    {
      id: 2,
      title: "Constructor de Equipos",
      description:
        "Analiza nuestra red de talento para crear el equipo óptimo para tu proyecto",
      img: IconTeamBuilder,
      color: "bg-Red-500",
    },
    {
      id: 3,
      title: "Karma",
      description:
        "Evalúa regularmente nuestro talento para garantizar la calidad",
      img: IconKarma,
      color: "bg-Orange-500",
    },
    {
      id: 4,
      title: "Calculadora",
      description:
        "Utiliza datos de proyectos anteriores para ofrecer mejores estimaciones de entrega",
      img: IconCalculator,
      color: "bg-Blue-500",
    },
  ];
  return (
    <section className="lg:flex lg:flex-row lg:gap-7 lg:w-[1200px] lg:items-center">
      <Card {...services[0]} />
      <div>
        <Card {...services[1]} />
        <Card {...services[2]} />
      </div>
      <Card {...services[3]} />
    </section>
  );
};

export default CardContainer;
