import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Dialog.module.scss'

export type DialogPropsType = {
    name: string
    id: string
}

export function Dialog(props: DialogPropsType) {
    return (
        <div className={classes.links}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={classes.activeLink}>{props.name}</NavLink>
        </div>
    )
}