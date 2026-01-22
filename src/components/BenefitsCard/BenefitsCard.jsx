function BenefitsCard({title, desc, blend,count, gradient, opacity=20}){
    return(
        <div className={`xl:w-[520px] max-w-[900px] xl:h-[290px] ${gradient} rounded-4xl py-10 px-5 lg:px-20 relative overflow-hidden`}>
            <img src={blend} className={`absolute top-2 hidden md:block right-2 scale-70`} style={{ opacity: opacity / 100 }}></img>
            <h2 className=" text-[28px] lg:text-[32px] font-extrabold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent inline-block mb-6 relative z-10">{title}</h2>
            <p className="text-16px text-text font-medium leading-6 relative z-10">{desc}</p>
            <div className="hidden lg:block text-[20px] xl:text-[25px] absolute text-gray-400 font-bold bottom-6 right-9">{count}.</div>
        </div>
    );
}

export default BenefitsCard