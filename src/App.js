import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import Graphical from './page/Root/Graphical'
import False_Position from './page/Root/False_Position'
import { Layout, Menu, Breadcrumb ,Icon } from 'antd';
import Bisection from './page/Root/Bisection';
const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;

class App extends Component{
  render (){
    return (
      <Router>
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Layout>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
              >
                <SubMenu key="root_submenu" title={<span><Icon type="user" />Root of Equation</span>}>
                  <Menu.Item key="menu_graphical" >Graphical<Link to="/graphical" /></Menu.Item>
                  <Menu.Item key="menu_bisection" >Bisection<Link to="/bisection" /></Menu.Item>
                  <Menu.Item key="menu_false">False Position<Link to="/false" /></Menu.Item>
                  <Menu.Item key="menu_onepoint">One-Point Iteration</Menu.Item>
                  <Menu.Item key="menu_newton">Newton-Raphson</Menu.Item>
                  <Menu.Item key="menu_secant">Secant Method</Menu.Item>
                </SubMenu>
                <SubMenu key="algebra_submenu" title={<span><Icon type="laptop" />Linear Algebra</span>}>
                  <Menu.Item key="menu_cramer">Cramer's Rule<Link to="/cramer" /></Menu.Item>
                  <Menu.Item key="menu_gauss">Gauss's Elimination</Menu.Item>
                  <Menu.Item key="menu_jordan">Gauss Jordan Method</Menu.Item>
                  <Menu.Item key="menu_inverse">Matrix Inversion</Menu.Item>
                  <Menu.Item key="menu_lu">LU Decomposition</Menu.Item>
                  <Menu.Item key="menu_cholesky">Cholesky Decomposition</Menu.Item>
                  <Menu.Item key="menu_jacobi">Jacobi Iteration Method</Menu.Item>
                  <Menu.Item key="menu_seidel">Gauss Seidel Iteration</Menu.Item>
                  <Menu.Item key="menu_gradient">Conjugate Gradient Method</Menu.Item>
                </SubMenu>
                <SubMenu key="interpolate_submenu" title={<span><Icon type="notification" />Interpolation</span>}>
                  <Menu.Item key="menu_divide">Newton Divide Difference</Menu.Item>
                  <Menu.Item key="menu_lagrange">Lagrange</Menu.Item>
                  <Menu.Item key="menu_spline">Spline</Menu.Item>
                </SubMenu>
                <SubMenu key="regression_submenu" title={<span><Icon type="calculator" />Least Square Error</span>}>
                  <Menu.Item key="menu_linear">Linear Regression</Menu.Item>
                  <Menu.Item key="menu_poly">Polynomial Regression</Menu.Item>
                  <Menu.Item key="menu_multiple">Multiple Linear Regression</Menu.Item>
                </SubMenu>
                <SubMenu key="integrate_submenu" title={<span><Icon type="calculator" />Integration</span>}>
                  <Menu.Item key="menu_compositeTrapzoidal">Composite Trapezoidal Rule</Menu.Item>
                  <Menu.Item key="menu_compositeSimpson">Composite Simpson's Rule</Menu.Item>
                </SubMenu>
                <SubMenu key="diff_submenu" title={<span><Icon type="notification" />Differentiation</span>}>
                  <Menu.Item key="menu_forwardh">Forward Divided-Differences O(h)</Menu.Item>
                  <Menu.Item key="menu_backwardh">Backward Divided-Differences O(h)</Menu.Item>
                  <Menu.Item key="menu_centralh">Central Divided-Differences O(h{<sup>2</sup>})</Menu.Item>
                  <Menu.Item key="menu_forward2h">Forward Divided-Differences O(h{<sup>2</sup>})</Menu.Item>
                  <Menu.Item key="menu_backward2h">Backward Divided-Differences O(h{<sup>2</sup>})</Menu.Item>
                  <Menu.Item key="menu_central2h">Central Divided-Differences O(h{<sup>4</sup>})</Menu.Item>
                </SubMenu>
                <SubMenu key="de_submenu" title={<span><Icon type="laptop" />Ordinary Differential Equation</span>}>
                  <Menu.Item key="menu_euler">Euler's Method</Menu.Item>
                  <Menu.Item key="menu_heun">Heun's Method</Menu.Item>
                  <Menu.Item key="menu_modifier">Modifier Euler's Method</Menu.Item>
                </SubMenu>
              </Menu>
        
            <Content style={{ padding: 24, margin: 0, minHeight: 280, }}>

              <Route path="/graphical" component={Graphical} />
              <Route path="/bisection" component={Bisection} />
              <Route path="/false" component={False_Position} />

            </Content>
         
          </Layout>
          
        </Header>

        
      </Layout>
      <div>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED USER TOEY</Footer>
      </div>
      </Router>
      
    )
  }
}

export default App;
