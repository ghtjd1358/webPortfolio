import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Layout(){
    return (
        <>
            <div id="wrap">
                <Header/>
                <main>
                    <div className="content">
                        <Outlet/>
                    </div>              
                </main>
                <Footer/>
            </div>
        </>
    )
}