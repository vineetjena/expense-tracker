import { dashboard, expenses, transactions, trend, rupee } from './Icons'  
import { FaChartPie } from 'react-icons/fa';  

export const menuItems = [
    {
        id: 1,
        title: "Dashboard",
        icon: dashboard,
    },
    {
        id: 2,
        title: "Analytics",         
        icon: <FaChartPie />,     
    },
    {
        id: 3,
        title: "Income",
        icon: trend,
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
    },
];
