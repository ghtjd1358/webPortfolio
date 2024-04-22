import Introduce from "../components/Introduce"
import Stack from "../components/Stack"
import Work from "../components/Work"
import Address from "../components/Address"
import '../index.css';


export default function Home(){
    return(
        <>
            <div className="main">
                <Introduce/>
                <Stack/>
                <Work/>
                <Address/>
            </div>
        </>
    )
}