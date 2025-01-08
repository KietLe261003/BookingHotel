import { IconAccount, IconBooking, IconDashBoard, IconHotel, IconLogout, IconProfile, IconSetting } from "../../../Comomon/Icons/IconSlideBarAdmin";
import RouterLinkAdmin from "../../../Until/RouterLinkAdmin";
import MenuCard from "./MenuCard";

const Sidebar = () => {
  const menuItems1 = [
    { icon: <IconDashBoard/>, label: "Home", link: RouterLinkAdmin.Home },
    { icon: <IconAccount/>, label: "Account", link: RouterLinkAdmin.Account},
    { icon: <IconHotel/>, label: "Hotel", link: RouterLinkAdmin.Hotel },
    { icon: <IconBooking/>, label: "Booking", link: RouterLinkAdmin.Booking },
  ];

  const menuItems2 = [
    { icon: <IconProfile/>, label: "Profile", link: RouterLinkAdmin.Home  },
    { icon: <IconSetting/>, label: "Settings", link: RouterLinkAdmin.Home  },
    { icon: <IconLogout/>, label: "Log out", link: RouterLinkAdmin.Home  },
  ];

  return (
    <div className="w-2/12 mr-6">
      <MenuCard items={menuItems1} />
      <MenuCard items={menuItems2} />
    </div>
  );
};
export default Sidebar;
