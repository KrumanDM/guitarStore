// Navigatipn.tsx
import React, { useCallback, useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

type NavigationProps = {
  /** Класс-обёртка для кнопки-триггера (чтобы применить s.header__storeContainer) */
  triggerClassName?: string;
  /** Класс контейнера внутри Drawer (чтобы применить s.header__sidebar) */
  sidebarClassName?: string;
  /** Класс для кнопки закрытия (чтобы применить s.close__button) */
  closeButtonClassName?: string;
  /** Текст рядом с иконкой меню */
  triggerLabel?: React.ReactNode;
};

export const Navigation: React.FC<NavigationProps> = ({
  triggerClassName,
  sidebarClassName,
  closeButtonClassName,
  triggerLabel = "Категории",
}) => {
  const [open, setOpen] = useState(false);

  const openDrawer = useCallback(() => setOpen(true), []);
  const closeDrawer = useCallback(() => setOpen(false), []);

  return (
    <>
      <div className={triggerClassName}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={openDrawer}
        >
          <MenuIcon />
          <div style={{ fontSize: 16 }}>{triggerLabel}</div>
        </IconButton>
      </div>

      <Drawer anchor="left" open={open} onClose={closeDrawer}>
        <div className={sidebarClassName}>
          <ul>
            <li>
              <Link to="/guitars" onClick={closeDrawer}>Guitars</Link>
            </li>
            <li>
              <Link to="/drums" onClick={closeDrawer}>Drums</Link>
            </li>
            <li>
              <Link to="/acoustic" onClick={closeDrawer}>Acoustic</Link>
            </li>
          </ul>

          <IconButton
            className={closeButtonClassName}
            edge="start"
            color="inherit"
            aria-label="close"
            onClick={closeDrawer}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </Drawer>
    </>
  );
};
