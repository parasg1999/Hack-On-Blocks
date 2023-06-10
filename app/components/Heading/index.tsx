import localFont from "next/font/local";

// const quinqueFive = localFont({
//   src: "../../assets/fonts/QuinqueFive.ttf",
// });

interface Props {
  name: string;
}

export default function Heading(props: Props) {
  return <div className="font-quinque">{props.name}</div>;
}
