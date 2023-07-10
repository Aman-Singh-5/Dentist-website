import { Appointment } from "./Appointment"
import { Articles } from "./Articles"
import { Banner } from "./Banner"
import { Contact } from "./Contact"
import { Doctor } from "./Doctor"
import { Features } from "./Features"
import { Footer } from "./Global/Footer"
import { Process } from "./Process"
import { Review } from "./Review"
import { Service } from "./Service"
import { Team } from "./Team"


export const Landing = () => {
    return(
        <>
            <Banner/>
            <Service/>
            <Doctor/>
            <Features/>
            <Process/>
            <Contact/>
            <Team/>
            <Appointment/>
            <Articles/>
            <Review/>
            <Footer/>
        </>
    )
}