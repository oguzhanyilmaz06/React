import React, { Component } from 'react';

export class AppFooter extends Component {

    render() {
        return  (
            <div className="layout-footer">
               <div style={{ 'marginRight': '10%' }}>
                <span className="footer-text" style={{ 'marginRight': '10px' }}>Dilsem İnşaat Portal</span>
                <img src="/assets/layout/images/dilsemLogo.svg" alt="" width="80" />
            </div>
            </div>
        );
    }
}