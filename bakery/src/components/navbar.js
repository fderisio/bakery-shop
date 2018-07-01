import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  // handleChange = (event, checked) => {
  //   this.setState({ auth: checked });
  // };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Online Shop
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);

// return (
//   <div className={classes.root}>
//     <FormGroup>
//       <FormControlLabel
//         control={
//           <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
//         }
//         label={auth ? 'Logout' : 'Login'}
//       />
//     </FormGroup>
//     <AppBar position="static">
//       <Toolbar>
//         <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//           <MenuIcon />
//         </IconButton>
//         <Typography variant="title" color="inherit" className={classes.flex}>
//           Title
//         </Typography>
//         {auth && (
//           <div>
//             <IconButton
//               aria-owns={open ? 'menu-appbar' : null}
//               aria-haspopup="true"
//               onClick={this.handleMenu}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorEl}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={open}
//               onClose={this.handleClose}
//             >
//               <MenuItem onClick={this.handleClose}>Profile</MenuItem>
//               <MenuItem onClick={this.handleClose}>My account</MenuItem>
//             </Menu>
//           </div>
//         )}
//       </Toolbar>
//     </AppBar>
//   </div>
// );
