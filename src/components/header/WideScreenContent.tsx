import React from 'react';
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {useRouter} from 'next/router';
import useDarkMode from 'use-dark-mode';
import {mediaQuery} from '../../utils/media-query';
import SocialMedia from '../social/SocialMedia';
import {navigationLinks} from './nav-links';

const DarkModeToggle = dynamic(() => import('react-dark-mode-toggle'), {
  ssr: false,
});

export default function WideScreenContentImpl() {
  const router = useRouter();
  const {value: isDarkMode, toggle} = useDarkMode();

  return (
    <WideScreenContainer>
      <nav>
        <ul>
          {navigationLinks.map(link => (
            <li key={link.label} className="underline-on-hover">
              <Link href={link.url}>
                <a
                  className={
                    router.asPath.includes(`${link.url}`) ? 'active' : ''
                  }
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="actions-wrapper">
        <SocialMedia />
        <div className="h-14 max-h-14 ml-1">
          <DarkModeToggle onChange={toggle} checked={isDarkMode} size={70} />
        </div>
      </div>
    </WideScreenContainer>
  );
}

const WideScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  display: none;

  > .actions-wrapper {
    display: flex;
  }

  ${mediaQuery(700, 'display: flex;')}

  > nav {
    > ul {
      align-items: center;
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;

      > li {
        color: #dddddd;

        &:hover {
          color: #ffffff;
        }

        .active {
          color: var(--color-primary-light);
          border-bottom: 2px solid var(--color-primary-light);
        }

        :not(:last-child) {
          margin-right: 1rem;
        }
      }
    }
  }
`;
