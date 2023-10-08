import { twMerge } from "tailwind-merge";

export function StarBackground() {
  const numberOfStars = 20;

  const generateStars = () => {
    let stars = [];
    for (let i = 0; i < numberOfStars; i++) {
      const top = Math.random() * 100 + "%";
      const left = Math.random() * 100 + "%";
      const opacityValue = Math.random() * (0.8 - 0.4) + 0.4;
      const opacityClass = `opacity-${Math.round(opacityValue * 60)}`;
      const size = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

      stars.push(
        <div
          key={i}
          className={`absolute ${twMerge(
            `w-${size} h-${size} bg-[#FFFF] ${opacityClass} rounded-full`
          )} `}
          style={{ top: top, left: left }}
        ></div>
      );
    }
    return stars;
  };

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full ${twMerge(
        "z-0 pointer-events-none"
      )}`}
    >
      {generateStars()}
    </div>
  );
}
