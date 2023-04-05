import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useNavigate } from "react-router-dom";
import "./BancCard.css";
import { Button, Input } from "@mui/material";

export default function BankCard() {
  const [state, setState] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const navigate = useNavigate();
  return (
    <div className="bankMainContainer">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Rubik",
          fontSize: "40px",
          padding: "20px",
        }}
      >
        Card Details
      </h1>
      <div className="bankCard__container">
        <div
          id="PaymentForm"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row-reverse",
            width: "80%",
            paddingBottom: "70px",
          }}
        >
          <form
            style={{
              display: "flex",
              justifyContent: "center",
              width: "19%",
              flexDirection: "column",
              gap: "15px",
              alignSelf: "center",
              paddingTop: "20px",
              marginLeft: "35%",
            }}
          >
            <Input
              className="cardBankInp"
              onChange={(e) => {
                setState({ ...state, [e.target.name]: e.target.value });
              }}
              type="tel"
              name="number"
              placeholder="Card Number"
              style={{
                height: "30px",
                borderRadius: "5px",
                marginTop: "-17px",
              }}
            />
            <Input
              className="cardBankInp"
              onChange={(e) => {
                setState({ ...state, [e.target.name]: e.target.value });
              }}
              type="tel"
              name="name"
              placeholder="Card Name"
              style={{ height: "30px", borderRadius: "5px" }}
            />
            <Input
              className="cardBankInp"
              onChange={(e) => {
                setState({ ...state, [e.target.name]: e.target.value });
              }}
              type="tel"
              name="cvc"
              placeholder="cvc"
              style={{ height: "30px", borderRadius: "5px" }}
            />
            <Input
              className="cardBankInp"
              onChange={(e) => {
                setState({ ...state, [e.target.name]: e.target.value });
              }}
              type="tel"
              name="expiry"
              placeholder="expiry"
              style={{ height: "30px", borderRadius: "5px" }}
            />
            <Input
              className="cardBankInp"
              onChange={(e) => {
                setState({ ...state, [e.target.name]: e.target.value });
              }}
              type="tel"
              name="focus"
              placeholder="focus"
              style={{ height: "30px", borderRadius: "5px" }}
            />
            <Button
              className="bankCardBtn"
              onClick={() => navigate("/youreCard")}
            >
              Add
            </Button>
          </form>
          <Cards
            cvc={state.cvc}
            expiry={state.expiry}
            focused={state.focus}
            name={state.name}
            number={state.number}
          />
        </div>
      </div>
    </div>
  );
}
