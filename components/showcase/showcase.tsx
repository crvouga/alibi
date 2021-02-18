import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { IShowcase } from "../../lib/contracts";
import { AspectRatio } from "../aspect-ratio";

export type IShowcaseProps = {
  showcase: IShowcase;
};

const useStyles = makeStyles((theme) => ({
  imageWrapper: {
    paddingY: theme.spacing(2, 0),
  },
}));

export const Showcase = (props: IShowcaseProps) => {
  const { showcase } = props;

  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} direction="column" container justify="center">
        <Grid item>
          <Typography variant="h1" gutterBottom>
            {showcase.title}
          </Typography>
        </Grid>
        <Grid>
          <Button
            color="primary"
            variant="contained"
            size="large"
            href={showcase.action.url}
          >
            {showcase.action.title}
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Container maxWidth="xs" disableGutters>
          <AspectRatio ratio={[1, 1]}>
            <Image alt={showcase.title} layout="fill" src={showcase.image} />
          </AspectRatio>
        </Container>
      </Grid>
    </Grid>
  );
};
