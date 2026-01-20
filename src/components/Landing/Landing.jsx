import Deerhack25 from "../../assets/icons/Deerhack25";
import DiscordButton from "../Buttons/Discord";
import DevfolioButton from "../Buttons/Devfolio";
function Landing(){
    return(
        <div className="flex flex-col min-h-screen justify-center items-center gap-5 border-b-[#110C24] border-b-4">
            <div className=" scale-80 md:scale-90 xl:scale-100 flex flex-col  justify-center items-center gap-8 border-3 border-accent rounded-4xl px-16 py-8 bg-black/50 md:backdrop-blur-[2px] backdrop-blur-[5px] relative bottom-10"> 
                <p className="text-accent font-bold text-xl md:text-2xl text-center">10th - 12th May</p>
                <div className="flex justify-center items-center"><Deerhack25/></div>
                <DevfolioButton/>
                <DiscordButton/>
            </div>
        </div>

    );
}

export default Landing