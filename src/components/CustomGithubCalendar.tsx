import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import {Zoom} from 'react-awesome-reveal';
import GithubCalendar from 'react-github-calendar';
import {useMediaQuery} from 'react-responsive';
import ReactTooltip from 'react-tooltip';

export default function CustomGithubCalendar() {
  const is400PxAndUp = useMediaQuery({
    query: '(min-width: 400px)',
  });

  return (
    <Container triggerOnce>
      <h2>
        My&nbsp;
        <Link href="https://github.com/codegino">
          <a
            target="_blank"
            aria-label="Github profile"
            rel="noopener nofollow"
            data-tip="Link to my Github profile"
          >
            Github
          </a>
        </Link>
        &nbsp;activity
      </h2>

      <GithubCalendar
        username="codegino"
        hideColorLegend={!is400PxAndUp}
        blockMargin={5}
        blockRadius={3}
        blockSize={15}
      >
        <ReactTooltip html />
      </GithubCalendar>
    </Container>
  );
}

const Container = styled(Zoom)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: var(--spacing-medium) 0;
  padding: 0 0.5rem;
  overflow: hidden;

  h2 {
    margin: 0;
  }

  a {
    color: var(--color-primary-dark);
    font-size: 1em;

    &:hover {
      text-decoration: underline;
    }
  }
`;
