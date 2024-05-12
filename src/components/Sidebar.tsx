import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import LocalConvenienceStoreRoundedIcon from '@mui/icons-material/LocalConvenienceStoreRounded';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

const drawerWidth = 70;

const SidebarDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    border:'none'
  },
}));

const SidebarContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  background: '#1441A5',
  height: '100vh',
}));

const SidebarIcon = styled(ListItem)(({ theme }) => ({
  justifyContent: 'center',
  display: 'flex',
  padding: '20px',
  color: '#fff',
  '& .userIcon': {
    position: 'absolute !important',
    bottom: '0',
  },
  '& .MuiListItemIcon-root': {
    justifyContent: 'center',
  },
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    color: '#fff',
    '& .MuiListItemIcon-root': {
      color: theme.palette.primary.main,
    },
    '& .MuiListItemText-primary': {
      visibility: 'visible',
    },
  },
}));

const Sidebar = () => {
  return (
    <SidebarDrawer variant="permanent" open={false}>
      <SidebarContainer>
        {/* Company Logo */}
        <Box textAlign="center" mb={3}>
          <LocalConvenienceStoreRoundedIcon fontSize='large' sx={{ color: 'yellow' }}/>
        </Box>
        {/* Sidebar Icons */}
        <List>
          <SidebarIcon>
            <Tooltip title="Home" placement="right">
              <ListItemIcon>
                <Link to="/home">
                  <HomeIcon style={{ color: '#6894F1' }} />
                </Link>
              </ListItemIcon>
            </Tooltip>
          </SidebarIcon>
          <SidebarIcon>
            <Tooltip title="Dashboard" placement="right">
              <ListItemIcon>
                <Link to="/dashboard">
                  <DashboardIcon style={{ color: '#6894F1' }} />
                </Link>
              </ListItemIcon>
            </Tooltip>
          </SidebarIcon>
        </List>
        <Divider />
        {/* User Avatar */}
        <SidebarIcon >
          <Tooltip title="User Profile" placement="right">
            <ListItemIcon className="userIcon">
              <AccountCircleIcon style={{ color: '#6894F1' }} />
            </ListItemIcon>
          </Tooltip>
        </SidebarIcon>
      </SidebarContainer>
    </SidebarDrawer>
  );
};

export default Sidebar;
