import Button, { ButtonProps } from "@material-ui/core/Button";
import Card, { CardProps } from "@material-ui/core/Card";
import CardHeader, { CardHeaderProps } from "@material-ui/core/CardHeader";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { IVideo } from "../../lib/domain";
import { VideoPlayer } from "../atoms/video-player";

export const WatchOnYotubeButton = (props: ButtonProps) => {
  return (
    <Button startIcon={<YouTubeIcon />} fullWidth size="large" {...props}>
      Watch On YouTube
    </Button>
  );
};

export const VideoPlayerCard = (
  props: CardProps & {
    playing?: boolean;
    video: IVideo;
    CardHeaderProps?: CardHeaderProps;
  }
) => {
  const { playing, video, CardHeaderProps, ...CardProps } = props;

  return (
    <Card {...CardProps}>
      <VideoPlayer playing={Boolean(playing)} video={video} />
      <CardHeader title={video.name} subheader="Video" {...CardHeaderProps} />
    </Card>
  );
};
