import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

import Rules from "./components/Rules";
import InputPassword from "./components/InputPassword";

import { useEffect, useState } from "react";

const App = () => {

  const [rulesActive, setRulesActive] = useState(false);
  const [pass, setPass] = useState("");

  const [rules, setRules] = useState([
    {
      id: 1,
      rule: "Password must contain at least 6 letters",
      pass: false,
    },
    {
      id: 2,
      rule: "Password must contain at least one digit",
      pass: false,
    },
    {
      id: 3,
      rule: "Password must contain at least one capital letter",
      pass: false,
    },
    {
      id: 4,
      rule: "Digits must add up to 25",
      pass: false,
    },
    {
      id: 5,
      rule: "Must contain one german car brand",
      pass: false,
    },
  ])

  //German Car Brands
  const [germanCarBrands, setGermanCarBrands] = useState([
    "Volkswagen",
    "BMW",
    "Mercedes",
    "Audi",
    "Porsche",
    "Opel",
    "Audi",
    "Vauxhall",
    "Mini",
    "Bentley",
    "Smart",
    "Skoda"
  ]);

  //Functions meant for checking if the password fulfils certain requirements
  const containsDigit = (x) => {
    const regex = /\d/;
    return regex.test(x);
  }

  const containsCapitalLetter = (x) => {
    const capitals = /[A-Z]/;
    return capitals.test(x);
  }

  const checkDigitSum = (x) => {
    // Regular expression to match all digits in the input string
    const digitRegex = /\d/g;

    // Use the match() method to find all matches of digits in the value
    const digitsArray = x.match(digitRegex);

    // Check if there are any digits found
    if (digitsArray) {
      // Convert each element in the digitsArray to a number and calculate the sum
      const sum = digitsArray.reduce((acc, digit) => acc + parseInt(digit), 0);
      return sum;
    } else {
      // If no digits are found, return 0
      return 0;
    }
  }

  const includesGermanCarBrand = (x) => {
    // Convert the value to lowercase for a case-insensitive check
    const lowercasedValue = x.toLowerCase();

    // Loop through each word in the wordArray
    for (const word of germanCarBrands) {
      // Convert the current word to lowercase for a case-insensitive comparison
      const lowercasedWord = word.toLowerCase();

      // Check if the lowercased value contains the lowercased word
      if (lowercasedValue.includes(lowercasedWord)) {
        return true; // If a match is found, return true
      }
    }

    return false; // If no match is found, return false
  }

  const updateRules = (index) => {
    setRules((prevRules) => {
      return prevRules.map((rule, idx) => {
        if (idx === index) {
          return { ...rule, pass: true };
        }
        return rule;
      });
    });
  };

  useEffect(() => {
    if (pass.length > 0) setRulesActive(true);
    if (pass.length > 5) updateRules(0);
    if (containsDigit(pass)) updateRules(1);
    if (containsCapitalLetter(pass)) updateRules(2);
    if (checkDigitSum(pass) === 25) updateRules(3);
    if (includesGermanCarBrand(pass)) updateRules(4);
  }, [pass])

  return (
    <Container>
      <GlobalStyle />
      <InputPassword 
        setPass={setPass}
      />
      <Rules
        rules={rules}
        rulesActive={rulesActive}
      />
    </Container>
  );
};

export default App;

const Container = styled.div`
  min-height: 100vh;
  background-color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;