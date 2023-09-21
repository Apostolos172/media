import { BsXSquareFill, BsXLg } from "react-icons/bs";
import { GoSync } from "react-icons/go";
import {
  BsCaretDown,
  BsCaretLeftFill,
  BsCaretDownFill,
  BsCaretLeft,
} from "react-icons/bs";
import FlexContainer from "./FlexContainer";
import { useState } from "react";
import AlbumsList from "./AlbumsList";
import { useThunk } from "../hooks/use-thunk";
import { deleteUser } from "../store";

const User = ({ children }) => {
  const [isDeletingUser, errorDeleteUser, updateDeleteUser] =
    useThunk(deleteUser);
  const [isOpen, setIsOpen] = useState(false);
  const handleDelete = (e) => {
    // delete user
    updateDeleteUser(children);
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
          {isDeletingUser ? (
            <GoSync className="animate-spin mr-4" />
          ) : (
            <BsXLg
              onClick={handleDelete}
              className="mr-4 cursor-pointer"
            ></BsXLg>
          )}
          User {children.name}
          {errorDeleteUser && "Error deleting the user"}
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
      {isOpen && <AlbumsList>Albums Of {children.name}</AlbumsList>}
    </>
  );
};

export default User;
