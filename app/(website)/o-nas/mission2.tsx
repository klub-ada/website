"use client";

import { PageWrapper } from "@/app/components/page-wrapper";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const sections = [
  {
    title: "Misija",
    text: "Navduševati ženske nad tehnologijo ter jim nuditi podporo in vire za razvoj veščin, mreženje ter rast na kariernem področju.",
    paragraph:
      "Naše aktivnosti so zasnovane tako, da ustvarjajo varno in spodbudno okolje, kjer lahko članice delijo ideje, izkušnje in se vključujejo v pogovore.",
    image: "/assets/mission.png",
  },
  {
    title: "Naša zgodba začetka",
    text: "Klub Ada je nastal iz želje po povezovanju žensk na področju, kjer smo pogosto v manjšini, kar prinaša edinstvene izzive in dileme.",
    paragraph:
      "Zaradi teh izkušenj se pogosto počutimo, kot da v ta prostor ne spadamo. Z našimi aktivnostmi želimo poudariti, da je tehnologija prostor, kjer smo dobrodošle in kjer je naš glas pomemben.",
    image: "/assets/beginning-story.png",
  },
  {
    title: "Od kje ime Klub Ada?",
    text: "Navdih za ime smo našli v pionirki računalništva Adi Lovelace – matematičarki, pisateljici in prvi programerki.",
    paragraph:
      "V 19. stoletju je za analitični stroj Charlesa Babbaga, predhodnika sodobnega računalnika, zapisala prvi algoritem. Ada Lovelace je dokaz, da so ženske že od začetka sooblikovale tehnologijo, njen vpliv pa nas navdihuje tudi danes, ko skupaj gradimo prihodnost.",
    image: "/assets/ada-name.png",
  },
];
export function Mission2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollY } = useScroll();
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const newActiveIndex = sectionRefs.current.findIndex((ref) => {
        if (!ref) return false;
        const rect = ref.getBoundingClientRect();
        return;
        rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2;
      });
      if (newActiveIndex !== -1 && newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <PageWrapper>
      <div className="flex">
        <div className="w-48"></div>
        <div className="fixed left-0 top-0 w-1/2 h-screen">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeIndex === index ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={section.image}
                alt={section.text}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
            </motion.div>
          ))}
        </div>
        <div className="ml-auto w-1/2">
          {sections.map((section, index) => {
            const y = useTransform(
              scrollY,
              [index * window.innerHeight, (index + 1) * window.innerHeight],
              [0, -100]
            );
            return (
              <motion.div
                key={index}
                ref={(el) => {
                  if (el) sectionRefs.current[index] = el;
                }}
                className="h-screen flex flex-col justify-center p-8"
                style={{ y }}
              >
                <motion.h2 className="text-4xl font-bold text-gray-800 mb-4">
                  {section.title}
                </motion.h2>
                <motion.h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  {section.title}
                </motion.h3>
                <motion.p className="text-lg text-gray-600">
                  {section.paragraph}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
