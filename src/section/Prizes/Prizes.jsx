import styles from "./Prizes.module.css";
import Card from '../../components/GridCard/Card.jsx';

import GrandPrize from '../../assets/icons/GrandPrize.jsx'
import Gift from '../../assets/icons/GIftIcon.jsx'
import Confetti from '../../assets/images/Confetti.jsx'
import ThumbsUp from "../../assets/images/ThumbsUp.jsx";

function Prizes() {

  const clipValue = "bg-linear-to-r from-primary to-accent text-transparent bg-clip-text inline-block";
  return (
    <div className="bg-[#110C24] p-10 w-screen flex flex-col items-center pt-8 xl:pt-[100px] md:scale-70 lg:scale-80 xl:scale-90 2xl:scale-100">
      <h1 className="text-6xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent inline-block mb-6">
        Prizes
      </h1>

      <div className={styles.container} style={{marginTop: "20px"}}>
        <Card 
          title="Grand Prize" 
          desc="Rs 50,000 to overall winner" 
          name="grand" 
          bgColor="#6C3BCD" 
          variant = "gradient"
          dir="flex-col"
          alignment="items-center justify-between"
          icons={GrandPrize}
          size="text-[45px]"
        />

        <Card 
          title="Track Winner" 
          desc="New Track Added! Rs 15,000 per track" 
          name="track"
          dir="flex-col"
          variant="solid"
          bgColor="#110C24"
          border="border-2 border-accent"
          clippinghead={clipValue}
          clipping="text-accent"
          alignment="justify-between items-center"
          size="text-[35px]"
          icons ={Confetti}
          a2="flex-row"
        />

        <Card 
          desc="Swags and freebies" 
          name="swags"
          dir="flex-col"
          alignment="justify-between items-center"
          clipping={clipValue}
          size="text-[35px] text-center"
          icons={ThumbsUp}
          a2="flex-row"
        />

        <Card 
          desc="Tons of gifts and Merch for everyone" 
          name="gifts"
          dir="lg:flex-row"
          alignment="justify-between items-center"
          icons = {Gift}
          clipping={clipValue}
          size="text-[35px]"
        />
      </div>
    </div>
  );
}

export default Prizes;
