const { entrypoints } = require("uxp");
const { app } = require("photoshop");


import { EditPanel , ProfilePanel } from "./panel/panels";


entrypoints.setup({
    plugin:{
        create:(plugin:any)=>{
            console.log(plugin);
        },
        destroy:()=>{
            console.log("destroyed");
        }
    },
    panels:{
        profile:{
            show(e){
                const attachment:HTMLElement = e.node;
                const root = document.createElement("div");
                ProfilePanel(attachment,root);
            }
        },
        edit:{
            show(e){
                const attachment:HTMLElement = e.node;
                const root = document.createElement("div");
                EditPanel(attachment,root);
            }
        }
    }
});
