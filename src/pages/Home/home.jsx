import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Box, Drawer as MuiDrawer, List, ListItem, ListItemIcon, ListItemText, Tooltip, Menu, MenuItem} from '@mui/material';
import { Dashboard } from '@mui/icons-material';
import {useParams, useNavigate} from 'react-router-dom';
import DashboardComponent from '../Dashboard';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpenMenu(false);
  }

  const params = useParams();
  console.log('params', params)

  const handleSelectDashboard = (dashboardName) => {
    navigate(`/dashboards/${dashboardName}`)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={open}>
        <List>
            <Tooltip title="Dashboards">
                <ListItem button onClick={() => {
                  setOpenMenu(true)
                }}>
                <ListItemIcon>
                    <Dashboard />
                </ListItemIcon>
                <ListItemText/>
                </ListItem>
            </Tooltip>
        </List>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
      >
          <MenuItem onClick={() => handleSelectDashboard('1')}>Beltrano Dashboard</MenuItem>
          <MenuItem onClick={() => handleSelectDashboard('2')}>Beltrano ML Analysis</MenuItem>
      </Menu>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DashboardComponent dashboardName={params.dashboardName} />
      </Box>
    </Box>
  );
}