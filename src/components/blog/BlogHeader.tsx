import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';
import {IGetPlaiceholderReturn} from 'plaiceholder';
import {IBlogMetadata} from '../../models/blog';
import {BlurringImage} from '../BlurringImage';

type Props = {
  blog: IBlogMetadata;
} & Pick<IGetPlaiceholderReturn, 'svg' | 'img'>;

const BlogHeader: FunctionComponent<Props> = ({blog, img, svg}) => {
  return (
    <Article>
      <h1>{blog.title}</h1>
      {blog.description && (
        <>
          <h2 className="description">{blog.description}</h2>
          <p>{blog.date}</p>
        </>
      )}
      {img && svg && !blog.hideBanner ? (
        <BlurringImage
          alt="Hero photo"
          img={img}
          svg={svg}
          layout="responsive"
          height={700}
          width={1200}
          objectFit="cover"
          objectPosition="center"
          style={{borderRadius: '0.5rem', marginTop: 'var(--margin-medium)'}}
        />
      ) : null}
      {blog.bannerDescription ? (
        <aside style={{marginTop: 'var(--margin-very-small)'}}>
          <i style={{fontSize: '0.85em'}}>{blog.bannerDescription}</i>
        </aside>
      ) : null}
    </Article>
  );
};

const Article = styled.article`
  margin-bottom: var(--margin-medium);

  text-align: center;
`;

export default BlogHeader;
