import View360Component from "../Components/View360Component";
import AboutPage from "../Page/ClientPage/AboutPage/AboutPage";
import BlogPage from "../Page/ClientPage/BlogPage/BlogPage";
import DetailBlogPage from "../Page/ClientPage/BlogPage/DetailBlogPage";
import HomePage from "../Page/ClientPage/HomePage/HomePage";
import LoginPage from "../Page/ClientPage/AuthPage/LoginPage";
import ProfilePage from "../Page/ClientPage/ProfilePage/ProfilePage";
import ServicePage from "../Page/ClientPage/ServicesPage/ServicePage";
import DetailTour from "../Page/ClientPage/TourPackagePage/DetailTour";
import TourPackagePage from "../Page/ClientPage/TourPackagePage/TourPackagePage";
import View360Page from "../Page/ClientPage/TourPackagePage/View360Page";
import RouterLink from "../Until/RouterLink";

export const clientRoute=[
    {
        path: RouterLink.Home,
        element: HomePage
    },
    {
        path: RouterLink.About,
        element: AboutPage
    },
    {
        path: RouterLink.Services,
        element: ServicePage
    },
    {
        path: RouterLink.TourPackages,
        element: TourPackagePage
    },
    {
        path: RouterLink.Blog,
        element: BlogPage
    },
    {
        path: RouterLink.DetailBlog,
        element: DetailBlogPage
    },
    {
        path: RouterLink.DetailTour,
        element: DetailTour
    },
    {
        path: RouterLink.Profile,
        element: ProfilePage
    },
    {
        path: RouterLink.View360,
        element: View360Component
    },
]