import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BurgerStyle.css";

export default class Burger extends Component {
  state = {
    Lettuce: 0,
    Tomato: 0,
    Cheese: 0,
    Meat: 0,
    totalPrice: 1.0,
  };

  ingredientPrices = {
    Lettuce: 0.5,
    Tomato: 0.3,
    Cheese: 0.7,
    Meat: 1.5,
  };

  addRemoveIngredient = (action, ingredient) => {
    let { Lettuce, Tomato, Cheese, Meat, totalPrice } = this.state;
    let stateValue;

    // Get current ingredient count
    switch (ingredient) {
      case "Lettuce":
        stateValue = Lettuce;
        break;
      case "Tomato":
        stateValue = Tomato;
        break;
      case "Cheese":
        stateValue = Cheese;
        break;
      case "Meat":
        stateValue = Meat;
        break;
      default:
        break;
    }

    // Update ingredient count
    if (action === "more") {
      stateValue = stateValue + 1;
      totalPrice += this.ingredientPrices[ingredient]; // Increase price
    } else {
      stateValue = stateValue - 1;
      totalPrice -= stateValue >= 0 ? this.ingredientPrices[ingredient] : 0; // Decrease price
    }

    this.setState({
      [ingredient]: stateValue >= 0 ? stateValue : 0,
      totalPrice: totalPrice >= 1.0 ? totalPrice : 1.0,
    });
  };

  burgerContent = () => {
    let { Lettuce, Tomato, Cheese, Meat } = this.state;
    let burger = [];

    // Outputting the lettuce
    for (let i = 0; i < Lettuce; i++) {
      burger.push(<div key={burger.length} className="lettuceSide"></div>);
    }

    // Outputting the Tomato
    for (let i = 0; i < Tomato; i++) {
      burger.push(<div key={burger.length} className="TomatoSide"></div>);
    }

    // Outputting the Cheese
    for (let i = 0; i < Cheese; i++) {
      burger.push(<div key={burger.length} className="CheeseSide"></div>);
    }

    // Outputting the Meat
    for (let i = 0; i < Meat; i++) {
      burger.push(<div key={burger.length} className="MeatSide"></div>);
    }
    return burger;
  };

  render() {
    // Check if at least one ingredient is added
    const { Lettuce, Tomato, Cheese, Meat } = this.state;
    const isPlaceOrderEnabled =
      Lettuce > 0 || Tomato > 0 || Cheese > 0 || Meat > 0;

    return (
      <div className="burgerContent">
        <div className="topside"></div>
        {this.burgerContent()}
        <div className="bottomside"></div>

        <div className="ingredientsBlock">
          <h2>Total Price: ${this.state.totalPrice.toFixed(2)}</h2>

          <p>Lettuce</p>
          <div className="ingrBtns">
            <button
              onClick={() => this.addRemoveIngredient("more", "Lettuce")}
              className="ingrBtn"
            >
              More
            </button>
            <button
              onClick={() => this.addRemoveIngredient("less", "Lettuce")}
              className="ingrBtn"
            >
              Less
            </button>
          </div>

          <p>Tomato</p>
          <div className="ingrBtns">
            <button
              onClick={() => this.addRemoveIngredient("more", "Tomato")}
              className="ingrBtn"
            >
              More
            </button>
            <button
              onClick={() => this.addRemoveIngredient("less", "Tomato")}
              className="ingrBtn"
            >
              Less
            </button>
          </div>

          <p>Cheese</p>
          <div className="ingrBtns">
            <button
              onClick={() => this.addRemoveIngredient("more", "Cheese")}
              className="ingrBtn"
            >
              More
            </button>
            <button
              onClick={() => this.addRemoveIngredient("less", "Cheese")}
              className="ingrBtn"
            >
              Less
            </button>
          </div>

          <p>Meat</p>
          <div className="ingrBtns">
            <button
              onClick={() => this.addRemoveIngredient("more", "Meat")}
              className="ingrBtn"
            >
              More
            </button>
            <button
              onClick={() => this.addRemoveIngredient("less", "Meat")}
              className="ingrBtn"
            >
              Less
            </button>
          </div>

          {/* Place Order button */}
          <Link to="/login">
            <button className="orderBtn" disabled={!isPlaceOrderEnabled}>
              Place Order
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
