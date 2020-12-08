import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selctor';

import './directory-menu.styles.scss';

const DirectoryMenu = ({ sections }) => {
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

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(DirectoryMenu);