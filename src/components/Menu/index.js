import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

// import MenuItem from "../MenuItem"

import { Title, Container, CourseHeader, MenuItem, MenuBoard, CheckoutButton, ResetButton } from "./index.styles"


import menuItems from "../../../menu-data.json"

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      total: 0,
      currentCustomer: 1,
      completedOrders: []
    };
  }

  componentDidMount() {
    this.setState({ menuItems })
  }

  reset() {
    this.setState({
      orders: [],
      total: 0,
      currentCustomer: 1,
      completedOrders: []
    })
  }

  selectDish(customerId, dish) {
    if (this.state.orders.filter(order => order.id === dish.id).length > 0) {
      return this.setState(prevState => {
        return {
          orders: prevState.orders.filter(order => order.id !== dish.id)
        }
      })
    }
    dish.customerId = customerId;
    dish.course = dish.id < 5 ? "starter" : dish.id < 9 ? "main" : "dessert";
    this.setState(prevState => {
      return {
        orders: [...prevState.orders, dish]
      }
    }, () => {
      this.updateTotal()
    })
  }

  updateTotal() {
    let total = 0;
    this.state.orders.forEach(dish => total += dish.price)
    this.setState({ total })
  }

  proceedToCheckout() {
    switch (this.checkOrders()) {
      case "onlyOne":
        alert("Please select more than one dish to order.")
        break;
      case "noMain":
        alert("Please select a main course to order.")
        break;
      case "multipleCourse":
        alert("Please select no more than one of each course.")
        break;
      case "pierreWontAllow":
        alert("Excusé moi - you simply cannot have prawn and salmon!.")
        break;
      default:
        this.setState(prevState => {
          return {
            completedOrders: [...prevState.completedOrders, prevState.currentCustomer],
            currentCustomer: prevState.currentCustomer + 1,
            total: 0,
            orders: []
          }
        })
        alert("Thank you for your order!")
    }
  }

  checkOrders() {
    const { orders } = this.state;
    const hasTwo = orders.length > 1;
    if (!hasTwo) {
      return "onlyOne"
    }
    const courseFilter = (orders, course) => orders.filter(order => order.course === course);

    const hasMain = courseFilter(orders, "main").length > 0;
    if (!hasMain) {
      return "noMain"
    }
    const oneEachCourse = courseFilter(orders, "starter").length < 2 && courseFilter(orders, "main").length < 2 && courseFilter(orders, "dessert").length < 2

    if (!oneEachCourse) {
      return "multipleCourse"
    }

    const pierreWontAllow = orders.filter(order => order.id === 4).length > 0 && orders.filter(order => order.id === 7).length > 0;
    if (pierreWontAllow) {
      return "pierreWontAllow"
    }
    return hasTwo && hasMain && oneEachCourse && !pierreWontAllow;
  }

  render() {

    const customerOneOrders = this.state.orders.filter(order => order.customerId === 1);
    const customerTwoOrders = this.state.orders.filter(order => order.customerId === 2);
    const dishSelected = dish => this.state.orders.filter(order => order.id === dish.id).length > 0;

    return (
      <Fragment>
        <Container>
          <Title>
            OpenTable
          </Title>
          <p>Customer 1 - Order {this.state.completedOrders.includes(1) ? "completed" : "pending"}</p>
          <p>Customer 2 - Order {this.state.completedOrders.includes(2) ? "completed" : "pending"}</p>
          <ResetButton onClick={() => this.reset()}> Reset</ResetButton>
          <MenuBoard>
            <CourseHeader>
              Starters
            </CourseHeader>
            {menuItems.starters.map((item) => {
              return (
                <MenuItem
                  onClick={() => this.selectDish(this.state.currentCustomer, item)}
                >
                  <p>{item.name}</p>
                  <p>£{item.price} {dishSelected(item) ? "✓" : ""}</p>
                </MenuItem>
              )
            })}
            <CourseHeader>
              Mains
            </CourseHeader>
            {menuItems.mains.map((item) => {
              return (
                <MenuItem
                  onClick={() => this.selectDish(this.state.currentCustomer, item)}
                >
                  <p>{item.name}</p>
                  <p>£{item.price} {dishSelected(item) ? "✓" : ""}</p>
                </MenuItem>
              )
            })}
            <CourseHeader>
              Desserts
            </CourseHeader>
            {menuItems.desserts.map((item) => {
              return (
                <MenuItem
                  onClick={() => this.selectDish(this.state.currentCustomer, item)}
                >
                  <p>{item.name}</p>
                  <p>£{item.price} {dishSelected(item) ? "✓" : ""}</p>
                </MenuItem>
              )
            })}
          </MenuBoard>
          {this.state.orders.length > 0 && (
            <CheckoutButton
              onClick={() => { this.proceedToCheckout() }}
            >
              <p> Checkout </p>
              <p>Total: £{this.state.total}</p>
            </CheckoutButton>
          )}
        </Container>
      </Fragment>

    )
  }
}

export default Menu