import React from 'react';
import local from './ProfileInfo.module.scss';

const ProfileInfo = () => {
    return (
        <section className={local.infoWrap}>
            <div className={local.infoItem}>
                <div className={local.itemTitle}>
                    Name
                </div>
                <div className={local.itemDescription}>
                    Bender Benderovich
                </div>
            </div>
            <div className={local.infoItem}>
                <div className={local.itemTitle}>
                    Birth
                </div>
                <div className={local.itemDescription}>
                    10/11/1989
                </div>
            </div>
            <div className={local.infoItem}>
                <div className={local.itemTitle}>
                    Education
                </div>
                <div className={local.itemDescription}>
                    University degree
                </div>
            </div>
            <div className={local.infoItem}>
                <div className={local.itemTitle}>
                    Quotes
                </div>
                <div className={local.itemDescription}>
                    <div className={local.descriptionText}>
                        "I'm going to build my own theme park! With blackjack! And hookers!"
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileInfo;