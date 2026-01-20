import discord from '../../assets/icons/discord.webp'

function DiscordButton(){
    return(
        <button className='flex w-max items-center gap-3 text-text border-5 border-primary hover:bg-primary py-3 px-[10px] rounded-2xl'><img className="w-[33px] h-[33px] block" src={discord}></img>Join our Discord!</button>
    )
}

export default DiscordButton