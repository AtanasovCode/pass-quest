import styled from "styled-components";

import X from '../assets/icons/x.png';
import Y from '../assets/icons/y.png';

const Rules = ({
    rules,
    rulesActive,
}) => {
    return (
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
    );
}


export default Rules;

const RulesContainer = styled.div`
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