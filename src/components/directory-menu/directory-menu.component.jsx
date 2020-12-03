import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory-menu.styles.scss';

class DirectoryMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: '/images/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: '/images/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: '/images/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: '/images/men.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: '/images/womens.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }

    render() {
        const { sections } = this.state;
        return (
            <div className='directory-menu'>
                {
                    sections.map(({ id, ...otherSectionProps }) => {
                        return <MenuItem key={id} {...otherSectionProps} />
                    })
                }
            </div>
        );
    }
}

export default DirectoryMenu;