import { makeStyles } from "@material-ui/core";
import BottomNavigation, {
  BottomNavigationProps,
} from "@material-ui/core/BottomNavigation";
import BottomNavigationAction, {
  BottomNavigationActionProps,
} from "@material-ui/core/BottomNavigationAction";
import Link from "next/link";
import { useRouter } from "next/router";
import { forwardRef } from "react";
import { NAVIGATION_ACTIONS, NAV_BAR_HEIGHT } from "./navigation-constants";

const useStylesBottomNavigation = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    height: NAV_BAR_HEIGHT,
    zIndex: theme.zIndex.appBar,
    backgroundColor: "inherit",
  },
}));

const useStylesBottomNavigationAction = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: theme.palette.text.primary,
  },
}));

export const NavigationAction = ({
  href,
  ...BottomNavigationActionProps
}: BottomNavigationActionProps & { href: string }) => {
  const classes = useStylesBottomNavigationAction();
  return (
    <Link href={href}>
      <BottomNavigationAction
        classes={classes}
        {...BottomNavigationActionProps}
      />
    </Link>
  );
};

export const NavigationActionBar = forwardRef<
  HTMLDivElement | null,
  BottomNavigationProps
>((props, ref) => {
  const router = useRouter();
  const classes = useStylesBottomNavigation();

  const selected = NAVIGATION_ACTIONS.find(
    (action) => router.pathname === action.pathname
  );

  return (
    <BottomNavigation
      ref={ref}
      showLabels
      value={selected?.pathname}
      classes={classes}
      {...props}
    >
      {NAVIGATION_ACTIONS.map(({ pathname, Icon, label }) => (
        <NavigationAction
          key={pathname}
          value={pathname}
          href={pathname}
          label={label}
          icon={<Icon />}
        />
      ))}
    </BottomNavigation>
  );
});
