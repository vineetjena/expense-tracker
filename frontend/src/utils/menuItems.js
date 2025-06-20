import { dashboard, expenses, transactions, trend } from '../utils/Icons'
import { FaChartPie } from 'react-icons/fa' 

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: 'Analytics',           
        icon: <FaChartPie />,         
        link: '/analytics'
    },
    {
        id: 3,
        title: "Incomes",
        icon: trend,
        link: "/incomes"
    },
    {
        id: 4,
        title: "Expenses",
