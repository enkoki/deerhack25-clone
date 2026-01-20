import styles from "./Prizes.module.css";
import Card from '../components/Card/Card.jsx'
function Prizes() {
  return (
    <div className="bg-[#110C24] p-10 w-screen flex flex-col items-center pt-25">
      <h1 className="text-6xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent inline-block mb-6">
        Prizes
      </h1>

      <div className={styles.container}>
            <Card title="Grand Prize" desc="Rs 50,000 to overall winner"/>
      </div>
    </div>
  );
}

export default Prizes;
