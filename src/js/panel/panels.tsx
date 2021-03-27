import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configStore from "../redux/store/store";

import EditPage from "../pages/edit";
import ProfilePage from "../pages/profile";

const store = configStore();

export const EditPanel = (node:HTMLElement,root:HTMLDivElement) =>{
    ReactDOM.render(
        <Provider store={store}>
            <EditPage />
        </Provider>,
        root
    );
    node.appendChild(root);
};

export const ProfilePanel = (node:HTMLElement,root:HTMLDivElement) =>{
    ReactDOM.render(
        <Provider store={store}>
            <ProfilePage />
        </Provider>,
        root
    );
    node.appendChild(root);
};
