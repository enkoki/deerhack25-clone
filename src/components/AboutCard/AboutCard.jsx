function AboutCard({icon, title, desc}){

    return(
        <div className="relative p-[5px] rounded-xl bg-linear-to-b from-primary to-accent overflow-hidden">
            <div className="bg-[#110C24] lg:w-[500px] min-h-[650px] flex flex-col gap-5 p-10 lg:p-16 rounded-xl">
                <div className="flex flex-col gap-5 min-h-[75px] lg:max-h-[100px]">
                    <img src={icon} alt="icon" className="w-[30px] h-[30px]"></img>
                    <h1 className=" text-[20px] lg:text-[30px] font-bold bg-linear-to-r from-primary to-accent bg-clip-text  text-transparent">{title}</h1>
                </div>
                <p className="text-[20px] tracking-[1px] text-text line leading-[25px] mt-10">{desc}</p>
            </div>
        </div>
    );

}

export default AboutCard