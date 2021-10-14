import React from 'react';
import styled from '@emotion/styled';
import Highlight, {defaultProps, Language} from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live';
import useDarkMode from 'use-dark-mode';
import {mediaQuery} from '../../utils/media-query';

export type CodeBlockProps = {
  children: string;
  className: string;
  live: boolean;
};

const CodeBlock: React.FC<CodeBlockProps> = ({children, className, live}) => {
  const {value: isDarkMode} = useDarkMode();
  const language = className.replace(/language-/, '') as Language;

  if (live) {
    return (
      <>
        <LabelContainer style={{top: '40px'}}>{language}</LabelContainer>
        <div style={{marginTop: '40px'}}>
          <LiveProvider code={children} theme={vsDark}>
            <LiveEditor />
            <LiveError />
            <LivePreview />
          </LiveProvider>
        </div>
      </>
    );
  }

  return (
    <>
      <LabelContainer>{language}</LabelContainer>
      <Highlight
        {...defaultProps}
        code={children.trim()}
        language={language}
        theme={vsDark}
      >
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <Pre
            className={className}
            style={{
              ...style,
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token, key})} />
                ))}
              </div>
            ))}
          </Pre>
        )}
      </Highlight>
    </>
  );
};

const Pre = styled.pre`
  padding-top: 20px;
  padding-bottom: 15px;
  padding-right: 10px;
  padding-left: 10px;
  overflow: auto;
  display: flex;
  position: relative;
  flex-direction: column;
`;

const LabelContainer = styled.aside`
  text-align: left;
  left: 0px;
  padding-left: 7px;
  top: 13px;
  height: 20px;
  position: relative;
  color: var(--color-primary-light);
  background-color: var(--color-dark);

  ${mediaQuery(900, `left: 5px;`)}
`;

export default CodeBlock;
