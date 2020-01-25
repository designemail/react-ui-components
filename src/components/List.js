import React from 'react';
import { Checkbox } from './Checkbox';
import { Icon } from './Icon';

export const ListItem = (props) => {
    const itemClass = () => {
        let result = '';
        let className = {
            item: 'list-item',
            active: (props.isActiveItem && props.isActiveItem(props.item)) ? 'active' : '',
            hover: props.hover ? 'hover' : '',
            dense: props.children ? 'dense' : '',
            noDivider: props.noDivider ? '' : 'divider'
        }

        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div onClick={() => props.onItemClick ? props.onItemClick() : {}} 
            className={itemClass()}>
            <div>
                <div className="list-item__left-side">
                    {props.item.hasOwnProperty('icon') && !props.noIcon ? <Icon name={props.item['icon']} size={20}/> : ''}
                    {props.checkbox}
                    {props.item[props.itemTitle] ? props.item[props.itemTitle] : props.item}
                </div>
                <div className="list-item__right-side">
                    {props.controls}
                </div>
            </div>
            {props.subTitle ? <div className="list-subtitle">{props.subTitle}</div> : ''}
        </div>
    )
}

export const List = (props) => {
    const listClass = () => {
        let result = '';
        let className = {
            list: 'list',
            dense: props.dense ? 'dense' : '',
            dark: props.dark ? 'dark' : '',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div className={listClass()}>
            {props.header ? <div className="list-header">{props.header}</div> : ''}
            {props.children ? props.children :
                props.items.map((item, index) => 
                    <ListItem key={index}
                        isActiveItem={props.isActiveItem}  
                        checkbox={props.checkbox}
                        onItemClick={() => props.onItemClick ? props.onItemClick(item) : {}}
                        hover={props.hover}
                        itemTitle={props.itemTitle}
                        subTitle={props.subTitle} 
                        item={item}/>)}
        </div>
    )
}


