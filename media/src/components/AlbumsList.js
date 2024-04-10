import { useFetchAlbumsQuery,useAddAlbumMutation } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results]=useAddAlbumMutation();

  const handleAddAlbum=()=>{
    addAlbum(user)
  };

  let content;
  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error loading albums...</div>;
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>;
      return (
        <ExpandablePanel key={album.id} header={header}>
          List of photis in the album
        </ExpandablePanel>
      );
    });
  }

  console.log(data, error, isLoading);

  return (
    <div>
      <div>Albums for {user.name}
      <Button onClick={handleAddAlbum}>+ New Album</Button>

      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
