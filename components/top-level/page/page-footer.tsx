import { IPlatformLink } from "@data-access";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Button, CardActionArea, PlatformCard, UniformGrid } from "@ui";
import { createLinearGradient } from "@utility";
import { routes } from "../../../routes";

const useStyles = makeStyles((theme) => ({
  root: {
    background: createLinearGradient({
      start: theme.palette.primary.main,
      end: theme.palette.primary.dark,
    }),
  },
}));

export const Footer = ({
  platformLinks,
  websiteAuthor,
}: {
  platformLinks: IPlatformLink[];
  websiteAuthor: {
    name: string;
    url: string;
  };
}) => {
  const classes = useStyles();

  return (
    <Box width="100vw" paddingY={2} className={classes.root}>
      <Container component="footer">
        <Box display="flex" flexDirection="column" alignItems="center">
          <UniformGrid
            ContainerProps={{ justify: "center" }}
            ItemProps={{ xs: 6, sm: 4, md: 2 }}
          >
            {platformLinks.map((platformLink) => (
              <CardActionArea key={platformLink.url} href={platformLink.url}>
                <PlatformCard name={platformLink.platform.name} />
              </CardActionArea>
            ))}
          </UniformGrid>

          <Box color="text.secondary">
            <Button size="small" color="inherit" href={websiteAuthor.url}>
              Built By {websiteAuthor.name}
            </Button>
          </Box>

          <Box color="text.secondary">
            <Button
              size="small"
              color="inherit"
              href={routes.contentManagementDashboard()}
            >
              Admin
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};