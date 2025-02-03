import { React } from 'react';
import classes from './Header.module.css';
import Image from 'next/image';
import logo from '../../../../public/images/logo.png';

export default function Header() {
    return (
        <div className={ classes.bar }>
            <Image className={ classes.logo } 
                    alt="logo" 
                    src={ logo } 
                    width={ 150 } 
                    height={ 50 }
            />
        </div>
    )
}