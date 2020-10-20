import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

export function Dialogs() {
    return (
        <div className={s.dialogs_item}>
            <div className={s.dialogs}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1" activeClassName={s.active}>Dimon</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2" activeClassName={s.active}>Vovan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3" activeClassName={s.active}>Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4" activeClassName={s.active}>Antony</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hey guys! How are you doing?</div>
                <div className={s.message}>Hey bro! We're fine, thanks</div>
                <div className={s.message}>Antony! Where is my money!?</div>
            </div>
        </div>
    )
}