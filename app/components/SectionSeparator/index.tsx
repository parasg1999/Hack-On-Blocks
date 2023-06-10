import prizes from "../../assets/images/separators/prizes.svg";
import ideas from "../../assets/images/separators/ideas.svg";
import partners from "../../assets/images/separators/partners.svg";
import speakers from "../../assets/images/separators/speakers.svg";

import Image from "next/image";

interface Props {
  name: string;
}

const images: Record<string, any> = {
  prizes,
  ideas,
  partners,
  speakers,
};

export default function SectionSeparator(props: Props) {
  return (
    <>
      <Image
        src={images[props.name]}
        width={240}
        alt="section separator"
        className="mb-10"
      />
    </>
  );
}
