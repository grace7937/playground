import {useContext} from 'react'import ColorContext from './color';


const ColorBox= () => {

    const color = useContext(ColorContext);
    
    return(
        <div>{color}</div>
    );
};
export default ColorBox;