import React from 'react';
import './directory.scss';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import {directorySelector } from '../../redux/directory/directorySelectors'




import MenuItem from '../menu-item/menu-item'

const Directory = ({sections}) => (
            <div className="directory-menu">
            {
                sections.map( ({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
            </div>
        );

const mapStateToProps = createStructuredSelector ({
  sections: directorySelector
})

export default connect(mapStateToProps)(Directory);