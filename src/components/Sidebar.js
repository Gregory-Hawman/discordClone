import React from 'react';
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import { GiCirclingFish } from 'react-icons/gi';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <SidebarIcon icon={<GiCirclingFish size='28' />} />
        <Divider />
        <SidebarIcon icon={<BsFillLightningFill size='20' />} />
        <SidebarIcon icon={<FaFire size='24' />} />
        <SidebarIcon icon={<FaPoo size='24' />} />
        <Divider />
        <SidebarIcon icon={<BsPlus size='32' />} />
        <SidebarIcon icon={<BsGearFill size='22' />} />
    </div>
  );
};

function SidebarIcon({ icon, text = 'tooltip 💡' }) {
  return (
    <div className="sidebar-icon group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">
          {text}
        </span>
    </div>
  );
};

const Divider = () => {
  return (
    <hr className="sidebar-hr"/>
  )
}



