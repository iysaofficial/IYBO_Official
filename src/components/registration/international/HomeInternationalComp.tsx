import Link from "next/link"

const HomeInternationalComp = () =>{
    return(
        <>
        <section className="homeregist-section">
            <div className="wrapper">
            <div className="">
                <h2 className="">REGISTRATION FORM FOR INTERNATIONAL PARTICIPANTS</h2>
                <h3 className="">Choose Categories Competition for Registration IYBO 2026</h3>
            </div>
            </div>
            <div className="wrapper">
                <Link href="/registration/international/international-offline" className="">Offline</Link>
                <Link href="/registration/international/international-online" className="">Online</Link>
            </div>
        </section>
        </>
    )
}

export default HomeInternationalComp