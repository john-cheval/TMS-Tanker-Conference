import Image from "next/image";

const sponsors = [
  { name: "AD Ports Group", img: "/sponsors/adports.png", tag: "Gold Sponsor" },
  {
    name: "DP World",
    img: "/sponsors/dpworld.png",
    tag: "Gold & Event Catalogue",
  },
  { name: "ADNOC", img: "/sponsors/adnoc.png", tag: "Gold Sponsor" },
  {
    name: "Kuwait Ports",
    img: "/sponsors/kuwaitports.png",
    tag: "Silver Sponsor",
  },
  { name: "Bahri", img: "/sponsors/bahri.png", tag: "Lanyards & Badges" },
  { name: "Asyad", img: "/sponsors/asyad.png", tag: "Multimedia" },
  { name: "Saifee", img: "/sponsors/saifee.png", tag: "Delegate Lunch" },
  { name: "Jome", img: "/sponsors/jome.png", tag: "Conference Registration" },
  { name: "LR", img: "/sponsors/lr.png", tag: "Silver Sponsor" },
  { name: "Marine TM", img: "/sponsors/marinetm.png", tag: "Silver Sponsor" },
];

const associations = [
  { name: "Maritime SheEO", img: "/sponsors/maritime.png" },
  { name: "Ain", img: "/sponsors/ain.png" },
  { name: "SCLG", img: "/sponsors/sclg.png" },
  { name: "UAE Assoc", img: "/sponsors/uae.png" },
  { name: "WISTA UAE", img: "/sponsors/wista.png" },
  { name: "Conqueror", img: "/sponsors/conqueror.png" },
];

const mediaPartners = [
  { name: "Manifold Times", img: "/sponsors/manifold.png" },
  { name: "Marex", img: "/sponsors/marex.png" },
  { name: "Future Fuels", img: "/sponsors/future.png" },
  { name: "Matrix Maritime Media", img: "/sponsors/matrix.png" },
  { name: "Arabic Media", img: "/sponsors/arabic.png" },
  { name: "World Oils", img: "/sponsors/worldoils.png" },
];

export default function Sponsors() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-13">
        <h2 className="font-bold text-[45px] gradient-text">Our Sponsors</h2>
        <button className="px-4 py-2 border border-[#E2E2E2] h-[53px] text-[#0C1E23] hover:bg-gray-100">
          View all sponsor
        </button>
      </div>

      {/* Sponsors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {sponsors.map((s, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="w-[234px] h-[234px] relative rounded-full border border-[#E2E2E2] flex items-center justify-center overflow-hidden bg-white shadow">
              <Image
                src={s.img}
                alt={s.name}
                fill
                className="object-contain p-11"
              />
            </div>
            <p className="mt-5 text-sm text-[var(--sponsor-text)]">{s.tag}</p>
          </div>
        ))}
      </div>

      {/* Supporting Associations */}
      <div className="flex justify-between items-center mt-16 mb-8">
        <h3 className="text-2xl font-semibold gradient-text">
          Supporting Associations
        </h3>
        <button className="font-medium hover:underline">View All</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
        {associations.map((a, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-[191px] h-[191px] relative rounded-full border border-[#E2E2E2] flex items-center justify-center overflow-hidden bg-white shadow">
              <Image
                src={a.img}
                alt={a.name}
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Media Partners */}
      <div className="flex justify-between items-center mt-16 mb-8">
        <h3 className="text-2xl font-semibold gradient-text">Media Partners</h3>
        <button className="font-medium hover:underline">View All</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {mediaPartners.map((m, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-[191px] h-[191px] relative rounded-full border border-[#E2E2E2] flex items-center justify-center overflow-hidden bg-white shadow">
              <Image
                src={m.img}
                alt={m.name}
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
