import React from 'react';
import {FormattedMessage} from 'react-intl';

import {
    IconAtom,
    IconBasket,
    IconBellRinging,
    IconBorderAll,
    IconBorderRadius,
    IconBoxMultiple,
    IconBrandChrome,
    IconBrandGravatar,
    IconBrush,
    IconBug,
    IconCalendar,
    IconChartArcs,
    IconChartCandle,
    IconChartInfographic,
    IconCircle,
    IconCircleOff,
    IconClipboardList,
    IconDashboard,
    IconDeviceAnalytics,
    IconFiles,
    IconForms,
    IconHelp,
    IconId,
    IconKey,
    IconLayoutList,
    IconLoader,
    IconLockAccess,
    IconMail,
    IconMenu,
    IconMessages,
    IconNfc,
    IconPalette,
    IconPencil,
    IconPhoneCall,
    IconPictureInPicture,
    IconReceipt2,
    IconRun,
    IconShadow,
    IconShape,
    IconShieldLock,
    IconSitemap,
    IconTools,
    IconTypography,
    IconUser,
    IconUserCheck
} from '@tabler/icons';

const icons = {
    IconDashboard: IconDashboard,
    IconDeviceAnalytics,

    IconChartArcs: IconChartArcs,
    IconClipboardList: IconClipboardList,
    IconChartInfographic: IconChartInfographic,

    IconForms: IconForms,
    IconReceipt2: IconReceipt2,
    IconPencil: IconPencil,
    IconPalette: IconPalette,
    IconShadow: IconShadow,
    IconPhoneCall: IconPhoneCall,
    IconBrandChrome: IconBrandChrome,
    IconFiles: IconFiles,
    IconAtom: IconAtom,
    IconTools: IconTools,
    IconBrush: IconBrush,
    IconLockAccess: IconLockAccess,
    IconShieldLock: IconShieldLock,
    IconKey: IconKey,
    IconTypography: IconTypography,
    IconMenu: IconMenu,
    IconBoxMultiple: IconBoxMultiple,
    IconCircleOff: IconCircleOff,
    IconCircle: IconCircle,
    IconBorderRadius: IconBorderRadius,
    IconBrandGravatar: IconBrandGravatar,
    IconShape: IconShape,
    IconUserCheck: IconUserCheck,
    IconId: IconId,
    IconLayoutList: IconLayoutList,
    IconBug: IconBug,
    IconLoader: IconLoader,
    IconRun: IconRun,
    IconUser: IconUser,
    IconHelp: IconHelp,
    IconSitemap: IconSitemap,
    IconPictureInPicture: IconPictureInPicture,
    IconMail: IconMail,
    IconMessages: IconMessages,
    IconNfc: IconNfc,
    IconCalendar: IconCalendar,
    IconBellRinging: IconBellRinging,
    IconBorderAll: IconBorderAll,
    IconChartCandle: IconChartCandle,
    IconBasket: IconBasket
};

const menuItems = {
    items: [
        {
            id: 'dashboard',
            title: <FormattedMessage id="dashboard" />,
            type: 'group',
            children: [
                {
                    id: 'dash-default',
                    title: <FormattedMessage id="Dashboard" />,
                    type: 'item',
                    url: '/dashboard/default',
                    icon: icons['IconDashboard'],
                    breadcrumbs: false
                }
            ]
        },

        {
            id: 'dataPeserta',
            title: <FormattedMessage id=" " />,
            caption: <FormattedMessage id=" " />,
            type: 'group',
            children: [
                {
                    id: 'Master',
                    title: <FormattedMessage id="Master" />,
                    type: 'collapse',
                    icon: icons['IconKey'],
                    children: [
                                {
                                    id: 'dataPeserta',
                                    title: <FormattedMessage id="Data Peserta" />,
                                    type: 'item',
                                    url: '/dataPeserta',
                                    
                                },
                                {
                                    id: 'dataPenguji',
                                    title: <FormattedMessage id="Data Penguji" />,
                                    type: 'item',
                                    url: '/dataPenguji',
                                }
                    ]
                },



            ]
        },
        {
            id: 'utilities',
            title: <FormattedMessage id=" " />,
            type: 'group',
            children: [
                {
                    id: 'Fit & Proper',
                    title: <FormattedMessage id="Fit & Proper" />,
                    type: 'collapse',
                    icon: icons['IconKey'],
                    children: [
                                {
                                    id: 'login3',
                                    title: <FormattedMessage id="Pendaftaran Fit & Proper" />,
                                    type: 'item',
                                    url: '/pendaftaranFitAndProper',
                                
                                },
                                {
                                    id: 'Pendaftaran Wawancara',
                                    title: <FormattedMessage id="Pendaftaran Wawancara" />,
                                    type: 'item',
                                    url: '/pendaftaranWawancara',
                                    
                                },
                                {
                                    id: 'Penilaian Fit & Proper',
                                    title: <FormattedMessage id="Penilaian Fit & Proper" />,
                                    type: 'item',
                                    url: '/penilaianFitAndProper',
                                    
                                },
                                {
                                    id: 'Penilaian Wawancara',
                                    title: <FormattedMessage id="Penilaian Wawancara" />,
                                    type: 'item',
                                    url: '/penilaianWawancara',
                                    
                                }
                    ]
                }
                // {
                //     id: 'util-typography',
                //     title: <FormattedMessage id="typography" />,
                //     type: 'item',
                //     url: '/utils/util-typography',
                //     icon: icons['IconTypography']
                // },
                // {
                //     id: 'color',
                //     title: <FormattedMessage id="color" />,
                //     type: 'item',
                //     url: '/utils/util-color',
                //     icon: icons['IconPalette']
                // },
                // {
                //     id: 'shadow',
                //     title: <FormattedMessage id="shadow" />,
                //     type: 'item',
                //     url: '/utils/util-shadow',
                //     icon: icons['IconShadow']
                // },
                // {
                //     id: 'icons',
                //     title: <FormattedMessage id="icons" />,
                //     type: 'collapse',
                //     icon: icons['IconPencil'],
                //     children: [
                //         {
                //             id: 'util-tabler-icons',
                //             title: <FormattedMessage id="tabler-icons" />,
                //             type: 'item',
                //             url: '/icons/tabler-icons'
                //         },
                //         {
                //             id: 'util-material-icons',
                //             title: <FormattedMessage id="material-icons" />,
                //             type: 'item',
                //             url: '/icons/material-icons'
                //         }
                //     ]
                // }
            ],
        },
        {
            id: 'sample-docs-roadmap',
            type: 'group',
            children: [
                {
                    id: 'report',
                    title: <FormattedMessage id="Report" />,
                    type: 'collapse',
                    icon: icons['IconKey'],
                    children: [
                                {
                                    id: 'Rekap Nilai Fit & Proper',
                                    title: <FormattedMessage id="Rekap Nilai Fit & Proper" />,
                                    type: 'item',
                                    url: '/rekapNilaiFitAndProper',
                                    
                                },
                                {
                                    id: 'Rekap Manual Nilai Fit & Proper',
                                    title: <FormattedMessage id="Rekap Manual Nilai Fit & Proper" />,
                                    type: 'item',
                                    url: '/rekapManualFitAndProper',
                                    
                                },
                                {
                                    id: 'Cetak Nilai Fit & Proper',
                                    title: <FormattedMessage id="Cetak Nilai Fit & Proper" />,
                                    type: 'item',
                                    url: '/cetakNilaiFitAndProper',
                                    
                                },
                                {
                                    id: 'Rekap Nilai Wawancara',
                                    title: <FormattedMessage id="Rekap Nilai Wawancara" />,
                                    type: 'item',
                                    url: '/rekapNilaiWawancara',
                                    
                                },
                                {
                                    id: 'Cetak Nilai Wawancara',
                                    title: <FormattedMessage id="Cetak Nilai Wawancara" />,
                                    type: 'item',
                                    url: '/cetakNilaiWawancara',
                                    
                                }
                    ]
                }
            ]
        },

        {
            id: 'pencarianFitAndProper',
            type: 'group',
            children: [
                {
                    id: 'pencarianFitAndProper',
                    title: <FormattedMessage id="Pencarian Fit & Proper" />,
                    type: 'item',
                    url: '/pencarianFitAndProper/',
                    icon: icons['IconKey'],
                    breadcrumbs: false
                }
            ]
        },

        {
            id: 'administrasiUser',
            type: 'group',
            children: [
                {
                    id: 'administrasiUser',
                    title: <FormattedMessage id="Administrasi User" />,
                    type: 'item',
                    url: '/administrasiUser/',
                    icon: icons['IconKey'],
                    breadcrumbs: false
                }
            ]
        },

    ]
};

export default menuItems;
