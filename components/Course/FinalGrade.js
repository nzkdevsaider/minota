import { calculateGrade } from "@minota/lib/utils/calculateGrade";

const FinalGrade = ({ items, size }) => {
  const finalGrade = calculateGrade(items);
  let letter = finalGrade.letter;

  if (finalGrade.isEmpty) {
    letter = "N/A";
  }

  if (size === "small") {
    return <div className="badge badge-primary">Nota final: {letter}</div>;
  }

  return (
    <div className="flex flex-row items-center justify-center bg-primary rounded-full w-40 h-14 gap-4 shadow-md">
      <span className="text-sm">Nota final</span>
      <span className="font-extrabold text-4xl">{letter}</span>
    </div>
  );
};

export default FinalGrade;
