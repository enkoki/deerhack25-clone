import cardIcon1 from '../../assets/icons/Code_edited.png'
import cardIcon2 from '../../assets/icons/College.svg'
import AboutCard from '../../components/AboutCard/AboutCard';
import VeryLongLeaf from '../../assets/images/VeryLongLeaf.jsx';
import LeafRight from '../../assets/images/LeafRight.jsx';

function About(){
    const deerhack = "DeerHack 2025 is a 48-hour hackathon where developers, designers, students, entrepreneurs, educators, and mentors work together to build ideas that solve real-world complications. DeerHack provides an opportunity for individuals to sharpen their teamwork, communication, leadership skills, and networking in a risk-free and comfortable environment.";
    const dwit = "Deerwalk Institute of Technology (DWIT) is an educational institution that prepares students and professionals of all levels to meet the problems and grab the possibilities of the twenty-first century IT Industry. The institute is well-known for its approach to learning that is both open-minded and responsible. It has an affiliation with Tribhuvan University and offers two undergraduate degrees, BSc. CSIT and BCA.";
    return(
        <div className="p-10 w-screen flex flex-col items-center pt-[100px] mt-10 relative">
            <VeryLongLeaf/>
            <h1 className="text-[30px] lg:text-[50px] font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent inline-block mb-6">
                About The Event
            </h1>
            <LeafRight position="left-0 top-[50%] scale-x-[-1]"/>
            <div className='2xl:scale-100 xl:scale-95 lg:scale-90 scale-95 flex flex-col lg:flex-row gap-30 justify-center items-center mt-[30px]'>
                <AboutCard icon={cardIcon2} title="Deerwalk Institute of Technology" desc = {dwit}/>
                <AboutCard icon={cardIcon1} title="DeerHack 2025" desc = {deerhack}/>
            </div>
        </div>
    );

}

export default About