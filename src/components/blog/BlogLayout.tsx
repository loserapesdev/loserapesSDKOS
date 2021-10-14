import React, {ComponentType} from 'react';
import styled from '@emotion/styled';
import {MDXProvider} from '@mdx-js/react';
import dynamic from 'next/dynamic';
import {CodeBlockProps} from './CodeBlock';

const CodeBlock = dynamic(() => import('./CodeBlock'), {
  ssr: false,
});

const components: {
  [key: string]: ComponentType<CodeBlockProps>;
} = {
  pre: props => <div {...props} />,
  code: CodeBlock,
};

const Layout: React.FC = props => {
  return (
    <Container>
      <MDXProvider components={components}>
        <main {...props}></main>
      </MDXProvider>
    </Container>
  );
};

const Container = styled.section`
  margin: auto;
  padding: 2rem;
  max-width: 50rem;
`;

export default Layout;
