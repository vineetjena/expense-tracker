import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useGlobalContext } from '../../context/globalContext';
import styled from 'styled-components';

const COLORS = ['#00C49F', '#FF8042', '#8884d8', '#FFBB28', '#0088FE'];

function ChartGroup() {
    const { incomes, expenses } = useGlobalContext();

    const expenseByCategory = {};
    expenses.forEach((e) => {
        expenseByCategory[e.category] = (expenseByCategory[e.category] || 0) + e.amount;
    });

    const pieData = Object.entries(expenseByCategory).map(([category, value]) => ({
        name: category,
        value
    }));

    const barData = [
        { name: 'Income', amount: incomes.reduce((acc, val) => acc + val.amount, 0) },
        { name: 'Expense', amount: expenses.reduce((acc, val) => acc + val.amount, 0) }
    ];

    return (
        <ChartsStyled>
            <div className="chart-container">
                <h3>Expense by Category</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="chart-container">
                <h3>Total Income vs Expense</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={barData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="amount" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </ChartsStyled>
    );
}

const ChartsStyled = styled.div`
    display: grid;
    gap: 2rem;
    .chart-container {
        background: #FCF6F9;
        padding: 1rem;
        border-radius: 15px;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        h3 {
            text-align: center;
            margin-bottom: 1rem;
        }
    }
`;

export default ChartGroup;
