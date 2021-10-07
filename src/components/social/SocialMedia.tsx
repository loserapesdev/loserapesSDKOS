import React from 'react';
import styled from '@emotion/styled';
import {FaFacebookSquare} from '@react-icons/all-files/fa/FaFacebookSquare';
import {FaGithubSquare} from '@react-icons/all-files/fa/FaGithubSquare';
import {FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin';
import {FaTwitterSquare} from '@react-icons/all-files/fa/FaTwitterSquare';
import Link from 'next/link';
import {Zoom} from 'react-awesome-reveal';
import CustomIcon, {SocialMediaProps} from '../icon/CustomIcon';

export default function SocialMedia() {
  return (
    <Container>
      <nav>
        <ul>
          {socialMedia.map(sm => (
            <li key={sm.name}>
              <Link href={sm.url}>
                <a target="_blank">
                  <Zoom duration={500}>
                    <CustomIcon {...sm} />
                  </Zoom>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}

const socialMedia: SocialMediaProps[] = [
  {
    url: 'https://www.facebook.com/codegino',
    icon: FaFacebookSquare,
    name: 'facebook',
    color: '#1877f2',
  },
  {
    url: 'https://github.com/codegino',
    icon: FaGithubSquare,
    name: 'github',
    color: '#171515',
  },
  {
    url: 'https://www.linkedin.com/in/carlogino/',
    icon: FaLinkedin,
    name: 'linkedin',
    color: '#0a66c2',
  },
  {
    url: 'https://twitter.com/code_gino',
    icon: FaTwitterSquare,
    name: 'twitter',
    color: '#1da1f2',
  },
];

const Container = styled.div`
  > nav {
    > ul {
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;

      > li {
        :not(:last-child) {
          margin-right: var(--margin-very-small);
        }
      }
    }
  }
`;
