import devfolio from '../../assets/icons/devfolio.png'

function DevfolioButton(){
    return(
        <button className='hover:scale-110 transition duration-50 flex justify-center items-center bg-[#3E75FD] px-4 py-1 md:px-6 md:py-2 rounded-[10px] text-[14px] md:text-[16px] text-center text-text'><img className="w-[43px] h-[43px]"src={devfolio}></img>
            <strong>Apply with Devfolio</strong>
        </button>
    );
}

export default DevfolioButton