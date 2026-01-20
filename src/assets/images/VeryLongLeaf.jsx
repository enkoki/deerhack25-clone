import leaf from './veryLongLeaf.svg'

export default function VeryLongLeaf(){
    return(
        <img src={leaf} className='hidden w-[110px] h-[400px] absolute scale-x-[-1] xl:block top-0 right-0'></img>
    );
}