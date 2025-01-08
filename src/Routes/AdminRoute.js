import BookingPage from "../Page/AdminPage/BookingPage/BookingPage";
import HomeAdminPage from "../Page/AdminPage/HomeAdminPage/HomeAdminPage";
import DetailHotelPage from "../Page/AdminPage/HotelPage/DetailHotelPage";
import HotelPage from "../Page/AdminPage/HotelPage/HotelPage";
import ManagementAccountPage from "../Page/AdminPage/ManagementAccountPage/ManagementAccountPage";
import RouterLinkAdmin from "../Until/RouterLinkAdmin";

export const adminRoute=[
    {
        path: RouterLinkAdmin.Home,
        element: HomeAdminPage
    },
    {
        path: RouterLinkAdmin.Account,
        element: ManagementAccountPage
    },
    {
        path: RouterLinkAdmin.Hotel,
        element: HotelPage
    },
    {
        path: RouterLinkAdmin.Booking,
        element: BookingPage
    },
    {
        path: RouterLinkAdmin.HotelDetail,
        element: DetailHotelPage
    },

    
]