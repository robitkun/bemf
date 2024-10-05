/* eslint-disable react/prop-types */
import { useState } from 'react';
import { HoveredLink, Menu, MenuItem } from '../ui/navbar-menu';
import { cn } from '../../utils/cn';

export function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div
      className={cn(
        'fixed top-0 inset-x-0 w-full mx-auto z-50 flex items-center justify-between bg-black px-4 py-2 md:px-8',
        className
      )}
    >
      <h1 className="text-white">BEM FMIKOM </h1>
      <Menu setActive={setActive}>
        <HoveredLink to="/">Beranda</HoveredLink>
        <HoveredLink to="/tentang">Tentang</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Kabinet">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/struktur">Struktur</HoveredLink>{' '}
            <HoveredLink to="/presiden">Presiden</HoveredLink>
            <HoveredLink to="/wapres">Wakil Presiden</HoveredLink>
            <HoveredLink to="/departemen">Departemen</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Kabar">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/kabar-fmikom">Kabar Fmikom</HoveredLink>{' '}
            <HoveredLink to="/kabar-proker">Kabar Proker</HoveredLink>
          </div>
        </MenuItem>
        <HoveredLink to="/event">Event </HoveredLink>
      </Menu>
    </div>
  );
}
