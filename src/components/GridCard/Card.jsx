function Card({title, desc}){

    return(
        <div className="bg-[#1C162C] p-5 text-4xl text-text w-[460px] h-[450px]">
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    );

}

export default Card