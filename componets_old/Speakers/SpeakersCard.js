// app/components/SpeakerCard.js
import Image from "next/image";

export default function SpeakerCard({ name, role, img }) {
  return (
    <div
      className="relative p-10 w-auto h-auto flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
      style={{
        border: "2px solid transparent",
        borderImageSource: "linear-gradient(180deg, #38C7FF 0%, #00A25E 100%)",
        borderImageSlice: 1,
      }}
    >
      {/* Speaker Image with gradient border */}
      <div
        className="relative w-[141px] h-[138px] shadow-md flex items-center justify-center"
        style={{
          border: "4px solid transparent",
          borderRadius: "100%",
          background:
            "linear-gradient(#fff, #fff) padding-box, linear-gradient(180deg, #38C7FF 0%, #00A25E 100%) border-box",
        }}
      >
        <Image
          src={img}
          alt={name}
          width={111}
          height={111}
          loading="lazy"
          className="object-cover w-full h-full rounded-full"
        />

        {/* Top-left L-shape */}
        <div
          className="absolute -top-2 -left-2 w-8 h-8"
          style={{
            borderTop: "10px solid",
            borderLeft: "10px solid",
            borderImageSource:
              "linear-gradient(182.18deg, #00A25D 1.83%, rgba(255,255,255,0) 118.4%)",
            borderImageSlice: 1,
          }}
        />

        {/* Bottom-right L-shape */}
        <div
          className="absolute -bottom-2 -right-2 w-8 h-8"
          style={{
            borderBottom: "10px solid",
            borderRight: "10px solid",
            borderImageSource:
              "linear-gradient(171.95deg, #0078BA 7.99%, rgba(255,255,255,0) 108.31%)",
            borderImageSlice: 1,
          }}
        />
      </div>

      {/* Speaker Info */}
      <h3 className="text-[var(--sponsor-text)] mt-5 font-bold text-base uppercase">
        {name}
      </h3>
      <p className="text-[#0C1E23] text-base mt-1">{role}</p>
    </div>
  );
}
