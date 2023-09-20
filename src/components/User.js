import { BsXSquareFill, BsXSquar, BsXLg } from "react-icons/bs";
import {
  BsCaretDown,
  BsCaretLeftFill,
  BsCaretDownFill,
  BsCaretLeft,
} from "react-icons/bs";
import FlexContainer from "./FlexContainer";
import { useState } from "react";
import AlbumsList from "./AlbumsList";

const User = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDelete = (e) => {
    // delete user
  };
  const handleAccordionClick = (e) => {
    // open or close content
    setIsOpen((isOpen) => {
      return !isOpen;
    });
  };

  return (
    <>
      <FlexContainer className="bg-slate-300 border-black border-solid py-4 px-4 mb-2 border-t-0 shadow-lg justify-between">
        <FlexContainer>
          <BsXSquareFill
            onClick={handleDelete}
            className="mr-4 cursor-pointer"
          ></BsXSquareFill>
          User {children}
        </FlexContainer>
        {isOpen ? (
          <BsCaretDown
            className="cursor-pointer"
            onClick={handleAccordionClick}
          ></BsCaretDown>
        ) : (
          <BsCaretLeft
            className="cursor-pointer"
            onClick={handleAccordionClick}
          ></BsCaretLeft>
        )}
      </FlexContainer>
      {isOpen && <AlbumsList>Albums Of {children}</AlbumsList>}
    </>
  );
};

export default User;
