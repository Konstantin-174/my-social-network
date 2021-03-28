import React from 'react';
import {NavLink} from 'react-router-dom';

export type DialogPropsType = {
    name: string
    id: string
}

export function Dialog(props: DialogPropsType) {
    return (
        <div className="dialogs-wrapper__content-dialog_links">
            <NavLink to={"/dialogs/" + props.id} activeClassName="active-link">{props.name}</NavLink>
        </div>
    )
}