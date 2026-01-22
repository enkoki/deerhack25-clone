import BenefitsCard from "../../components/BenefitsCard/BenefitsCard";
import LeafRight from "../../assets/images/LeafRight";
import ThickLeaf from "../../assets/images/ThickLeaf";

import network from '../../assets/images/NewNetworks.svg'
import idea from '../../assets/images/NewSupportIdea.svg'
import opp from '../../assets/images/NewOpportunity.svg'
import develop from '../../assets/images/NewVDevelop.svg'

function Benefits(){
    const card1 = "DeerHack is the perfect platform to find like-minded people and build your connections.";
    const card2="DeerHack is dedicated to fostering ideas that drive global change and provide new solutions.";
    const card3 = "Showcase talents, gain hands-on experience, and develop crucial skills like problem-solving and teamwork for career success."
    const card4 = "Embrace the challenge at DeerHack and watch as your interpersonal skills evolve under pressure, transforming you into a more resilient and effective collaborator."

    const grad1 = "bg-linear-to-r from-[#261B50] to-[#161030] "
    const grad2 = "bg-linear-to-l from-[#261B50] to-[#161030] "
    return(
        <div className="flex justify-center items-center w-screen p-10 relative">
            <LeafRight position="right-0 bottom-[50%]"/>
            <ThickLeaf position="left-0 top-[50%] scale-x-[-1]"/>
            <div className="flex flex-col justify-center items-center p-5 w-full mx-10">
                <h1 className=" text-[25px] md:text-[30px] lg:text-[50px] font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent inline-block mb-8">Benefits of Participating</h1>
                <div className="flex flex-col items-center justify-center gap-5">
                    <div className="flex gap-5 flex-col xl:flex-row">
                        <BenefitsCard title="Build Powerful Network" desc={card1} gradient={grad1} blend={network} opacity={30} count={1}/>
                        <BenefitsCard title="Support for Your Ideas" desc={card2} gradient={grad2} blend={idea} opacity={60} count={2}/>
                    </div>
                    <div className="flex gap-5 flex-col xl:flex-row">
                        <BenefitsCard title="Career Opportunities" desc={card3} gradient={grad1} blend={opp} opacity={60} count={3}/>
                        <BenefitsCard title="Interpersonal Development" desc={card4} gradient={grad2} blend={develop} opacity={40} count={4}/>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Benefits