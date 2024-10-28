import { useState } from "react"
import Logo from "../../assets/Logo.svg"
import { Link } from "react-router-dom";

const HeroIcon = () => {
    const [tooltipVisible, setTooltipVisible] = useState(false);
    // Put the svg here
    return <div className="relative inline-block">
            <img 
                src={Logo} 
                alt="Logo" 
                className="mx-auto cursor-pointer"
                onMouseEnter={() => setTooltipVisible(true)}
                onMouseLeave={() => setTooltipVisible(false)} 
            />
            {tooltipVisible && (
                <div className="absolute bottom-full mb-2 w-32 p-2 text-center text-black bg-white rounded-md shadow-lg">
                    Coming soon !
                </div>
            )}
    </div>
}

const LandingPage = () => {
    const [email,setEmail] = useState("");
    const [emailResponse, setEmailResponse] = useState("");
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const EMAIL_COLLECTOR_URL = import.meta.env.VITE_FREE_SHEETS_EMAIL_COLLECTOR_SCRIPT
    
    const emailHandler = async () => {
        // Write the function logic with what you want to do with the email
        try {
            const response = await fetch(EMAIL_COLLECTOR_URL, {
                method: 'POST',
                body: new URLSearchParams({email}),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
            const result = await response.json();
            if (result.status === 'success') {
                setEmailResponse("Thanks for subscribing 🎉");
                setEmailSubmitted(true);
            } else { 
                alert("Something went wrong while Subscribing !")
            }
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div className="h-full w-full flex justify-center items-center">
        <main className="mx-4">
            <div className="flex justify-center items-center">
                <HeroIcon />
            </div>
            {!emailSubmitted ? (
                <>
                    <h1 className="text-text text-40px mb-4 text-center font-bold tracking-[-0.08em] w-[460px] mx-auto"> Making your lives easier  <span className="text-text-light">❤️</span></h1>
                    <section className="flex justify-between gap-x-2 w-[460px] mx-auto">
                        <aside className="border rounded-md border-border flex grow overflow-clip">
                            <input type="email" value={email} className="outline-none grow border-none pl-3 py-2" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                        </aside>
                        <button className="bg-text text-white rounded-md px-4 py-2 " onClick={emailHandler}>
                            Say thanks !
                        </button>
                    </section>
                    <p className="text-[15px] leading-[20px] font-normal text-slate-500 mt-1.5 w-[460px] h-[20px] mx-auto">Enter your email address to get *rare* updates about our next drop !</p>
                </>)
            :
                (<div className="text-center mt-8">
                    <h2 className="text-2xl font-semibold">{emailResponse}</h2>
                </div>)
            }
            <div className="mt-10 flex gap-x-1">
                <section className="flex items-center gap-x-1.5 px-1.5 py-[3.2px] border-[#F3F3F3]" style={{borderWidth:"0.48px"}}>
                        <p className="text-[#D7D7D7] text-[12.8px] tracking-[0.512px]">MADE WITH ❤️ BY</p>
                        <svg width="42" height="18" viewBox="0 0 42 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.863988 1.704C0.863988 1.10312 1.3511 0.616002 1.95199 0.616002H40.608C41.2089 0.616002 41.696 1.10312 41.696 1.704V16.296C41.696 16.8969 41.2089 17.384 40.608 17.384H1.95199C1.3511 17.384 0.863988 16.8969 0.863988 16.296V1.704Z" fill="#FFFBF6" stroke="black" strokeWidth="0.128"/>
                            <path d="M22.9338 14.0975C22.3399 14.0975 21.8381 13.9285 21.4285 13.5906C21.0292 13.2527 20.8295 12.7663 20.8295 12.1314C20.8295 11.6501 21.0752 11.2098 21.5668 10.8104C22.0583 10.4008 22.8314 10.0936 23.8861 9.88883C24.05 9.85811 24.2343 9.82739 24.4391 9.79667C24.6439 9.75571 24.8589 9.71475 25.0842 9.67379V8.46035C25.0842 7.76403 24.9972 7.27763 24.8231 7.00115C24.6592 6.71443 24.3981 6.57107 24.0397 6.57107C23.794 6.57107 23.5994 6.65299 23.456 6.81683C23.3127 6.97043 23.2205 7.24179 23.1796 7.63091L23.1488 7.79987C23.1284 8.24019 23.0208 8.56275 22.8263 8.76755C22.6317 8.97235 22.3911 9.07475 22.1044 9.07475C21.8381 9.07475 21.618 8.99283 21.4439 8.82899C21.2698 8.66515 21.1828 8.44499 21.1828 8.16851C21.1828 7.74867 21.3261 7.39539 21.6128 7.10867C21.9098 6.82195 22.2989 6.60691 22.7802 6.46355C23.2615 6.32019 23.7837 6.24851 24.3469 6.24851C25.2583 6.24851 25.9597 6.47379 26.4512 6.92435C26.953 7.36467 27.2039 8.08659 27.2039 9.09011V12.4847C27.2039 12.9455 27.4189 13.1759 27.849 13.1759H28.1869L28.3252 13.2988C28.1306 13.5445 27.9156 13.734 27.68 13.8671C27.4548 14.0002 27.1322 14.0668 26.7124 14.0668C26.2618 14.0668 25.9034 13.9644 25.6372 13.7596C25.3812 13.5445 25.2122 13.2629 25.1303 12.9148C24.8231 13.2424 24.5056 13.524 24.178 13.7596C23.8605 13.9848 23.4458 14.0975 22.9338 14.0975ZM23.8708 13.1605C24.0756 13.1605 24.265 13.1144 24.4391 13.0223C24.6234 12.9199 24.8384 12.7663 25.0842 12.5615V9.98099C24.9818 10.0015 24.8794 10.022 24.777 10.0424C24.6746 10.0629 24.5568 10.0834 24.4237 10.1039C23.9527 10.2268 23.5738 10.4367 23.2871 10.7336C23.0106 11.0204 22.8724 11.4095 22.8724 11.901C22.8724 12.3208 22.9696 12.6383 23.1642 12.8533C23.3588 13.0581 23.5943 13.1605 23.8708 13.1605ZM28.5169 13.8671V13.7135L28.9009 13.5752C29.1057 13.4933 29.2644 13.396 29.3771 13.2834C29.4897 13.1605 29.5819 12.9916 29.6536 12.7765L32.8177 3.69875H34.1233L37.2414 12.838C37.3233 13.0632 37.4155 13.2373 37.5179 13.3602C37.6203 13.4728 37.779 13.5701 37.994 13.652L38.1784 13.7135V13.8671H34.2769V13.7135L34.5073 13.6367C34.7224 13.5548 34.8504 13.4421 34.8913 13.2988C34.9425 13.1452 34.9374 12.966 34.876 12.7612L34.154 10.5493H30.7441L30.0068 12.7151C29.9352 12.9404 29.9096 13.1196 29.93 13.2527C29.9608 13.3858 30.0836 13.4933 30.2987 13.5752L30.6366 13.7135V13.8671H28.5169ZM30.8516 10.2421H34.0619L32.5105 5.46515L30.8516 10.2421Z" fill="#461F09"/>
                        </svg>
                    </section>
                    <aside className="flex flex-col gap-y-0.5 px-1.5 py-[3.2px] border-[#F3F3F3] sm:grow" style={{borderWidth:"0.48px"}}>
                        <h3 className="text-[10px] text-[#DADADA] font-bold">freddy@aadu.agency</h3>
                        <small className="text-[8px] text-[#DADADA] ">6/196 , Thohtiyankadu , 639136 , IN</small>
                    </aside>
            </div>    
            <footer className="mt-10 flex gap-x-1 ">
                <Link to="/privacy-policy" className="text-custormGray hover:underline">Privacy Policy</Link> | 
                <Link to="/terms-and-conditions" className="text-custormGray hover:underline">Terms and Conditions</Link>
            </footer>
        </main>
    </div>
  )
}

export default LandingPage