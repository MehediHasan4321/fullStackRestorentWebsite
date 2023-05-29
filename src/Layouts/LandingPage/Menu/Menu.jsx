
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Button from '../../../Components/Button/Button';
import useMenu from '../../../Hooks/useMenu';
import Menus from '../../../Components/Menus/Menus';


const Menu = () => {
    const [menus] = useMenu()
    const popular = menus.filter(item=>item.category === 'popular')
    return (
        <>
            <SectionTitle subTitle={'Check It Out'} title={'From Our Menu'} />
            <Menus category={popular}/>
            
        </>
    );
};

export default Menu;