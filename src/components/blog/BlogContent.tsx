import React, {FunctionComponent, ReactPropTypes} from 'react';
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote';
import Head from 'next/head';
import BlockQuote from './BlockQuote';
import BlogAnchor from './BlogAnchor';
import BlogParagraph from './BlogParagraph';
import CodeBlock from './CodeBlock';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  Head,
  code: CodeBlock,
  blockquote: BlockQuote,
  a: BlogAnchor,
  p: BlogParagraph,
  li: (props: React.HTMLProps<HTMLLIElement>) => (
    <li {...props} style={{fontSize: '1.8rem'}} />
  ),
};

type Props = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const BlogContent: FunctionComponent<Props> = ({source}) => {
  return <MDXRemote {...source} components={components} />;
};

export default BlogContent;