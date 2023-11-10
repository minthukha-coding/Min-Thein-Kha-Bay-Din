import { Link } from "react-router-dom";
import { QUESTIONS } from "../data";

const Question = () => {
  return (
    <div className="flex flex-col w-full md:h-96 overflow-y-auto items-start my-6   scrollbar-thumb-amber-700 scrollbar-track-gray-100 scrollbar-thin">
      {QUESTIONS.questions.map((q) => (
        <Link
          to={`squares/${q.questionNo}`}
          key={q.questionNo}
          state={q.questionName}
          className="cursor-pointer p-3 text-amber-700 text-start "
        >
          <span className="mr-2 text-base">{q.questionNo}.</span>
          {q.questionName}
        </Link>
      ))}
    </div>
  );
};

export default Question;
