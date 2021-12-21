import React from 'react';

const Dashboard = ({dashboardName}) => {
    
    return (
        <iframe
      width='100%'
      height='95vh'
      style={{minHeight:'90vh'}}
      frameBorder="0"
      src={`http://localhost:8088/login?username=admin&redirect=/superset/dashboard/${dashboardName}/?standalone=true`}
    >
    </iframe>
    )
}

export default Dashboard;