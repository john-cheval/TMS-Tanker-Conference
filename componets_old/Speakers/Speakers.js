// app/components/Speakers.js
import SpeakerCard from "./SpeakersCard";

const speakers = [
  {
    name: "Clive Woodbridge",
    role: "Conference Chairman & Editor",
    img: "https://as1.ftcdn.net/v2/jpg/02/99/04/20/1000_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
  },
  {
    name: "Clive Woodbridge",
    role: "Conference Chairman & Editor",
    img: "https://as1.ftcdn.net/v2/jpg/02/99/04/20/1000_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
  },
  {
    name: "Clive Woodbridge",
    role: "Conference Chairman & Editor",
    img: "https://as1.ftcdn.net/v2/jpg/02/99/04/20/1000_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
  },
  {
    name: "Clive Woodbridge",
    role: "Conference Chairman & Editor",
    img: "https://as1.ftcdn.net/v2/jpg/02/99/04/20/1000_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
  },
  {
    name: "Clive Woodbridge",
    role: "Conference Chairman & Editor",
    img: "https://as1.ftcdn.net/v2/jpg/02/99/04/20/1000_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
  },
  {
    name: "Clive Woodbridge",
    role: "Conference Chairman & Editor",
    img: "https://as1.ftcdn.net/v2/jpg/02/99/04/20/1000_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
  },
  {
    name: "Clive Woodbridge",
    role: "Conference Chairman & Editor",
    img: "https://as1.ftcdn.net/v2/jpg/02/99/04/20/1000_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
  },
  {
    name: "Clive Woodbridge",
    role: "Conference Chairman & Editor",
    img: "https://as1.ftcdn.net/v2/jpg/02/99/04/20/1000_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
  },
  {
    name: "Clive Woodbridge",
    role: "Conference Chairman & Editor",
    img: "https://as1.ftcdn.net/v2/jpg/02/99/04/20/1000_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
  },
  {
    name: "Clive Woodbridge",
    role: "Conference Chairman & Editor",
    img: "https://as1.ftcdn.net/v2/jpg/02/99/04/20/1000_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
  },
];

export default function Speakers() {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="font-bold text-[45px] gradient-text">Speakers</h2>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-blue-600 underline text-base">
            View All
          </a>
          <a href="#" className="hover:text-blue-600 underline text-base">
            Become a Speaker
          </a>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-8">
        {speakers.map((speaker, idx) => (
          <SpeakerCard key={idx} {...speaker} />
        ))}
      </div>
    </section>
  );
}
