import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectShopData } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

const CollectionOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            {
                collections.map(({ id, ...otherCollectionProps }) => {
                    return <CollectionPreview key={id} {...otherCollectionProps} />
                })
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopData
});

export default connect(mapStateToProps)(CollectionOverview);