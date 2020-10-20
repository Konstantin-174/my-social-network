import React from 'react';
import s from './Dialog.module.css';
import {NavLink} from 'react-router-dom';

export type DialogPropsType = {
    name: string
    id: number
}

export function Dialog(props: DialogPropsType) {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}