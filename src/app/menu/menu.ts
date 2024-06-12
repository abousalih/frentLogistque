import {CoreMenu} from '@core/types';


export const menu: CoreMenu[] = [

    {
        id: 'logistique',
        type: 'section',
        title: 'Logistique',
        translate: 'MENU.LOGISTIQUE.SECTION',
        icon: 'package',
        children:[
            {
                id: 'dashboard',
                title: 'Dashboard',
                translate: 'MENU.LOGISTIQUE.DASHBOARD',
                type: 'item',
                icon: 'file-text',
                url: 'projets/logistique/dashboard',
            }, {
                id: 'mvtvh',
                title: 'Mouvement VH',
                translate: 'MENU.LOGISTIQUE.MVVH',
                type: 'item',
                icon: 'file-text',
                url: 'projets/logistique/mvtvh',
            },
            {
                id: 'engins',
                title: 'Engins',
                translate: 'MENU.LOGISTIQUE.ENGINS',
                type: 'item',
                icon: 'file-text',
                url: 'projets/logistique/engins',
            },
            {
                id: 'coffrage',
                title: 'Coffrage',
                translate: 'MENU.LOGISTIQUE.COFFRAGE',
                type: 'item',
                icon: 'file-text',
                url: 'projets/logistique/coffrage',
            },
            {
                id: 'location',
                title: 'Location',
                translate: 'MENU.LOGISTIQUE.LOCATION',
                type: 'item',
                icon: 'file-text',
                url: 'projets/logistique/location',
            }
        ],

    },

];
