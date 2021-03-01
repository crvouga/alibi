import ReactPlayer, { YouTubePlayerProps } from "react-player/youtube";
import { IVideo } from "../../lib/domain";
import { AspectRatio } from "../@shared/aspect-ratio";

type IVideoPlayerProps = YouTubePlayerProps & {
  video: IVideo;
};

export const VideoPlayer = (props: IVideoPlayerProps) => {
  const { video, ...youtubePlayerProps } = props;

  return (
    <AspectRatio ratio={[16, 9]}>
      <ReactPlayer
        width="100%"
        height="100%"
        url={video.url}
        controls
        config={{
          playerVars: {
            modestBranding: 1,
          },
          embedOptions: {
            modestBranding: 1,
          },
        }}
        {...youtubePlayerProps}
      />
    </AspectRatio>
  );
};