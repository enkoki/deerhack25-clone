import leaf from './leaf_prizes_right.svg'

export default function LeafRight({position}){
    return <img src={leaf} className={`hidden w-[100px] h-[250px] absolute ${position} xl:block`}></img>
}