import React, { useState, useEffect } from 'react';
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, Cell, PieChart, Pie
} from 'recharts';
import { fetchGitHubData } from '../../services';
import Spinner from 'react-bootstrap/Spinner';
import './styles.scss';

export function GitHubSkillStats({ username, token }) {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchGitHubData(username, token);
      if (data) {
        // Sum all values to calculate percentage
        const total = Object.values(data).reduce((sum, value) => sum + value, 0);


        const formattedData = Object.entries(data)
          .map(([name, value]) => ({
            name,
            value: +((value / total) * 5000).toFixed(2), // percentage
          }))
          .filter(({ name }) =>
            ['javascript', 'python', 'c++', 'c#', 'plsql', 'css'].includes(name.toLowerCase())
          )
          .sort((a, b) => b.value - a.value)
          .slice(0, 10); // Limit to top 5 skills

        setSkills(formattedData);
      }
    };

    loadData();
  }, [username, token]);

  const pie_chart_colors = [
    'rgba(17, 93, 51, 0.8)',   // #115D33
    'rgba(34, 139, 34, 0.8)',  // #228B22
    'rgba(76, 187, 23, 0.8)',  // #4CBB17
    'rgba(112, 194, 71, 0.8)', // #70C247
    'rgba(141, 208, 108, 0.8)' // #8DD06C
  ]

  const bar_chart_colors = [
    'rgba(17, 93, 51, 0.8)',
    'rgba(34, 139, 34, 0.8)',
    'rgba(76, 187, 23, 0.8)',
    'rgba(112, 194, 71, 0.8)',
    'rgba(141, 208, 108, 0.8)',
    'rgba(80, 150, 200, 0.8)',
    'rgba(255, 165, 0, 0.8)',
    'rgba(200, 100, 150, 0.8)',
    'rgba(100, 100, 255, 0.8)',
    'rgba(170, 170, 170, 0.8)',
    'rgba(255, 100, 100, 0.8)',
    'rgba(150, 80, 255, 0.8)'
  ];

  return (
    <>
      {/* Pie chart: mobile only */}
      <div id="stats" className="mt-5 pt-5">
        <h4 data-aos="fade-up" className="mt-5 pt-5" >Programming skills stats!</h4>
        <div id="pie-chart" className="flex flex-col w-100 h-100">
          {skills.length > 0 ? (
            <ResponsiveContainer className="m-auto p-5" width="100%" height={500}>
              <PieChart>
                <Pie
                  data={skills}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ percent }) =>
                    (percent * 100).toFixed(0) > 0 ? `${(percent * 100).toFixed(0)}%` : null
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {skills.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pie_chart_colors[index % pie_chart_colors.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend
                  verticalAlign="bottom"
                  horizontalAlign="center"
                  content={({ payload }) => (
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: 'auto' }}>
                      <ul style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        padding: 0,
                        listStyle: 'none',
                        margin: 'auto',
                      }}>
                        {payload.map((entry, index) => (
                          <li
                            key={`item-${index}`}
                            style={{
                              margin: '0 10px',
                              fontSize: '14px',
                              color: '#000',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: 10,
                                height: 10,
                                backgroundColor: entry.color,
                                marginRight: 6,
                                borderRadius: 2,
                              }}
                            />
                            {entry.value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div id="spinner-container" className="d-flex flex-row justify-content-center align-self-center align-items-center w-100 h-100">
              <Spinner animation="border" variant="success" />
            </div>
          )}
        </div>

        {/* Bar chart: centered */}
        <div id="bar-chart" className="flex flex-row m-auto p-5 h-100 w-100">
          {skills.length > 0 ? (
            <ResponsiveContainer className="m-auto" width="80%" height={400}>
              <BarChart
                data={skills}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 100]} />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend verticalAlign="bottom" />
                <Bar
                  dataKey="value"
                  name="Skill Usage (%)"
                  label={{ position: 'top', formatter: (v) => `${v}%` }}
                >
                  {skills.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={bar_chart_colors[index % bar_chart_colors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div id="spinner-container" className="d-flex flex-row justify-content-center align-self-center align-items-center w-100 h-100">
              <Spinner animation="border" variant="success" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};