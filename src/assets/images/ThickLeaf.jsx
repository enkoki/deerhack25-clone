import leaf from './leaf_deerhack2023_right.d4bc15f6.svg'

export default function ThickLeaf({position}){
    return <img src={leaf} className={`hidden absolute ${position} xl:block`}></img>
}