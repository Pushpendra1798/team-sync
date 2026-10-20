
import React from "react";
import { Outlet } from "react-router";
import AsideNav from "../components/AsideNav";
import TopNav from "../components/TopNav";

const Home = () => {
    return (
        <div className="min-h-screen bg-(--bg-main) text-(--text-primary)">
            <AsideNav />

            <div className="min-h-screen ml-0 lg:ml-61">
                <TopNav />

                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Home;
