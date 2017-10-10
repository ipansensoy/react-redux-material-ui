import React from 'react';
import { cyan600, pink600, purple600, orange600 } from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import InfoBox from '../components/dashboard/InfoBox';
import NewOrders from '../components/dashboard/NewOrders';
import MonthlySales from '../components/dashboard/MonthlySales';
import BrowserUsage from '../components/dashboard/BrowserUsage';
import RecentlyProducts from '../components/dashboard/RecentlyProducts';
import globalStyles from '../styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import NavbarComponent from './Navbar';
import withWidth, { LARGE, SMALL } from 'material-ui/utils/withWidth';
import ThemeDefault from '../theme-default';
import Data from '../data';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { socialActions } from '../_actions';
import { bindActionCreators } from 'redux';
import FacebookReduxLogin from 'facebook-login-redux-react';



class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
        this.handleFetch = this.handleFetch.bind(this);

  }

  handleFetch(e){
    e.preventDefault();

  }

  handleDrawer(bool) {

    this.setState({ open: bool });
  }

  render() {
    const navDrawerOpen = this.state.open;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0

      }
    };
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
            <NavbarComponent handleDrawer={this.handleDrawer.bind(this)}/>
              <div style={styles.container}>
                <div>
                  <h3 style={globalStyles.navigation}>Application / Dashboard</h3>
                      <div className="row">

                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
                          <InfoBox Icon={ShoppingCart}
                                   color={pink600}
                                   title="Total Profit"
                                   value="1500k"
                          />
                        </div>


                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
                          <InfoBox Icon={ThumbUp}
                                   color={cyan600}
                                   title="Likes"
                                   value="4231"
                          />
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
                          <InfoBox Icon={Assessment}
                                   color={purple600}
                                   title="Sales"
                                   value="460"
                          />
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
                          <InfoBox Icon={Face}
                                   color={orange600}
                                   title="New Members"
                                   value="248"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
                          <NewOrders data={Data.dashBoardPage.newOrders}/>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
                          <MonthlySales data={Data.dashBoardPage.monthlySales}/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
                          <RecentlyProducts data={Data.dashBoardPage.recentProducts}/>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
                          <BrowserUsage data={Data.dashBoardPage.browserUsage}/>
                        </div>
                      </div>
                </div>
              </div>
        </div>
      </MuiThemeProvider>

    );
  }
}

function mapStateToProps(state) {
  const { loggedin } = state.authentication.loggedIn;
  return {
    loggedin
  };


}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(socialActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);