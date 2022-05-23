import { Children } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

const DefaultTemplate = ({ children }) => {
    return(
        <>
            <Header />
            <div className="container">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default DefaultTemplate