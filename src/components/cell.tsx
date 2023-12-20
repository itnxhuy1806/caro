import { FC } from "react";

interface ICellProps {
  value: String | null;
  onClick: () => void;
}

export const Cell: FC<ICellProps> = ({ value, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer w-20 h-20 border flex justify-center items-center font-black text-3xl">
      {value}
    </div>
  );
};
