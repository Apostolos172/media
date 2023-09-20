import Album from "./Album";

const AlbumsList = (props) => {
  return (
    <div className="flex flex-col px-4 mx-4 my-2 border-black border-x">
      <div>{props.children}</div>
      <Album></Album>
      <Album></Album>
    </div>
  );
};

export default AlbumsList;
