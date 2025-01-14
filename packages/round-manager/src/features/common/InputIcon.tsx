import { InputType } from "../api/types";
import { MdOutlineShortText, MdCheckBox, MdArrowDropDownCircle, MdRadioButtonChecked, MdNotes } from "react-icons/md";
import { AiOutlineMail, AiOutlineWallet } from "react-icons/ai";
import { ReactNode } from "react";

type InputIconProps = {
  type?: InputType | string;
  className?: string;
  size?: number;
};

type IconsType = {
  [key in InputType]?: ReactNode;
}

export const InputIcon = ({ type, className, size }: InputIconProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const style = {
    fontSize: size ? size : 20
  }
  const icons: IconsType = {
    "email": <AiOutlineMail style={style} />,
    "address": <AiOutlineWallet style={style} />,
    "short-answer": <MdOutlineShortText style={style} />,
    "paragraph": <MdNotes style={style} />,
    "multiple-choice": <MdRadioButtonChecked style={style} />,
    "checkbox": <MdCheckBox style={style} />,
    "dropdown": <MdArrowDropDownCircle style={style} />,
  } as const;

  return (
    <span className={`flex items-center ${className}`}>
      {type && type in icons ? icons[type as keyof IconsType] : <></>}
    </span>
  );
};
