import React, { useCallback, useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import s from "./Navigation.module.css"; 

type NavigationProps = {
  triggerClassName?: string;
  sidebarClassName?: string;
  closeButtonClassName?: string;
  triggerLabel?: React.ReactNode;
};

export const Navigation: React.FC<NavigationProps> = ({
  triggerClassName,
  sidebarClassName,
  closeButtonClassName,
  triggerLabel = "",
}) => {
  const [open, setOpen] = useState(false);

  const openDrawer = useCallback(() => setOpen(true), []);
  const closeDrawer = useCallback(() => setOpen(false), []);

  return (
    <>
      <div className={`${triggerClassName} ${s.trigger}`}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={openDrawer}
          className={s.menuButton}
        >
          <MenuIcon className={s.menuIcon} />
          <div className={s.triggerLabel}>{triggerLabel}</div>
        </IconButton>
      </div>

      <Drawer anchor="left" open={open} onClose={closeDrawer}>
        <div className={`${sidebarClassName} ${s.sidebar}`}>
          <ul className={s.navList}>
            <li>
              <Link to="/category/guitars" onClick={closeDrawer}>Guitars</Link>
            </li>
            <li>
              <Link to="/category/drums" onClick={closeDrawer}>Drums</Link>
            </li>
            <li>
              <Link to="/category/acoustic" onClick={closeDrawer}>Acoustic</Link>
            </li>
          </ul>

          <IconButton
            className={`${closeButtonClassName} ${s.closeButton}`}
            edge="start"
            color="inherit"
            aria-label="close"
            onClick={closeDrawer}
          >
            <CloseIcon className={s.closeIcon} />
          </IconButton>
        </div>
      </Drawer>
    </>
  );
};
