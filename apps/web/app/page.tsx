import Video from "ui/Video";
import VideoPlayer from "ui/VideoPlayer";

const Page: React.FC = () => {
  return (
    <>
      <div>
        {/* <VideoPlayer
          src="https://www.youtube.com/embed/eyX5zUI3oq0"
          width={640}
          height={360}
        /> */}
        <Video src="https://www.youtube.com/embed/eyX5zUI3oq0?autoplay=0&mute=1&loop=1&playlist=Y8JFxS1HlDo&controls=0&enablejsapi=1&version=3&playerapiid=ytplayer" />
      </div>
    </>
  );
};

export default Page;
