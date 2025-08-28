import Link from "next/link"

const HomeRegistrationComp = () =>{
    return(
        <>
        <section className="homeregist-section">
            <div className="wrapper">
            <div className="">
                <h2 className="">REGISTRATION FORM</h2>
                <h3 className="">Choose Categories Participant for Registration IYBO 2026</h3>
            </div>
            </div>
            <div className="wrapper">
                <Link href="/registration/international" className="">International Participant</Link>
                <Link href="/registration/national" className="">Indonesian Participant</Link>
            </div>
        </section>
        </>
    )
}

export default HomeRegistrationComp