import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

import { useEffect, useState } from "react";

import X from './assets/icons/x.png';
import Y from './assets/icons/y.png';

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
  ])

  const containsDigit = (variable) => {
    const regex = /\d/;
    return regex.test(variable);
  }

  const updateRules = (index) => {
    rules.map((rule, idx) => {
      if (idx === index) {
        rule.pass = true;
      }
    })
  }

  useEffect (() => {
    if(pass.length > 0) setRulesActive(true);
    if(pass.length > 5) updateRules(0);
    if(containsDigit(pass)) updateRules(1);
  }, [pass])

  return (
    <Container>
      <GlobalStyle />
      <Password
        type="text"
        onChange={(e) => setPass(e.currentTarget.value)}
      />

      <RulesContainer>
        {
          rulesActive &&
          rules.map((rule, idx) => {
            if (idx === 0) {
              return (
                <Rule key={rule.id}>
                  <RuleIcon src={rule.pass ? Y : X} />
                  <RuleNumber>
                    {rule.id}
                  </RuleNumber>
                  <RuleDesc>
                    {rule.rule}
                  </RuleDesc>
                </Rule>
              );
            }
            return (
              rules[idx - 1].pass &&
              <Rule key={rule.id}>
                <RuleIcon src={rule.pass ? Y : X} />
                <RuleNumber>
                  {rule.id}
                </RuleNumber>
                <RuleDesc>
                  {rule.rule}
                </RuleDesc>
              </Rule>
            );
          })
        }
      </RulesContainer>
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

const Password = styled.input`
  width: 35vw;
  padding: 20px;
  border: 1px solid #fff;
  border-radius: 15px;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  font-family: monospace;
  background-color: transparent;
`;

const RulesContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column-reverse;
`;

const Rule = styled.div`
  padding: 25px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ddd;
  color: #000;
  margin-bottom: 30px;

  animation: fadeIn .4s ease 1;

  @keyframes fadeIn {
    from {
      transform: translateY(-25px);
      opacity: .1;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const RuleIcon = styled.img`
  width: 25px;
`;

const RuleNumber = styled.div`
  font-size: 18px;
`;

const RuleDesc = styled.div`
  font-size: 24px;
`;