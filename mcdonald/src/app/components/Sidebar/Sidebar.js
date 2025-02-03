import classes from './Sidebar.module.css';
import Link from 'next/image';
import box from "../../../../public/images/box.png";
import burger from "../../../../public/images/burgers.png";
import twoforyou from "../../../../public/images/2forU.png";
import chicken from "../../../../public/images/chicken.png";
import desserts from "../../../../public/images/desserts.png";
import coffee from "../../../../public/images/coffee.png";


export default function Sidebar() {
    return (
        <div className={ classes.main }>
            <h2 className={ classes.menu }>MENU</h2>
            <ul>
                <li>
                    <Link className={ classes.image } alt="boxes" src={ box } width={ 30 } height={ 30 }/>
                    <div>Zestawy</div>
                </li>
                <li>
                    <Link className={ classes.image } alt="burgers" src={ burger } width={ 30 } height={ 30 }/>
                    <div>Burgery</div>
                </li>
                <li>
                    <Link className={ classes.image } alt="2foru" src={ twoforyou } width={ 30 } height={ 30 }/>
                    <div>2forU</div>
                </li>
                <li>
                    <Link className={ classes.image } alt="chicken" src={ chicken } width={ 30 } height={ 30 }/>
                    <div>Kurczaki</div>
                </li>
                <li>
                    <Link className={ classes.image } alt="desserts" src={ desserts } width={ 30 } height={ 30 }/>
                    <div>Desery</div>
                </li> 
                <li>
                    <Link className={ classes.image } alt="coffee" src={ coffee } width={ 30 } height={ 30 }/>
                    <div>Kawa</div>
                </li>
            </ul>
        </div>
    )
}