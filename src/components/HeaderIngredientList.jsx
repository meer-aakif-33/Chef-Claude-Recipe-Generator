import React from "react";
import chefLogo from '../assets/images/chef-logo.jpeg';

export default function IngHeader() {
    return (
        <header>
            <img src={chefLogo} alt="chef logo" className="chefLogo" />
            <span>Chef Claude</span>
        </header>
    );
}
